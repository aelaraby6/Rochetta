import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import data from "./data";
import { useEffect } from "react";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import CategoryPage from "./pages/CategoryPage";
import SubNavbar from "./pages/SubNavbar";
import './App.css';

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : data;
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [searchTerm, setSearchTerm] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
    const admin = {
      username: "abdelrahman",
      password: "admin123",
      role: "admin",
    };

    if (!localStorage.getItem("adminAccount")) {
      localStorage.setItem("adminAccount", JSON.stringify(admin));
    }
  }, []);

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });


  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser) {
      localStorage.setItem(
        `cartItems_${currentUser.username}`,
        JSON.stringify(cartItems)
      );
    }
  }, [cartItems]);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });
  useEffect(() => {
    document.body.className = darkMode
      ? "dark":"light"
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleClearCart = () => {
    const updatedProducts = [...products];

    cartItems.forEach((cartItem) => {
      const productIndex = updatedProducts.findIndex(
        (p) => p.id === cartItem.id
      );
      if (productIndex !== -1) {
        const stripsPerBox = cartItem.stripsPerBox || 1;
        const totalBoxes = cartItem.isStrip
          ? Math.floor(cartItem.NOI / stripsPerBox)
          : cartItem.NOI;

        updatedProducts[productIndex].pieces += totalBoxes;
      }
    });

    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleAdd = (product) => {
    const updatedCart = [...cartItems];
    const updatedProducts = [...products];

    const pricePerUnit =
      product.isStrip && product.stripsPerBox
        ? parseFloat((product.price / product.stripsPerBox).toFixed(2))
        : product.price;

    const existingItemIndex = updatedCart.findIndex(
      (item) => item.id === product.id && item.isStrip === product.isStrip
    );

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].NOI += 1;
    } else {
      updatedCart.push({
        ...product,
        NOI: 1,
        price: pricePerUnit,
        originalPieces: product.pieces,
      });
    }

    const productIndex = updatedProducts.findIndex((p) => p.id === product.id);

    if (productIndex !== -1) {
      const currentCartItem = updatedCart.find(
        (item) => item.id === product.id && item.isStrip === product.isStrip
      );

      const noi = currentCartItem?.NOI || 0;
      const stripsPerBox = product.stripsPerBox || 1;

      const shouldDecreasePiece = !product.isStrip || noi % stripsPerBox === 0;

      if (shouldDecreasePiece) {
        updatedProducts[productIndex].pieces -= 1;
      }
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleRemove = (product) => {
    const updatedCart = [...cartItems];
    const updatedProducts = [...products];

    const existingItemIndex = updatedCart.findIndex(
      (item) => item.id === product.id && item.isStrip === product.isStrip
    );

    if (existingItemIndex === -1) return;

    const cartItem = updatedCart[existingItemIndex];
    const stripsPerBox = cartItem.stripsPerBox || 1;

    if (cartItem.NOI === 1) {
      updatedCart.splice(existingItemIndex, 1);
    } else {
      cartItem.NOI -= 1;

      const shouldRestorePiece =
        !cartItem.isStrip || cartItem.NOI % stripsPerBox === 0;

      if (shouldRestorePiece) {
        const productIndex = updatedProducts.findIndex(
          (p) => p.id === product.id
        );
        if (productIndex !== -1) {
          updatedProducts[productIndex].pieces += 1;
        }
      }
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleDelete = (cartItem) => {
    const updatedCart = cartItems.filter(
      (item) => !(item.id === cartItem.id && item.isStrip === cartItem.isStrip)
    );

    const updatedProducts = [...products];
    const productIndex = updatedProducts.findIndex((p) => p.id === cartItem.id);
    if (productIndex !== -1) {
      const stripsPerBox = cartItem.stripsPerBox || 1;
      const totalBoxes = cartItem.isStrip
        ? Math.floor(cartItem.NOI / stripsPerBox)
        : cartItem.NOI;

      updatedProducts[productIndex].pieces += totalBoxes;
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div className=" pt-5">
      <Navbar
        count={cartItems.reduce((a, c) => a + c.NOI, 0)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        user={user}
        setUser={setUser}
        isLoggedIn={isLoggedIn}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <SubNavbar />
    

      <div className="container mt-4">
        
        <Routes>
          <Route
            path="/"
            element={
              <Home
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
                setCartItems={setCartItems} // ✅
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
              />
            }
          />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
