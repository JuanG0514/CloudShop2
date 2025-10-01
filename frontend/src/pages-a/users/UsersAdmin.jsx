import React from "react";
import "./UsersAdmin.css";

const UsersAdmin = () => {
  const users = [
    { id: 1, name: "Juan Pérez", role: "Cliente" },
    { id: 2, name: "Ana López", role: "Administrador" },
  ];

  return (
    <div className="users-admin">
      <h2>Gestión de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersAdmin;
