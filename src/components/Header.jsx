import React from "react";
import { Badge, Button, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" className="justify-content-center mb-3">
        <Navbar.Brand className="me-auto ms-5">The Generics</Navbar.Brand>
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Store</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
        </Nav>

        <Button className="ms-auto" position="end" variant="info">
          Cart
        </Button>
        <sup className="me-5">
          <Badge bg="danger" className="text-white">
            0
          </Badge>
        </sup>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
