import React, { useContext } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import cartContext from "../store/Cart-context/cart-context";

const productsArr = [
  {
    id: "e1",
    title: "Thriller",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "e2",
    title: "Hotel California",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "e3",
    title: "Saturday Night Fever",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "e4",
    title: "The Dark Side of the Moon",
    price: 90,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Music = () => {
  const cartCtx = useContext(cartContext);

  const addHandler = (product) => {
    cartCtx.addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
    });
  };

  return (
    <React.Fragment>
      <Row md={1} className="d-grid justify-content-center mt-5">
        <h1 className="my-5">
          <Badge bg="secondary">Music Store</Badge>
        </h1>
      </Row>
      <Row md={2} className="offset-2">
        {productsArr.map((product) => (
          <Col key={product.id}>
            <Card className="mb-3" style={{ width: "25rem" }} bg="light">
              <Card.Header>{product.title}</Card.Header>

              <Card.Body>
                <img src={product.imageUrl} alt=" information" />
                <Card.Text>
                  Lorem ipsum dolor sit ameprt consectetur adipisicing elit.
                  Ullam et quos pariatur ducimus sapiente corporis sunt iusto
                  eligendi hic asperiores.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex d-row justify-content-between">
                <h3>
                  <Badge bg="info">{`$ ${product.price}`}</Badge>
                </h3>

                <Button
                  variant="primary"
                  onClick={addHandler.bind(null, product)}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>

    // <Container className=" justify-content-between">
    //   <h1 className="d-grid justify-content-center">Music</h1>
    //   <Row md="auto" className="d-grid justify-content-center">
    //     <ListGroup as="ul">
    //       {productsArr.map((product) => (
    //         <ListGroup.Item as="li">
    //           <Card style={{ width: "25rem" }}>
    //             <Card.Header>{product.title}</Card.Header>
    //             <Card.Body>
    //               <img src={product.imageUrl} alt=" information" />
    //               <Card.Text>
    //                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //                 Ullam et quos pariatur ducimus sapiente corporis sunt iusto
    //                 eligendi hic asperiores.
    //               </Card.Text>
    //             </Card.Body>
    //           </Card>
    //         </ListGroup.Item>
    //       ))}
    //     </ListGroup>
    //   </Row>
    // </Container>
  );
};

export default Music;
