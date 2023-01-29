import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CartVisContextProvider from "./store/cart -visibility/CartVisProvider";
import CartContextProvider from "./store/Cart-context/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartVisContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </CartVisContextProvider>
  </React.StrictMode>
);
