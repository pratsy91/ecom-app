import React, { useRef } from "react";
import { Button, Container, Card, Form } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";

const Authentication = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  const emailRef = useRef();
  const passRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPass = passRef.current.value;
    let url;

    if (searchParams.get("mode") === "login") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCoUnsokWNGgMcfhonraQdASgdEONrBtyA";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCoUnsokWNGgMcfhonraQdASgdEONrBtyA";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPass,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Container className="d-grid justify-content-center">
      <Card style={{ marginTop: "150px", width: "800px" }} bg="light">
        <Link
          to={`?mode=${isLogin ? "signup" : "login"}`}
          className="ms-auto me-5 mt-5"
        >
          <Button variant="info">{isLogin ? "Sign Up" : "Login"}</Button>
        </Link>

        <Form className="p-5" onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="email" ref={emailRef} id="email" />
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label htmlFor="pass">Password</Form.Label>
            <Form.Control id="pass" type="password" ref={passRef} />
          </Form.Group>
          <Button variant="primary" type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Authentication;
