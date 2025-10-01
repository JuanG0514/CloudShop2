import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import ProductsAdmin from "./products/ProductsAdmin";
import UsersAdmin from "./users/UsersAdmin";
import SalesAdmin from "./sales/SalesAdmin";
import "./AdminPage.css";

const AdminPage = () => {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Admin</h2>
        <nav>
          <Link to="">Dashboard</Link>
          <Link to="products">Productos</Link>
          <Link to="users">Usuarios</Link>
          <Link to="sales">Ventas</Link>
        </nav>
      </aside>

      <main className="admin-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="products" element={<ProductsAdmin />} />
          <Route path="users" element={<UsersAdmin />} />
          <Route path="sales" element={<SalesAdmin />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminPage;
