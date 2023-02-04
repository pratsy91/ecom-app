import React from "react";
import { useContext } from "react";
import { Badge, Button, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import cartVisContext from "../store/cart -visibility/Cartvisibility-context";
import CartContext from "../store/Cart-context/cart-context";

const Header = () => {
  const cartVis = useContext(cartVisContext);
  const cartCtx = useContext(CartContext);
  const numOfItems = cartCtx.items.length;
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const brandHandler = () => {
    if (authCtx.isLoggedIn) {
      navigate("/about");
    } else {
      navigate("/auth?mode=login");
    }
  };

  const logoutHandler = () => {
    authCtx.logout();
    const email = localStorage.getItem("email");
    let url =
      "https://crudcrud.com/api/bbb1888023a3487a9a12cd3c9884ba78/" + email;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(cartCtx),
    });
    navigate("/auth?mode=login");
  };

  return (
    <React.Fragment>
      <Navbar
        bg="dark"
        variant="dark"
        className="justify-content-center mb-3"
        fixed="top"
      >
        <Navbar.Brand
          className="me-auto ms-5"
          onClick={brandHandler}
          style={{ cursor: "pointer" }}
        >
          The Generics
        </Navbar.Brand>

        {authCtx.isLoggedIn && (
          <Nav>
            <NavLink
              className="me-3 text-decoration-none text-white"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className="me-3 text-decoration-none text-white"
              to="/store"
            >
              Store
            </NavLink>
            <NavLink
              className="me-3 text-decoration-none text-white"
              to="/about"
            >
              About Us
            </NavLink>
            <NavLink
              className="me-3 text-decoration-none text-white"
              to="/contact-us"
            >
              Contact Us
            </NavLink>
          </Nav>
        )}

        {!authCtx.isLoggedIn && (
          <NavLink
            className="me-auto text-decoration-none text-white "
            to="/auth?mode=login"
          >
            Authentication
          </NavLink>
        )}

        {authCtx.isLoggedIn && (
          <div>
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
          </div>
        )}
        {authCtx.isLoggedIn && (
          <Button variant="danger" className="me-5" onClick={logoutHandler}>
            Logout
          </Button>
        )}
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
