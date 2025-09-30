import React from "react";
import "./ProductsU.css";

const ProductsU = ({ addToCart }) => {
  // Aquí simulo un listado de productos 
  const products = [
    {
      id: 1,
      name: "Smartphone XYZ",
      price: 999900,
      image: "https://via.placeholder.com/200x200",
    },
    {
      id: 2,
      name: "Audífonos inalámbricos",
      price: 199900,
      image: "https://via.placeholder.com/200x200",
    },
    {
      id: 3,
      name: "Laptop Pro 15”",
      price: 4999900,
      image: "https://via.placeholder.com/200x200",
    },
    {
      id: 4,
      name: "Smartwatch Fit",
      price: 499900,
      image: "https://via.placeholder.com/200x200",
    },
  ];

  return (
    <div className="products">
      <section className="products-header">
        <h1>Productos</h1>
        <p>Explora nuestro catálogo y añade tus favoritos al carrito.</p>
      </section>

      <section className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">
              {product.price.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
              })}
            </p>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductsU;
