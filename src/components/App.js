import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const modeButtonText = isDarkMode ? "Light Mode" : "Dark Mode";

  const addToCart = (itemName) => {
    setCart([...cart, itemName]);
  };

  const removeFromCart = (itemName) => {
    const updatedCart = cart.filter((item) => item !== itemName);
    setCart(updatedCart);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>{modeButtonText}</button>
      </header>
      <ShoppingList
        items={itemData}
        cart={cart}
        selectedCategory={selectedCategory}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;
