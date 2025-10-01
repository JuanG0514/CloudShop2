import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from '../../assets/logo.png'


const Header = ({ cartItems, onCartClick, onProfileClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Cloud Shop Logo" />
        <span>Cloud Shop</span>
      </div>

      {/* Navegación */}
      <div className="header-right">
        <nav className="nav-links">
          <NavLink to="/" className="nav-item">
            Inicio
          </NavLink>
          <NavLink to="/productos" className="nav-item">
            Productos
          </NavLink>
        </nav>

        {/* Carrito */}
        <div className="cart-wrapper" onClick={onCartClick}>
          <div className="cart-circle">🛒</div>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </div>

        {/* Menú hamburguesa */}
        <div className="hamburger-container">
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          <div className={`hamburger-menu ${menuOpen ? "show" : ""}`}>
            <button className="dropdown-item" onClick={onProfileClick}>
              Ver perfil
            </button>
            <NavLink to="/logout" className="dropdown-item">
              Cerrar sesión
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
