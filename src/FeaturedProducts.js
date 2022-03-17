
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Accordion, Col} from 'react-bootstrap';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('https://sheltered-refuge-85246.herokuapp.com/api/json/')
    .then((res) => {
      console.log(res);
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
return (

        <Container>
                <h1>Menu</h1>
                {products.map((product) => (
                <Row>
                    <Accordion key={product.id}>
                        <Accordion.Item eventKey={0}>
                            <Accordion.Header>{product.title}</Accordion.Header>
                                <Accordion.Body>
                                    <Row className="justify-content-md-left">
                                        <Col>This is where the image would live</Col>
                                        <Col md="auto">{product.description}</Col>
                                        <Col xs lg="2">
                                            {product.price}
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>))}
        </Container>
    )};


export default FeaturedProducts;