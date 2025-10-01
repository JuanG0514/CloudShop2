import React from "react";
import "./ProductsAdmin.css";

const ProductsAdmin = () => {
  const products = [
    { id: 1, name: "Laptop", price: "$1200" },
    { id: 2, name: "Smartphone", price: "$800" },
    { id: 3, name: "Audífonos", price: "$200" },
  ];

  return (
    <div className="products-admin">
      <h2>Gestión de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsAdmin;
