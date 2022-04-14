import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import NavbarComp from "../Components/NavbarComp";
import { createProduct } from "../redux/actions/productAction"

const AddProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  const { loading, success, error } = useSelector((state) => state.productCreate)

  useEffect(() => {
    if(success) {
      navigate("/home")
    }
  }, [dispatch, success])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({
        name,
        price,
        image,
      })
    );
  };

  return (
    <div>
        <NavbarComp />
      <Container className="mt-5">
        <h2 style={{ textAlign: "center" }}>Tambah Product</h2>
        <Form
          style={{ width: "500px", margin: "10px auto" }}
          onSubmit={handleSubmit}
        >
          <Form.Group controlId="name" className="mt-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="image" className="mt-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Image Url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="price" className="mt-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button className="mt-3" type="submit" variant="primary">
            Tambah
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddProduct;
