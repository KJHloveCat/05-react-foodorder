import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [showingCart, setShowingCart] = useState(false);

  const openCartHandler = () => {
    setShowingCart(true);
  };

  const closeCartHandler = () => {
    setShowingCart(false);
  };

  return (
    <Fragment>
      {showingCart && <Cart closeCart={closeCartHandler} />}
      <Header openCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
