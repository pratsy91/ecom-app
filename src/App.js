import "./App.css";
import React from "react";
import CartVisContextProvider from "./store/cart -visibility/CartVisProvider";
import CanvasCart from "./components/CanvasCart";

import Header from "./components/Header";
import Music from "./components/Music";
import CartContextProvider from "./store/Cart-context/CartContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/store";
import Root from "./pages/Root";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router}></RouterProvider>
    </React.Fragment>
  );
}

export default App;
