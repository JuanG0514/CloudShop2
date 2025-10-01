import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login-page.css";

const LoginPage = ({ setUser }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔑 Simulación de login (normalmente se hace con backend)
    if (form.email === "admin@correo.com" && form.password === "1234") {
      setUser({ name: "Admin", role: "admin" });
      navigate("/admin");
    } else if (form.email === "user@correo.com" && form.password === "1234") {
      setUser({ name: "Usuario", role: "cliente" });
      navigate("/");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-box">
        <h2>Iniciar Sesión</h2>
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default LoginPage;
