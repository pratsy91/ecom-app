import React from "react";
import { useContext } from "react";
import { Badge, Button, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import cartVisContext from "../store/cart -visibility/Cartvisibility-context";
import CartContext from "../store/Cart-context/cart-context";

const Header = () => {
  const cartVis = useContext(cartVisContext);
  const cartCtx = useContext(CartContext);
  const numOfItems = cartCtx.items.length;

  return (
    <React.Fragment>
      <Navbar
        bg="dark"
        variant="dark"
        className="justify-content-center mb-3"
        fixed="top"
      >
        <Navbar.Brand className="me-auto ms-5">The Generics</Navbar.Brand>
        <Nav>
          <NavLink className="me-3 text-decoration-none text-white" to="/">
            Home
          </NavLink>
          <NavLink className="me-3 text-decoration-none text-white" to="/store">
            Store
          </NavLink>
          <NavLink className="me-3 text-decoration-none text-white" to="/about">
            About
          </NavLink>
        </Nav>

        <Button
          className="ms-auto"
          position="end"
          variant="info"
          onClick={cartVis.toggleCart}
        >
          Cart
        </Button>
        <sup className="me-5">
          <Badge bg="danger" className="text-white">
            {numOfItems}
          </Badge>
        </sup>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
