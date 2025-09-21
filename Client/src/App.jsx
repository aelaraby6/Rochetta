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
import api from "./api"; // <-- added

function App() {
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
    image: "",
    desc: "",
    pieces: "",
    category: "",
    stripsPerBox: "",
  });

  const handleAddNewProduct = async () => {
    try {
      const payload = {
        name: newProduct.name,
        description: newProduct.desc,
        price: Number(newProduct.price),
        category:
          newProduct.category === "pain-relief"
            ? "Pain Relief"
            : newProduct.category === "cold-and-flu"
            ? "Cold and Flu"
            : newProduct.category === "first-aid"
            ? "First Aid"
            : newProduct.category === "diabetes-care"
            ? "Diabetes Care"
            : "",
        image: newProduct.image,
        stock: Number(newProduct.pieces),
        has_strips: newProduct.stripsPerBox > 0,
        strip_count: Number(newProduct.stripsPerBox),
      };
      console.log("🚀 Sending product:", newProduct);
      const res = await api.post("/products", payload);
      console.log("📥 Response from server:", res.data);
      console.log("🛠️ Before update:", products);

      setProducts((prev) => {
        const updated = [...prev, mapProduct(res.data.data)];
        console.log("✨ After update:", updated);
        return updated;
      });

      setNewProduct({
        name: "",
        price: "",
        image: "",
        desc: "",
        pieces: "",
        category: "",
        stripsPerBox: "",
      });
    } catch (err) {
      console.error("Error adding product:", err);
      alert("Failed to add product. Check console.");
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
  if (item.product && (item.product._id || item.product.id)) return item.product._id || item.product.id;
  return null;
};

// Add (works from product list (product) or from cart (cart-item))
const handleAdd = async (item) => {
  const id = getItemId(item);
  if (!id) return console.error("No product id to add:", item);

  try {
    const res = await api.post("/cart/add-to-cart", { productId: id, quantity: 1 });
    const updatedCartItems = res.data.data.items || [];
    setCartItems(updatedCartItems);

    // optimistic UI update: update 'pieces' locally (mapProduct maps stock -> pieces)
    setProducts((prev) =>
      prev.map((p) =>
        p._id === id ? { ...p, pieces: Math.max(0, (p.pieces ?? p.stock ?? 0) - 1) } : p
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
      prev.map((p) => (p._id === id ? { ...p, pieces: (p.pieces ?? p.stock ?? 0) + 1 } : p))
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
      prev.map((p) => (p._id === id ? { ...p, pieces: (p.pieces ?? p.stock ?? 0) + returnQty } : p))
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

  const [editingProductId, setEditingProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({ name: "", price: "" });

  const handleEdit = (product) => {
    setEditingProductId(product._id);
    setEditedProduct({
      name: product.name,
      price: product.price,
      image: product.image,
      pieces: product.pieces,
      stripsPerBox: product.stripsPerBox,
      desc: product.desc,
    });
  };

  const handleUpdate = async (id, updatedProduct) => {
    try {
      const payload = {
        name: updatedProduct.name,
        description: updatedProduct.desc,
        price: Number(updatedProduct.price),
        category: updatedProduct.category,
        image: updatedProduct.image,
        stock: Number(updatedProduct.pieces),
        has_strips: updatedProduct.stripsPerBox > 0,
        strip_count: Number(updatedProduct.stripsPerBox),
      };

      const res = await api.patch(`/products/${id}`, payload);
      setProducts((prev) =>
        prev.map((p) => (p._id === id ? mapProduct(res.data.data) : p))
      );
    } catch (err) {
      console.error("Error updating product:", err);
      alert("Failed to update product. Check console.");
    }
  };

  return (
    <div className={!shouldHideNavbar ? "pt-5" : ""}>
      {!shouldHideNavbar && (
        <>
          <Navbar
            count={cartItems.reduce((a, c) => a + (c.quantity ?? c.NOI ?? 0), 0)}
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
                newProduct={newProduct}
                setNewProduct={setNewProduct}
                handleAddNewProduct={handleAddNewProduct}
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
                newProduct={newProduct}
                setNewProduct={setNewProduct}
                handleAddNewProduct={handleAddNewProduct}
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
                newProduct={newProduct}
                setNewProduct={setNewProduct}
                handleAddNewProduct={handleAddNewProduct}
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
                newProduct={newProduct}
                setNewProduct={setNewProduct}
                handleAddNewProduct={handleAddNewProduct}
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
