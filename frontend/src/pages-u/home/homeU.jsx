import React from "react";
import "./homeU.css";

const HomeU = () => {
  return (
      <div className="home">
      {/* Hero principal */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Cloud Shop</h1>
          <p>
            Tu marketplace en línea para tecnología, moda y hogar. Envíos a toda Colombia y atención personalizada.
          </p>
          <a href="/productos" className="hero-btn">Ver productos</a>
        </div>
      </section>

      {/* Categorías */}
      <section className="categories">
        <h2>Categorías destacadas</h2>
        <div className="categories-grid">
          <div className="category-card">Tecnología</div>
          <div className="category-card">Moda</div>
          <div className="category-card">Hogar</div>
          <div className="category-card">Ofertas</div>
        </div>
      </section>

      {/* Productos populares */}
      <section className="popular-products">
        <h2>Productos populares</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Producto" />
            <h3>Producto 1</h3>
            <p>$99.900</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Producto" />
            <h3>Producto 2</h3>
            <p>$129.900</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Producto" />
            <h3>Producto 3</h3>
            <p>$59.900</p>
          </div>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section className="about-us">
        <h2>Sobre nosotros</h2>
        <p>
          En <strong>Cloud Shop</strong> trabajamos para brindarte la mejor experiencia de compra en línea.
          Somos un equipo ubicado en Medellín, Colombia, enfocados en calidad, precios competitivos
          y atención personalizada.
        </p>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>¿Listo para comprar?</h2>
        <p>Explora nuestro catálogo y llena tu carrito hoy mismo.</p>
        <a href="/productos" className="cta-btn">Ir a productos</a>
      </section>
    </div>
  );
};

export default HomeU;
