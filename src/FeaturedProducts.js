
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Accordion, Col} from 'react-bootstrap';
import './featuredproducts.css'
import Dummy from './lily-banse--YHSwy6uqvk-unsplash.jpg'

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
                                    <Row className="information justify-content-md-left">
                                        <Col><img src={Dummy} alt='' style={{maxWidth:'3000px'}}></img></Col>
                                        <Col md="auto">{product.description}</Col>
                                        <div className='price'>{product.price}</div>
                                    </Row>
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>))}
        </Container>
    )};


export default FeaturedProducts;