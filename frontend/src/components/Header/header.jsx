import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
      
        <div className="logo">
          
          <img src={logo} alt="Logo" className="logo-img" />
          <h1 className="logo-text">CloudShop</h1>
        </div>

        {/* Navegación */}
        <nav className="nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/productos" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Productos
          </NavLink>
          <NavLink 
            to="/carrito" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
           Carrito
          </NavLink>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
