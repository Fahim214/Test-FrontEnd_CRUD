import React, { useEffect, useState } from 'react'
import { Container, Button, Col, Row, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Loading from "../components/Loading";
// import Message from "../components/Message";
import { login } from "../redux/actions/userAction";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, userInfo, error} = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "";

  useEffect(() => {
    if(userInfo){
      navigate(`/home`)
    }
  }, [dispatch, navigate, userInfo])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(email !== "" && password !== "") dispatch(login(email, password))
  }
  return (
    <div>
      <Container className="mt-5">
        <h2 style={{ textAlign: "center"}}>Sign In</h2>
        <Form style={{ width:"500px", margin: "10px auto"}} onSubmit={handleSubmit}>
        {error && <h5>Ini Error</h5>}
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
          <Button className="mt-3" type="submit" variant="primary">
            {loading ? <h5>Loading . . .</h5> : "Sign In"}
          </Button>
        </Form>
        <Row className="py-3" style={{ textAlign: "center"}}>
          <Col>
            New Customer? <Link to="/register">Register</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login