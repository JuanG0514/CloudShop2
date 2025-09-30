import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = ({ cartItems, onCartClick }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">Cloud Shop</div>

      <div className="header-right">
        <nav className="nav-links">
          <NavLink to="/" className="nav-item">
            Inicio
          </NavLink>
          <NavLink to="/productos" className="nav-item">
            Productos
          </NavLink>
        </nav>

        {/* Carrito circulito */}
        <div className="cart-wrapper" onClick={onCartClick}>
          <div className="cart-circle">🛒</div>
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </div>

        {/* Menú de usuario */}
        <div
          className="user-menu"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <div className="user-icon">⚙️</div>
          {dropdownOpen && (
            <div className="dropdown-menu">                 
              <NavLink to="/perfil" className="dropdown-item">
                Ver perfil
              </NavLink>
              <NavLink to="/logout" className="dropdown-item">
                Cerrar sesión
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
