import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Panel de Administración</h2>
      <div className="stats">
        <div className="card">Usuarios: 120</div>
        <div className="card">Productos: 85</div>
        <div className="card">Ventas: $12,340</div>
        <div className="card">Categorías: 10</div>
      </div>
    </div>
  );
};

export default Dashboard;
