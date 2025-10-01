import React from "react";
import { NavLink } from "react-router-dom";
import "./homeU.css";

const HomeU = () => {
  return (
    <div className="home">
      {/* 🔹 Hero principal */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Bienvenido a <span>Cloud Shop</span>
          </h1>
          <p>
            Compra fácil, rápido y seguro. Explora nuestras categorías y encuentra lo que buscas.
          </p>
          <NavLink to="/productos" className="hero-btn">
            Ver productos
          </NavLink>
        </div>
      </section>

      {/* 🔹 Categorías destacadas */}
      

      {/* 🔹 Productos destacados */}
      <section className="featured-products">
        <h2>Productos destacados</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src="https://tse2.mm.bing.net/th/id/OIP.7mgPdi18nHNmEven68TpRwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Producto 1" />
            <h3>Camiseta Cloud</h3>
            <p>$25</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Producto 2" />
            <h3>Laptop Gamer</h3>
            <p>$1200</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Producto 3" />
            <h3>Mochila Negra</h3>
            <p>$50</p>
          </div>
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Cloud Shop</h3>
            <p>
              Tu marketplace de confianza para comprar y vender productos de manera
              rápida y segura.
            </p>
          </div>

          <div className="footer-section">
            <h4>Enlaces rápidos</h4>
            <ul>
              <li><NavLink to="/">Inicio</NavLink></li>
              <li><NavLink to="/productos">Productos</NavLink></li>
              <li><NavLink to="/categorias">Categorías</NavLink></li>
              <li><NavLink to="/perfil">Mi perfil</NavLink></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Ayuda</h4>
            <ul>
              <li><a href="#">Preguntas frecuentes</a></li>
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-icons">
              <a href="#">🌐</a>
              <a href="#">📘</a>
              <a href="#">🐦</a>
              <a href="#">📸</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Cloud Shop. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeU;
