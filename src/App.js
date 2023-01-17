import "./App.css";
import React from "react";
import CartVisContextProvider from "./store/cart -visibility/CartVisProvider";
import CanvasCart from "./components/CanvasCart";

import Header from "./components/Header";
import Music from "./components/Music";

function App() {
  return (
    <React.Fragment>
      <CartVisContextProvider>
        <Header />
        <CanvasCart />
      </CartVisContextProvider>
      <Music />
    </React.Fragment>
  );
}

export default App;
