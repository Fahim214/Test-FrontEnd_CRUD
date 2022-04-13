import React from 'react'
import {Container} from "react-bootstrap"
import ProductList from '../Components/ProductList'

const Home = () => {
  return (
    <div>
        <Container>
        <h3>Ini adalah aplikasi pertama saya</h3>
        <ProductList />
        </Container>
    </div>
  )
}

export default Home