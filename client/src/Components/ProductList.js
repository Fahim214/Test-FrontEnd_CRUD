import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  let navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [product, setProduct] = useState([]);

  const getData = async () => {
    try {
      let res = await axios.get("http://localhost:5600/api/products/");
      setProduct(res.data.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Container className="mt-3">
        <Row>
          <div style={{ textAlign: "right" }}>
            <Link to="/add-product">
              <Button>Tambah Produk</Button>
            </Link>
          </div>
          {product.map((prod, index) => (
            <Col key={index} md={3} xs={6}>
              <Card className="my-4">
                <Card.Img variant="top" src={prod.image} />
                <Card.Body>
                  <Card.Title className="card-title">{prod.name}</Card.Title>
                  <Card.Title
                    className="py-3"
                    style={{ fontSize: 30, fontWeight: "bold" }}
                  >
                    $ {prod.price}
                  </Card.Title>

                  {userInfo ? (
                    <Container>
                      <Row>
                        <Col md={4} xs={4}>
                          <Button variant="danger">Edit</Button>
                        </Col>
                        <Col md={8} xs={8}>
                          <Button variant="primary"> Buy Now</Button>
                        </Col>
                      </Row>
                    </Container>
                  ) : (
                    <Button variant="primary">Buy Now</Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
