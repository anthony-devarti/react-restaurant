
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Accordion, Col, Tab, Tabs} from 'react-bootstrap';
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
      let categories={};
      //for each item in the data response
      for (let item of res.data) {
        //define a single category based on the info in the response
        let category = categories[item.category.title];
        //if that category doesn't exist already
        if (!category){
          //create a new category
          category = []
          //and add it to the categories object
          categories[item.category.title]=category
        }
        category.push(item);
      }
      console.log(categories)
      setProducts([...Object.entries(categories)]);
    })
    .catch((err) => {
      console.log(err);
    });
};
return (
      <div id="menu">
        <Container>
                <h1>Menu</h1>
                <Tabs id="tabs" className="mb-3">
                    {products.map(([category, items])=>(
                      <Tab eventKey={category} key={category} title={category}>
                        {items.map((product) => (
                          <Row key={product.id}>
                              <Accordion>
                                  <Accordion.Item eventKey={0}>
                                      <Accordion.Header>{product.title}</Accordion.Header>
                                          <Accordion.Body>
                                              <Row className="information justify-content-md-left">
                                                  <Col><img src={Dummy} alt='' style={{maxWidth:'300px'}}></img></Col>
                                                  <Col md="auto">{product.description}</Col>
                                                  <div className='price'>{product.price}</div>
                                              </Row>
                                          </Accordion.Body>
                                  </Accordion.Item>
                              </Accordion>
                          </Row>
                        ))}
                      </Tab>
                    ))}
                </Tabs>
        </Container>
      </div>
    )};


export default FeaturedProducts;