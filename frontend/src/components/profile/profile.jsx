import React from "react";
import "./profile.css";

const Profile = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="profile-overlay" onClick={onClose}>
      <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
        <button className="profile-close" onClick={onClose}>×</button>

        <div className="profile-top">
          <img
            src={user.avatar || "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"}
            alt="avatar"
            className="profile-avatar"
          />
          <div className="profile-names">
            <h2>{user.name}</h2>
            <p className="profile-role">{user.role}</p>
          </div>
        </div>

        <div className="profile-body">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>ID:</strong> {user.id}</p>
          {/* agrega más campos si quieres */}
        </div>

        <div className="profile-actions">
          <button className="btn-edit" onClick={() => alert("Editar perfil (simulado)")}>Editar perfil</button>
          <button className="btn-logout" onClick={() => alert("Cerrar sesión (simulado)")}>Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
