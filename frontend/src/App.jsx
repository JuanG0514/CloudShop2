import React, { useState } from "react";
import Swal from 'sweetalert2';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomeU from "./pages-u/home/homeU";
import ProductsU from "./pages-u/Products-u/ProductsU";
import CartModal from "./components/cart/Cart";
import Profile from "./components/profile/profile"; // nuestro modal

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Simulación usuario logueado desde backend
  const [user] = useState({
    name: "Juan Pérez",
    email: "juanperez@example.com",
    role: "Cliente"
  });

  const addToCart = (product) => {
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
      title: 'Agregado',
      text: 'Producto agregado al carrito',
      icon: 'success',
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
      <Header
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
        onProfileClick={() => setIsProfileOpen(true)} // botón perfil en header
      />

      <Routes>
        <Route path="/" element={<HomeU />} />
        <Route
          path="/productos"
          element={<ProductsU addToCart={addToCart} />}
        />
      </Routes>

      {/* Carrito modal */}
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
          onClose={() => setIsCartOpen(false)}
        />
      )}

      {/* Perfil modal */}
      {isProfileOpen && (
        <Profile
          user={user}
          onClose={() => setIsProfileOpen(false)}
        />
      )}
    </Router>
  );
};

export default App;
