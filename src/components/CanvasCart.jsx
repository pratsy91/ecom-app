import React, { useContext } from "react";
import { Button, Container, ListGroupItem, Offcanvas } from "react-bootstrap";
import cartVisContext from "../store/cart -visibility/Cartvisibility-context";
import cartContext from "../store/Cart-context/cart-context";

const CanvasCart = () => {
  const cartVis = useContext(cartVisContext);
  const cartCtx = useContext(cartContext);

  const deleteHandler = (id) => {
    cartCtx.deleteItem(id);
  };

  const purchaseHandler = () => {
    let numOfItems = cartCtx.items.length;
    if (numOfItems > 0) {
      alert("Thank You for the Purchase");
    } else {
      alert("There are no items in the cart");
    }
  };
  return (
    <Offcanvas show={cartVis.show} onHide={cartVis.closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="offset-5">Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Container className="d-flex d-row justify-content-between">
          <h4>Item</h4>
          <h4 className="offset-2">Price</h4>
          <h4>Quantity</h4>
        </Container>
        {cartCtx.items.map((prod) => (
          <ListGroupItem
            as="li"
            className="d-flex d-row justify-content-between mb-3"
            key={prod.id}
          >
            <span>
              <img
                className="rounded me-2"
                src={prod.imageUrl}
                alt="xyz"
                style={{ height: "70px", width: "70px" }}
              />
              {prod.title.substring(0, 5)}...
            </span>

            <span className="me-auto offset-2 mt-3">{prod.price}</span>
            <span className="me-auto mt-3">
              {prod.quantity}
              <Button
                variant="danger"
                size="sm"
                className="ms-3"
                onClick={deleteHandler.bind(null, prod.id)}
              >
                Delete
              </Button>
            </span>
          </ListGroupItem>
        ))}
        <Container className="mt-3 d-flex d-row justify-content-center">
          <Button variant="primary" onClick={purchaseHandler}>
            Purchase
          </Button>
        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CanvasCart;
