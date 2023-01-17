import React from "react";

const cartVisContext = React.createContext({
  show: false,
  closeCart: () => {},
  toggleCart: () => {},
});

export default cartVisContext;
