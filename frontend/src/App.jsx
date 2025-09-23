import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/header'
import HomeU from "./pages-u/home/homeU";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeU />} />
        <Route path="/productos" element={<h1>Productos</h1>} />
        <Route path="/carrito" element={<h1>Carrito</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </>
  );
};

export default App;
