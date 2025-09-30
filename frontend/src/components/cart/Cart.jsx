import React from "react";
import "./Cart.css";

const Cart = ({
  cartItems,
  onClose,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {
  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div
        className="cart-modal"
        onClick={(e) => e.stopPropagation()} // evita cerrar al click dentro
      >
        <div className="cart-header">
          <span>Tu carrito</span>
          <button onClick={onClose}>×</button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 && <p>Tu carrito está vacío</p>}

          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">
                  {item.price.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                  })}
                </div>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button
                    className="remove-item-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <button onClick={onClose}>Finalizar compra</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
