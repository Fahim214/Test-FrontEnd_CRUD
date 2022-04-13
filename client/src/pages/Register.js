import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import Message from "../component/Message";
import { register } from "../redux/actions/userAction";

const RegisterScreen = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [dispatch, navigate, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name !== "" &&
      password !== "" &&
      email !== "" &&
      confirmPassword === password
    ) {
      dispatch(register(name, email, password));
    } else {
      setErr("Password do not match");
    }
  };
  return (
    <div>
      <Container className="mt-5">
        <h2 style={{ textAlign: "center"}}>Sign Up</h2>
        <Form style={{ width:"500px", margin: "10px auto"}} onSubmit={handleSubmit}>
          {error && <h5>Ini Error</h5>}
          {err && <h5>Ini Error</h5>}
          <Form.Group controlId="name" className="mt-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword" className="mt-3">
            <Form.Label>Konfirmasi Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Konfirmasi Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button className="mt-3" type="submit" variant="primary">
            { loading ? <h5>Loading . . .</h5> : "Sign Up"}
          </Button>
        </Form>
        <Row className="py-3" style={{ textAlign: "center"}}>
         <h5>Sudah Punya Akun</h5>
         <Link to="/login">Login</Link>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterScreen;