import React, { useContext } from "react";
import { Offcanvas } from "react-bootstrap";
import cartVisContext from "../store/cart -visibility/Cartvisibility-context";

const CanvasCart = () => {
  const cartVis = useContext(cartVisContext);
  return (
    <Offcanvas show={cartVis.show} onHide={cartVis.closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="offset-5">Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CanvasCart;
