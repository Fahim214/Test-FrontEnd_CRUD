import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ProductList = () => {
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
      <Container>
        <Row>
          {product.map((prod, index) => (
            <Col key={index} md={3} xs={6}>
              <Card className="my-4">
                <Card.Img variant="top" src={prod.image} />
                <Card.Body>
                  <Card.Title className="card-title">{prod.name}</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
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
