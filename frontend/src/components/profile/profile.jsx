import React from "react";
import "./profile.css";

const Profile = ({ user, onClose }) => {
  if (!user) return null; // si no hay usuario logueado no se muestra

  return (
    <div className="profile-overlay">
      <div className="profile-modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Perfil del Usuario</h2>
        <div className="profile-content">
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Rol:</strong> {user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
