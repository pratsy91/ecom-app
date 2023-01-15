import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Music = () => {
  return (
    <Container className=" justify-content-between">
      <h1 className="d-grid justify-content-center">Music</h1>
      <Row md="auto" className="d-grid justify-content-center">
        <ListGroup as="ul">
          {productsArr.map((product) => (
            <ListGroup.Item as="li">
              <Card style={{ width: "25rem" }}>
                <Card.Header>{product.title}</Card.Header>
                <Card.Body>
                  <img src={product.imageUrl} alt=" information" />
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam et quos pariatur ducimus sapiente corporis sunt iusto
                    eligendi hic asperiores.
                  </Card.Text>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </Container>
  );
};

export default Music;
