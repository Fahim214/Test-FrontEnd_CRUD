import React from "react";
import { Container } from "react-bootstrap";
import ProductList from "../Components/ProductList";
import NavbarComp from "../Components/NavbarComp"

const Home = () => {
  return (
    <div>
      <NavbarComp />
      <Container>
        <h3>Ini adalah aplikasi pertama saya</h3>
        <ProductList />
      </Container>
    </div>
  );
};

export default Home;
