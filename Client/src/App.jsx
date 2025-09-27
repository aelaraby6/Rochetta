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
  const [categories, setCategories] = useState([]);

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
        // replace local products with server products
        setProducts(items.length ? items : data);
        localStorage.setItem("products", JSON.stringify(items));
      } catch (err) {
        console.error("Failed to fetch products from API:", err);
        // keep fallback products (data or cached) if request fails
      }
    };
    fetchProducts();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

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
  const getItemId = (item) => {
    if (!item) return null;
    // if passed a product object (from product list)
    if (item._id && !item.product) return item._id;
    // if passed a cart item (with product object inside)
    if (item.product && (item.product._id || item.product.id))
      return item.product._id || item.product.id;
    return null;
  };

  // Add (works from product list (product) or from cart (cart-item))
  const handleAdd = async (item) => {
    const id = getItemId(item);
    if (!id) return console.error("No product id to add:", item);

    try {
      const res = await api.post("/cart/add-to-cart", {
        productId: id,
        quantity: 1,
      });
      const updatedCartItems = res.data.data.items || [];
      setCartItems(updatedCartItems);

      // optimistic UI update: update 'pieces' locally (mapProduct maps stock -> pieces)
      setProducts((prev) =>
        prev.map((p) =>
          p._id === id
            ? { ...p, pieces: Math.max(0, (p.pieces ?? p.stock ?? 0) - 1) }
            : p
        )
      );
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  // Remove one unit (decrease quantity by 1)
  const handleRemove = async (item) => {
    const id = getItemId(item);
    if (!id) return console.error("No product id to remove:", item);

    const currentQty = item?.quantity ?? item?.NOI ?? 1;
    const newQty = Math.max(1, currentQty - 1);

    try {
      const res = await api.patch(`/cart/${id}`, { quantity: newQty });
      const updatedCartItems = res.data.data.items || [];
      setCartItems(updatedCartItems);

      // optimistic: increase pieces back by 1
      setProducts((prev) =>
        prev.map((p) =>
          p._id === id ? { ...p, pieces: (p.pieces ?? p.stock ?? 0) + 1 } : p
        )
      );
    } catch (err) {
      console.error("Error removing from cart:", err);
    }
  };

  // Delete full item from cart
  const handleDelete = async (item) => {
    const id = getItemId(item);
    if (!id) return console.error("No product id to delete:", item);
    const returnQty = item?.quantity ?? item?.NOI ?? 0;

    try {
      const res = await api.delete(`/cart/${id}`);
      const updatedCartItems = res.data.data.items || [];
      setCartItems(updatedCartItems);

      // optimistic: add back the removed quantity
      setProducts((prev) =>
        prev.map((p) =>
          p._id === id
            ? { ...p, pieces: (p.pieces ?? p.stock ?? 0) + returnQty }
            : p
        )
      );
    } catch (err) {
      console.error("Error deleting cart item:", err);
    }
  };

  // Clear cart
  const handleClearCart = async () => {
    try {
      const res = await api.delete("/cart/clear-cart");
      setCartItems(res.data.data.items || []); // should be []
      // safe approach: re-fetch products from server to sync stocks
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
    category: product.category && product.category._id ? product.category._id : product.category || ""
  });
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
      price: typeof updatedProduct.price !== "undefined" ? Number(updatedProduct.price) : undefined,
      category: updatedProduct.category, // category id
      stock: typeof updatedProduct.pieces !== "undefined" ? Number(updatedProduct.pieces) : undefined,
      has_strips: typeof updatedProduct.stripsPerBox !== "undefined" ? Boolean(updatedProduct.stripsPerBox > 0) : undefined,
      strip_count: typeof updatedProduct.stripsPerBox !== "undefined" ? Number(updatedProduct.stripsPerBox) : undefined,
      requires_prescription: typeof updatedProduct.requires_prescription !== "undefined" ? Boolean(updatedProduct.requires_prescription) : undefined,
      // don't include image here for JSON path
    };

    const payloadObj = Object.fromEntries(
      Object.entries(allowed).filter(([_, v]) => typeof v !== "undefined")
    );

    let res;
    if (updatedProduct.imageFile) {
      // send as multipart/form-data with file
      const form = new FormData();
      // append all payload keys as strings
      Object.entries(payloadObj).forEach(([k, v]) => form.append(k, String(v)));
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
    alert(err.response?.data?.message || "Failed to update product. Check console.");
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
