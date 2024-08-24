import React from 'react';

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <p className="product-name">{product.name}</p>
        <p className="product-price">Rs. {product.price.toFixed(2)}</p>
      </div>
      <div className="product-quantity">
        <input type="number" value={product.quantity} min="1" />
      </div>
      <div className="product-subtotal">
        Rs. {(product.price * product.quantity).toFixed(2)}
      </div>
      <div className="product-remove">
        <button onClick={() => product.removeItem(product.id)}>🗑️</button>
      </div>
    </div>
  );
};

export default CartItem;
