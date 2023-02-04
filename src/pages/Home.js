import React from "react";
import { Badge, Button, ListGroup, Row } from "react-bootstrap";

const Dummy_Tours = [
  {
    id: "t1",
    date: "FEB16",
    city: `DETROIT, MI`,
    place: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: "t2",
    date: "FEB19",
    city: `TORONTO,ON`,
    place: "BUDWEISER STAGE",
  },
  {
    id: "t3",
    date: "FEB22",
    city: `BRISTOW, VA`,
    place: "JIGGY LUBE LIVE",
  },
  {
    id: "t4",
    date: "FEB29",
    city: `PHOENIX, AZ`,
    place: "AK-CHIN PAVILION",
  },
  {
    id: "t5",
    date: "MARCH2",
    city: `LAS VEGAS, NV`,
    place: "T-MOBILE ARENA",
  },
  {
    id: "t6",
    date: "MARCH7",
    city: `LAS VEGAS, NV`,
    place: "T-MOBILE ARENA",
  },
];

const Home = () => {
  const ticketHandler = () => {
    alert("Boooked Successfully");
  };
  return (
    <React.Fragment>
      <h1 className="text-center" style={{ marginTop: "80px" }}>
        <Badge bg="secondary">Home</Badge>
      </h1>
      <div style={{ marginTop: "80px" }}>
        <h3 className="text-center m-5">Tours</h3>
        <Row className="d-grid justify-content-center">
          <ListGroup as="ul" variant="flush" style={{ width: "1000px" }}>
            {Dummy_Tours.map((tour) => (
              <ListGroup.Item
                as="li"
                key={tour.id}
                className="d-flex justify-content-between"
              >
                <span>{tour.date}</span>
                <span>{tour.city}</span>
                <span>{tour.place}</span>
                <span>
                  <Button variant="primary" onClick={ticketHandler}>
                    Buy Tickets
                  </Button>
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Home;
