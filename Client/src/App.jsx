import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/NavBar/Header";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import data from "./data";
import Login from "./pages/Auth/Login";
import Profile from "./pages/Profile/Profile";
import SubNavbar from "./components/SubNavBar/SubNavbar";
import LandingPage from "./pages/Home/landingPage";
import PainRelief from "./pages/CategoryLinks/PainRelief";
import ColdandFlu from "./pages/CategoryLinks/ColdandFlu";
import FirstAid from "./pages/CategoryLinks/FirstAid";
import DiabetesCare from "./pages/CategoryLinks/DiabetesCare";
import Signup from "./pages/Auth/signup";
import NotFound from "./pages/Errors/NotFound";
import "./App.css";
import api from "./api";

function App() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  // helper: strips per box safe
  const getStripsPerBox = (product) =>
    Number(product.stripsPerBox ?? product.strip_count ?? 0);

  // helper: is backend id
  const looksLikeBackendId = (id) =>
    typeof id === "string" && /^[0-9a-fA-F]{24}$/.test(id);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/category");
        const list = res.data?.data || [];
        setCategories(list);
      } catch (err) {
        console.warn("Could not fetch categories", err);
      }
    };
    fetchCategories();
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  // ---------- cart local state (we'll migrate to API next) ----------
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const fetchCart = async () => {
    try {
      const res = await api.get("/cart/get-user-cart");
      console.log("🛒 Cart from server:", res.data);
      setCartItems(res.data.data.items || []);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  useEffect(() => {
    if (isLoggedIn) fetchCart();
  }, [isLoggedIn]);

  const location = useLocation();
  const hideNavbarPaths = ["/login", "/signup"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  // ---------- firstRun: DON'T clear token/user; only clear cached products/cart ----------
  useEffect(() => {
    if (!localStorage.getItem("firstRunDone")) {
      localStorage.removeItem("products");
      localStorage.removeItem("cart");
      localStorage.setItem("firstRunDone", "true");
    }
  }, []);

  // ---------- helper to map backend product -> frontend shape ----------
  const mapProduct = (p) => ({
    _id: p._id || p.id,
    name: p.name,
    desc: p.description || p.desc || "",
    price: p.price,
    image: p.image || "",
    pieces: typeof p.stock !== "undefined" ? p.stock : p.pieces || 0,
    IsRoshetta: !!(p.requires_prescription || p.IsRoshetta),
    stripsPerBox: p.strip_count ?? p.stripsPerBox ?? 0,
    category: p.category,
    top_selling: p.top_selling ?? false,
    raw: p,
  });

  // ---------- products: initialize from cache or fallback data ----------
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : data;
  });

  // keep cached products in localStorage (useful offline / fast reload)
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // ---------- fetch products from API on mount ----------
  useEffect(() => {
    let mounted = true;
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products?limit=100");
        const items = (res.data?.data || []).map(mapProduct);
        if (!mounted) return;
        setProducts(items.length ? items : data);
        localStorage.setItem(
          "products",
          JSON.stringify(items.length ? items : data)
        );
      } catch (err) {
        console.error("Failed to fetch products:", err);
        // هنفضل على saved products أو data
      }
    };
    fetchProducts();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    const fetchFeatured = async () => {
      try {
        const res = await api.get("/products?top_selling=true&limit=4");
        const items = (res.data?.data || []).map(mapProduct);
        if (!mounted) return;
        setFeaturedProducts(items || []);
      } catch (err) {
        console.error("Failed to fetch featured products:", err);
        setFeaturedProducts([]); // fallback
      }
    };
    fetchFeatured();
    return () => {
      mounted = false;
    };
  }, []);

  // ---------- user state (keep as you had) ----------
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      // optional: fetch user's cart from API here later
    } else {
      setUser(null);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const admin = {
      username: "abdelrahman@gmail.com",
      password: "admin123",
      role: "admin",
    };

    if (!localStorage.getItem("adminAccount")) {
      localStorage.setItem("adminAccount", JSON.stringify(admin));
    }
  }, []);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    imageFile: null,
    image: "",
    desc: "",
    pieces: "",
    category: "",
    stripsPerBox: "",
  });

  // inside App.jsx (replace your current handleAddNewProduct)
  // داخل App.jsx -> handleAddNewProduct (استبدل نسختك بهذه النسخة)
  const handleAddNewProduct = async () => {
    try {
      if (!newProduct.name || !newProduct.price || !newProduct.category) {
        alert("Please provide name, price and category");
        return;
      }

      const form = new FormData();
      form.append("name", newProduct.name);
      form.append("description", newProduct.desc || "");
      form.append("price", String(newProduct.price));
      form.append("category", newProduct.category); // must be ObjectId
      form.append("stock", String(newProduct.pieces || 0));
      form.append("has_strips", String(!!newProduct.stripsPerBox));
      form.append("strip_count", String(newProduct.stripsPerBox || 0));
      form.append(
        "requires_prescription",
        String(!!newProduct.requires_prescription)
      );

      if (newProduct.imageFile) {
        form.append("image", newProduct.imageFile);
      }

      const res = await api.post("/products", form); // axios sets multipart automatically

      // map response -> frontend shape
      let created = mapProduct(res.data.data);

      // ====== important: if backend returned category as id (string),
      // replace with the category object from categories[] so category pages pick it up ======
      if (created && created.category && typeof created.category === "string") {
        const catObj = categories.find((c) => c._id === created.category);
        if (catObj) created.category = catObj;
      }

      setProducts((prev) => [...prev, created]);

      // reset form
      setNewProduct({
        name: "",
        price: "",
        image: "",
        imageFile: null,
        desc: "",
        pieces: "",
        category: "",
        stripsPerBox: "",
        requires_prescription: false,
      });
    } catch (err) {
      console.error("Error adding product:", err);
      alert(err.response?.data?.message || "Failed to add product");
    }
  };

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // helper: normalize id whether item is product (from list) or cart-item
  // helpers في App.jsx
  const getItemId = (item) => {
    if (!item) return null;
    // لو العنصر من كارت (فيه product جوّه)
    if (item.product) return item.product._id || item.product.id || null;
    // لو العنصر من لست المنتجات مباشر
    const rawId = item._id ?? item.id ?? null;
    return rawId !== null && typeof rawId !== "undefined"
      ? String(rawId)
      : null;
  };
  // handleAdd — send box-quantity to server always when logged in.
  // For strip button: send fractional box quantity = 1 / stripsPerBox
  const handleAdd = async (itemOrProduct, addQty = 1, options = {}) => {
    const product = itemOrProduct.product
      ? itemOrProduct.product
      : itemOrProduct;
    const id = getItemId(itemOrProduct);
    const stripsPerBox = getStripsPerBox(product);
    const unit =
      options.unit ||
      (itemOrProduct.unit
        ? itemOrProduct.unit
        : itemOrProduct.isStrip
        ? "strip"
        : itemOrProduct.NOI
        ? "box"
        : "box");

    const qty = Number(addQty || 1);

    // if logged in & backend id -> always call server
    if (isLoggedIn && looksLikeBackendId(id)) {
      try {
        // compute quantity in BOX units (backend expects boxes)
        let qtyToSend = qty;
        if (unit === "strip" && stripsPerBox > 0) {
          qtyToSend = Number(
            ((1 / Math.max(1, stripsPerBox)) * qty).toFixed(6)
          );
        }
        // ensure not zero
        if (qtyToSend <= 0)
          qtyToSend = Number((1 / Math.max(1, stripsPerBox)).toFixed(6));

        const res = await api.post("/cart/add-to-cart", {
          productId: id,
          quantity: qtyToSend,
        });

        setCartItems(res.data.data.items || []);

        // refresh single product stock view (optional)
        try {
          const prodRes = await api.get(`/products/${id}`);
          const updated = mapProduct
            ? mapProduct(prodRes.data.data)
            : prodRes.data.data;
          setProducts((prev) =>
            prev.map((p) =>
              String(p._id ?? p.id) === String(id)
                ? {
                    ...p,
                    pieces:
                      typeof updated.pieces !== "undefined"
                        ? updated.pieces
                        : updated.stock ?? p.pieces,
                  }
                : p
            )
          );
        } catch (e) {
          console.error("Error adding to server cart:", e);
        }
      } catch (err) {
        console.error("Error adding to server cart:", err);
        // show UI error if needed
      }
      return;
    }

    // guest/local fallback (unchanged)
    if (stripsPerBox > 0) {
      addLocalCartItem(
        product,
        unit === "box" ? qty * stripsPerBox : qty,
        "strip"
      );
    } else {
      addLocalCartItem(product, qty, "box");
    }
  };

  const handleRemove = async (item) => {
    const pid = item.product?._id ?? item._id ?? item.id;
    const product = item.product ?? item;
    const stripsPerBox = getStripsPerBox(product);
    const unit = item.unit || (stripsPerBox > 0 ? "strip" : "box");

    // server-backed path (for logged in)
    if (isLoggedIn && looksLikeBackendId(pid)) {
      try {
        // find the server-side cart item (quantity is stored in boxes there)
        const serverItem = cartItems.find(
          (ci) => String(ci.product?._id ?? ci._id ?? ci.id) === String(pid)
        );
        const currentQty = Number(serverItem?.quantity ?? serverItem?.NOI ?? 0);

        // delta in box units
        const delta =
          unit === "strip" && stripsPerBox > 0
            ? 1 / Math.max(1, stripsPerBox)
            : 1;
        const newQty = Number((currentQty - delta).toFixed(6));

        if (newQty < 1) {
          // If result below 1 -> remove item completely (backend PATCH rejects <1)
          const res = await api.delete(`/cart/${pid}`);
          setCartItems(res.data.data.items || []);
          // refresh product stock
          try {
            const prodRes = await api.get(`/products/${pid}`);
            const updated = mapProduct
              ? mapProduct(prodRes.data.data)
              : prodRes.data.data;
            setProducts((prev) =>
              prev.map((p) =>
                String(p._id ?? p.id) === String(pid)
                  ? {
                      ...p,
                      pieces: updated.pieces ?? updated.stock ?? p.pieces,
                    }
                  : p
              )
            );
          } catch (e) {
            console.error("Error adding to server cart:", e);
          }
        } else {
          // patch with newQty (>= 1)
          const res = await api.patch(`/cart/${pid}`, { quantity: newQty });
          setCartItems(res.data.data.items || []);
          // optimistic product pieces restore
          setProducts((prev) =>
            prev.map((p) => {
              if (String(p._id ?? p.id) !== String(pid)) return p;
              const deltaPieces = delta; // delta in boxes (we show pieces as boxes)
              return {
                ...p,
                pieces: +((p.pieces ?? p.stock ?? 0) + deltaPieces).toFixed(6),
              };
            })
          );
        }
      } catch (err) {
        console.error("Error removing server item:", err);
      }
      return;
    }

    // guest/local fallback (unchanged)
    setCartItems((prev) => {
      const next = prev
        .map((ci) => {
          const id = ci.product?._id ?? ci._id ?? ci.id;
          if (String(id) !== String(pid)) return ci;
          const out = { ...ci };
          out.quantity = Math.max(1, (out.quantity || 1) - 1);
          return out;
        })
        .filter(Boolean);
      localStorage.setItem("cart", JSON.stringify(next));
      return next;
    });

    // restore fractional piece to products (unchanged)
    setProducts((prev) =>
      prev.map((p) => {
        if (String(p._id ?? p.id) !== String(pid)) return p;
        const stripsPerBoxLocal = getStripsPerBox(p);
        const delta =
          (item.unit || (stripsPerBoxLocal > 0 ? "strip" : "box")) === "strip"
            ? 1 / Math.max(1, stripsPerBoxLocal)
            : 1;
        return {
          ...p,
          pieces: +((p.pieces ?? p.stock ?? 0) + delta).toFixed(4),
        };
      })
    );
  };

  const handleDelete = async (item) => {
    const pid = item.product?._id ?? item._id ?? item.id;
    const product = item.product ?? item;
    const stripsPerBox = getStripsPerBox(product);
    const unit = item.unit || (stripsPerBox > 0 ? "strip" : "box");
    // qty in cart (boxes if server)
    const qty = item.quantity ?? item.NOI ?? 0;

    if (isLoggedIn && looksLikeBackendId(pid)) {
      try {
        const res = await api.delete(`/cart/${pid}`);
        setCartItems(res.data.data.items || []);

        // refresh product stock from server (optional)
        try {
          const prodRes = await api.get(`/products/${pid}`);
          const updated = mapProduct
            ? mapProduct(prodRes.data.data)
            : prodRes.data.data;
          setProducts((prev) =>
            prev.map((p) =>
              String(p._id ?? p.id) === String(pid)
                ? { ...p, pieces: updated.pieces ?? updated.stock ?? p.pieces }
                : p
            )
          );
        } catch (e) {
          console.error("Error adding to server cart:", e);
        }
      } catch (err) {
        console.error("Error deleting server cart item:", err);
      }
      return;
    }

    // guest/local fallback
    setCartItems((prev) => {
      const next = prev.filter(
        (ci) => (ci.product?._id ?? ci._id ?? ci.id) !== String(pid)
      );
      localStorage.setItem("cart", JSON.stringify(next));
      return next;
    });

    // restore pieces locally
    setProducts((prev) =>
      prev.map((p) => {
        if (String(p._id ?? p.id) !== String(pid)) return p;
        const delta = unit === "strip" ? qty / Math.max(1, stripsPerBox) : qty;
        return {
          ...p,
          pieces: +((p.pieces ?? p.stock ?? 0) + delta).toFixed(4),
        };
      })
    );
  };

  const handleClearCart = async () => {
    if (!isLoggedIn) {
      // local clear
      // restore local products pieces using current cart items
      setProducts((prev) => {
        const next = [...prev];
        cartItems.forEach((ci) => {
          const pid = ci.product?._id ?? ci._id ?? ci.id;
          const qty = ci.quantity ?? ci.NOI ?? 1;
          const idx = next.findIndex(
            (p) => String(p._id ?? p.id) === String(pid)
          );
          if (idx > -1) {
            next[idx] = {
              ...next[idx],
              pieces: (next[idx].pieces ?? next[idx].stock ?? 0) + qty,
            };
          }
        });
        return next;
      });

      setCartItems([]);
      localStorage.setItem("cart", JSON.stringify([]));
      return;
    }

    // logged-in server path
    try {
      const res = await api.delete("/cart/clear-cart");
      setCartItems(res.data.data.items || []); // should be []
      // re-fetch products to sync stocks
      try {
        const prodRes = await api.get("/products?limit=100");
        const items = (prodRes.data?.data || []).map(mapProduct);
        setProducts(items.length ? items : products);
        localStorage.setItem("products", JSON.stringify(items));
      } catch (err) {
        console.warn("Failed to refresh products after clearing cart:", err);
      }
    } catch (err) {
      console.error("Error clearing cart:", err);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Failed to delete product. Check console.");
    }
  };

  const [editedProduct, setEditedProduct] = useState({ name: "", price: "" });
  const [editingProductId, setEditingProductId] = useState(null);

  const handleEdit = (product) => {
    setEditingProductId(product._id);
    setEditedProduct({
      name: product.name,
      price: product.price,
      image: product.image,
      imageFile: null,
      pieces: product.pieces,
      stripsPerBox: product.stripsPerBox,
      desc: product.desc,
      category:
        product.category && product.category._id
          ? product.category._id
          : product.category || "",
    });
  };

  // addLocalCartItem: unified item per product; for strip-products we store stripsCount in quantity
  const addLocalCartItem = (product, qty = 1, unit = "box") => {
    const prodId = product._id
      ? String(product._id)
      : `local-${product.id ?? Date.now()}`;
    const stripsPerBox = getStripsPerBox(product);
    const stripUnitValue = stripsPerBox > 0 ? 1 / stripsPerBox : 1;

    setCartItems((prev) => {
      // find existing entry for same product (we always merge strips into single entry)
      const existsIndex = prev.findIndex((ci) => {
        const pid = ci.product?._id ?? ci._id ?? ci.id;
        return String(pid) === prodId;
      });

      const next = [...prev];

      if (existsIndex > -1) {
        // update existing
        const existing = { ...next[existsIndex] };

        if (unit === "strip" && stripsPerBox > 0) {
          existing.quantity = (existing.quantity || 0) + qty; // quantity = strips count
          existing.unit = "strip";
          existing.price =
            Number(product.price ?? product.raw?.price ?? 0) /
            Math.max(1, stripsPerBox);
        } else {
          // box mode (product without strips)
          existing.quantity = (existing.quantity || 0) + qty;
          existing.unit = "box";
          existing.price = Number(product.price ?? product.raw?.price ?? 0);
        }

        next[existsIndex] = existing;
      } else {
        // new cart entry
        const entry =
          unit === "strip" && stripsPerBox > 0
            ? {
                product: { ...product, _id: prodId },
                quantity: qty, // strips count
                unit: "strip",
                price: Number(product.price ?? 0) / Math.max(1, stripsPerBox),
              }
            : {
                product: { ...product, _id: prodId },
                quantity: qty,
                unit: "box",
                price: Number(product.price ?? 0),
              };

        next.push(entry);
      }

      localStorage.setItem("cart", JSON.stringify(next));
      return next;
    });

    // update displayed product pieces as fractional
    setProducts((prev) =>
      prev.map((p) => {
        if (String(p._id ?? p.id) !== prodId) return p;
        const currentPieces = Number(p.pieces ?? p.stock ?? 0);
        const delta =
          unit === "strip" && stripsPerBox > 0 ? qty * stripUnitValue : qty;
        return {
          ...p,
          pieces: Math.max(0, +(currentPieces - delta).toFixed(4)),
        };
      })
    );
  };

  // handleCancelEdit
  const handleCancelEdit = () => {
    setEditingProductId(null);
    setEditedProduct({ name: "", price: "" });
  };

  const handleUpdate = async (id, updatedProduct) => {
    try {
      // build allowed data object (same logic)
      const allowed = {
        name: updatedProduct.name,
        description: updatedProduct.desc,
        price:
          typeof updatedProduct.price !== "undefined"
            ? Number(updatedProduct.price)
            : undefined,
        category: updatedProduct.category, // category id
        stock:
          typeof updatedProduct.pieces !== "undefined"
            ? Number(updatedProduct.pieces)
            : undefined,
        has_strips:
          typeof updatedProduct.stripsPerBox !== "undefined"
            ? Boolean(updatedProduct.stripsPerBox > 0)
            : undefined,
        strip_count:
          typeof updatedProduct.stripsPerBox !== "undefined"
            ? Number(updatedProduct.stripsPerBox)
            : undefined,
        requires_prescription:
          typeof updatedProduct.requires_prescription !== "undefined"
            ? Boolean(updatedProduct.requires_prescription)
            : undefined,
        // don't include image here for JSON path
      };

      const payloadObj = Object.fromEntries(
        Object.entries(allowed).filter(([v]) => typeof v !== "undefined")
      );

      let res;
      if (updatedProduct.imageFile) {
        // send as multipart/form-data with file
        const form = new FormData();
        // append all payload keys as strings
        Object.entries(payloadObj).forEach(([k, v]) =>
          form.append(k, String(v))
        );
        // append file
        form.append("image", updatedProduct.imageFile);
        // axios will set proper headers for FormData
        res = await api.patch(`/products/${id}`, form);
      } else {
        // JSON path
        if (Object.keys(payloadObj).length === 0) {
          alert("No changes to update");
          return;
        }
        res = await api.patch(`/products/${id}`, payloadObj);
      }

      // update local state
      setProducts((prev) =>
        prev.map((p) => (p._id === id ? mapProduct(res.data.data) : p))
      );

      // close editor
      setEditingProductId(null);
      setEditedProduct({ name: "", price: "" });
    } catch (err) {
      console.error("Error updating product:", err);
      alert(
        err.response?.data?.message ||
          "Failed to update product. Check console."
      );
    }
  };

  return (
    <div className={!shouldHideNavbar ? "pt-5" : ""}>
      {!shouldHideNavbar && (
        <>
          <Navbar
            count={cartItems.reduce(
              (a, c) => a + (c.quantity ?? c.NOI ?? 0),
              0
            )}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            user={user}
            setUser={setUser}
            isLoggedIn={isLoggedIn}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <SubNavbar />
        </>
      )}
      <div
        className={
          !shouldHideNavbar ? "mt-4 container-fluid p-0" : "container-fluid p-0"
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                products={products}
                handleAdd={handleAdd}
                setProducts={setProducts}
                searchTerm={searchTerm}
                featuredProducts={featuredProducts}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
                handleDelete={handleDelete}
                handleClearCart={handleClearCart}
                setCartItems={setCartItems}
                products={products}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetails handleAdd={handleAdd} products={products} />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup
                setCartItems={setCartItems}
                setUser={setUser}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                setCartItems={setCartItems}
                setUser={setUser}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                setCartItems={setCartItems}
                user={user}
                setUser={setUser}
                setIsLoggedIn={setIsLoggedIn}
                setProducts={setProducts}
              />
            }
          />
          <Route
            path="/category/pain-relief"
            element={
              <PainRelief
                searchTerm={searchTerm}
                products={products}
                user={user}
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                handleDeleteProduct={handleDeleteProduct}
                handleUpdate={handleUpdate}
                editingProductId={editingProductId}
                editedProduct={editedProduct}
                setEditedProduct={setEditedProduct}
                setEditingProductId={setEditingProductId}
                handleCancelEdit={handleCancelEdit}
                newProduct={newProduct}
                setNewProduct={setNewProduct}
                handleAddNewProduct={handleAddNewProduct}
                categories={categories}
              />
            }
          />
          <Route
            path="/category/cold-and-flu"
            element={
              <ColdandFlu
                searchTerm={searchTerm}
                products={products}
                user={user}
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                handleDeleteProduct={handleDeleteProduct}
                handleUpdate={handleUpdate}
                editingProductId={editingProductId}
                editedProduct={editedProduct}
                setEditedProduct={setEditedProduct}
                setEditingProductId={setEditingProductId}
                handleCancelEdit={handleCancelEdit}
                newProduct={newProduct}
                setNewProduct={setNewProduct}
                handleAddNewProduct={handleAddNewProduct}
                categories={categories}
              />
            }
          />
          <Route
            path="/category/first-aid"
            element={
              <FirstAid
                searchTerm={searchTerm}
                products={products}
                user={user}
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                handleDeleteProduct={handleDeleteProduct}
                handleUpdate={handleUpdate}
                editingProductId={editingProductId}
                editedProduct={editedProduct}
                setEditedProduct={setEditedProduct}
                setEditingProductId={setEditingProductId}
                handleCancelEdit={handleCancelEdit}
                newProduct={newProduct}
                setNewProduct={setNewProduct}
                handleAddNewProduct={handleAddNewProduct}
                categories={categories}
              />
            }
          />
          <Route
            path="/category/diabetes-care"
            element={
              <DiabetesCare
                searchTerm={searchTerm}
                products={products}
                user={user}
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                handleDeleteProduct={handleDeleteProduct}
                handleUpdate={handleUpdate}
                editingProductId={editingProductId}
                editedProduct={editedProduct}
                setEditedProduct={setEditedProduct}
                setEditingProductId={setEditingProductId}
                handleCancelEdit={handleCancelEdit}
                newProduct={newProduct}
                setNewProduct={setNewProduct}
                handleAddNewProduct={handleAddNewProduct}
                categories={categories}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
