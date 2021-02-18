import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
//*STYLE
import "./styles.scss";

const SignUp = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <Container className="SignUp__container">
      <div className="SignUp__wrapper">
        <animated.div style={props} className="SignUp__form">
          <Form>
            <Form.Group controlId="formBasicUser">
              <Form.Control
                value={userName}
                onChange={e => setUsername(e.target.value)}
                type="email"
                placeholder="Username"
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
            <Button className="SignUp__button" type="submit">
              SIGN UP
            </Button>
          </Form>
        </animated.div>
        <div className="SignUp__balls1"></div>
        <div className="SignUp__balls2"></div>
        <div className="SignUp__balls3"></div>
        <div className="SignUp__balls4"></div>
        <div className="SignUp__balls5"></div>
      </div>
    </Container>
  );
};

export default SignUp;
