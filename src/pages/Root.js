import React from "react";
import { Outlet } from "react-router-dom";
import CanvasCart from "../components/CanvasCart";
import Header from "../components/Header";

const Root = () => {
  return (
    <React.Fragment>
      <Header />
      <CanvasCart />
      <Outlet />
    </React.Fragment>
  );
};

export default Root;
