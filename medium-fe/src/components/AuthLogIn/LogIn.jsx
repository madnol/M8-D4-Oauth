import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useHistory } from "react-router-dom";
//*STYLE
import "./styles.scss";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");

  const history = useHistory();

  const login = async () => {};

  const props = useSpring({
    opacity: 1,

    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <Container className="LogIn__container">
      <div className="LogIn__wrapper">
        <animated.div style={props} className="LogIn__form">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
            <Button onClick={login} className="LogIn__button" type="submit">
              SIGN IN
            </Button>
          </Form>
        </animated.div>
        <div className="LogIn__balls1"></div>
        <div className="LogIn__balls2"></div>
        <div className="LogIn__balls3"></div>
        <div className="LogIn__balls4"></div>
        <div className="LogIn__balls5"></div>
      </div>
    </Container>
  );
};

export default LogIn;
