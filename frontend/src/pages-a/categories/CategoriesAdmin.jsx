import React from "react";
import "./CategoriesAdmin.css";

const CategoriesAdmin = () => {
  const categories = ["Electrónica", "Ropa", "Hogar", "Deportes"];

  return (
    <div className="categories-admin">
      <h2>Gestión de Categorías</h2>
      <ul>
        {categories.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesAdmin;
