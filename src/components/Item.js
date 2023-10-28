import React from "react";

function Item({ name, category, cart, onAddToCart, onRemoveFromCart }) {
  const isInCart = cart.includes(name);

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className="add"
        onClick={isInCart ? () => onRemoveFromCart(name) : () => onAddToCart(name)}
      >
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
