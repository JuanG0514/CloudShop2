import React, { useState } from "react";
import Swal from "sweetalert2";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/header";
import HomeU from "./pages-u/home/HomeU";
import ProductsU from "./pages-u/Products-u/ProductsU";
import CartModal from "./components/cart/Cart";
import Profile from "./components/profile/profile";
import LoginPage from "./Login-page/login-page";
import AdminPage from "./pages-a/AdminPage";
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // 🔑 Usuario logueado
  const [user, setUser] = useState(null);

  // 👉 Agregar producto (si no hay login, pide login)
  const addToCart = (product) => {
    if (!user) {
      Swal.fire({
        title: "Inicia sesión",
        text: "Debes iniciar sesión para agregar productos al carrito.",
        icon: "warning",
        confirmButtonText: "Ir al login",
      }).then(() => {
        window.location.href = "/login";
      });
      return;
    }

    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    Swal.fire({
      title: "Agregado",
      text: "Producto agregado al carrito",
      icon: "success",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Router>
      {/* Header solo si no es admin */}
      {(!user || user.role !== "admin") && (
        <Header
          cartItems={cartItems}
          onCartClick={() => {
            if (!user) {
              window.location.href = "/login";
            } else {
              setIsCartOpen(true);
            }
          }}
          onProfileClick={() => {
            if (!user) {
              window.location.href = "/login";
            } else {
              setIsProfileOpen(true);
            }
          }}
        />
      )}

      <Routes>
        {/* Login */}
        <Route path="/login" element={<LoginPage setUser={setUser} />} />

        {/* Usuario normal */}
        <Route path="/" element={<HomeU />} />
        <Route path="/productos" element={<ProductsU addToCart={addToCart} />} />

        {/* Admin protegido */}
        <Route
          path="/admin/*"
          element={
            user && user.role === "admin" ? (
              <AdminPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>

      {/* Modal carrito */}
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
          onClose={() => setIsCartOpen(false)}
        />
      )}

      {/* Modal perfil */}
      {isProfileOpen && user && (
        <Profile user={user} onClose={() => setIsProfileOpen(false)} />
      )}
    </Router>
  );
};

export default App;
