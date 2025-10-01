import React, { useState } from "react";
import "./ProductsU.css";

// 🔹 Simulación de categorías
const categories = [
  { id: 1, name: "Ropa" },
  { id: 2, name: "Tecnología" },
  { id: 3, name: "Accesorios" },
];

// 🔹 Simulación de productos
const allProducts = [
  { id: 1, name: "Camiseta Cloud", price: 25, category_id: 1, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Pantalón Azul", price: 40, category_id: 1, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Laptop Gamer", price: 1200, category_id: 2, image: "https://via.placeholder.com/200" },
  { id: 4, name: "Celular Pro", price: 900, category_id: 2, image: "https://via.placeholder.com/200" },
  { id: 5, name: "Gorra Estilo", price: 15, category_id: 3, image: "https://via.placeholder.com/200" },
  { id: 6, name: "Mochila Negra", price: 50, category_id: 3, image: "https://via.placeholder.com/200" },
];

const ProductsU = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredProducts = activeCategory
    ? allProducts.filter((prod) => prod.category_id === activeCategory)
    : allProducts;

  return (
    <div className="products-page">
      <h2 className="title">Explora nuestros productos</h2>

      {/* Categorías */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-btn ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
        <button
          className={`category-btn ${activeCategory === null ? "active" : ""}`}
          onClick={() => setActiveCategory(null)}
        >
          Todos
        </button>
      </div>

      {/* Grid de productos */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)} className="add-btn">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsU;
