import React, { useRef } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const FormPage = () => {
  const name = useRef();
  const email = useRef();
  const phoneNumber = useRef();

  async function addUserHandler(user) {
    const response = await fetch(
      "https://e-com-app-a54c5-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const User = {
      userName: name.current.value,
      userEmail: email.current.value,
      userNumber: phoneNumber.current.value,
    };

    addUserHandler(User);
  };

  return (
    <React.Fragment>
      <Container className=" d-grid justify-content-center">
        <Card style={{ marginTop: "150px", width: "800px" }} bg="light">
          <Form className="p-5" onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Enter Name</Form.Label>
              <Form.Control id="name" type="text" ref={name} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Enter Email</Form.Label>
              <Form.Control type="email" ref={email} id="email" />
            </Form.Group>
            <Form.Group className="mb-5">
              <Form.Label htmlFor="number">Enter Phone Number</Form.Label>
              <Form.Control type="tel" ref={phoneNumber} id="number" />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default FormPage;
