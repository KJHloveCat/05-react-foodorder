import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showingCart, setShowingCart] = useState(false);

  const openCartHandler = () => {
    setShowingCart(true);
  };

  const closeCartHandler = () => {
    setShowingCart(false);
  };

  return (
    <CartProvider>
      {showingCart && <Cart closeCart={closeCartHandler} />}
      <Header openCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
