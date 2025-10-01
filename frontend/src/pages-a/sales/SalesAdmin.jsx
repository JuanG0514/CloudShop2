import React from "react";
import "./SalesAdmin.css";

const SalesAdmin = () => {
  const sales = [
    { id: 1, product: "Laptop", amount: "$1200" },
    { id: 2, product: "Smartphone", amount: "$800" },
  ];

  return (
    <div className="sales-admin">
      <h2>Gestión de Ventas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.product}</td>
              <td>{s.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesAdmin;
