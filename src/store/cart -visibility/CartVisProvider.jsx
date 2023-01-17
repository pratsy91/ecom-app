import React, { useState } from "react";
import cartVisContext from "./Cartvisibility-context";

const CartVisContextProvider = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((show) => !show);

  const cartCtx = {
    show: show,
    closeCart: handleClose,
    toggleCart: toggleShow,
  };

  return (
    <cartVisContext.Provider value={cartCtx}>
      {props.children}
    </cartVisContext.Provider>
  );
};

export default CartVisContextProvider;
