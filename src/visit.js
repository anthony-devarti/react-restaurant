import React from "react";
import { Card, Button, Col } from 'react-bootstrap'
import Map from './map'

export default function Visit(){
    return(
        <div id="visit">
            <div className="row mt-5">
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Business Hours</Card.Title>
                            <Card.Text>
                                Monday - Closed
                                Tuesday - Closed
                                Wednesday - 12PM to 1AM
                                Thursday - 12PM to 1AM
                                Friday - 12PM to 3AM
                                Saturday - 12PM to 3AM
                                Wednesday - 11AM to 10PM
                            </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Directions</Card.Title>
                            <Card.Text>
                                <Map />
                            </Card.Text>
                        <Button variant="primary" href="https://www.google.com/maps?ll=38.042106,-84.492558&z=17&t=m&hl=en&gl=US&mapclient=embed&cid=608613252348632709">Get Directions</Button>
                    </Card.Body>
                </Card>
            </Col>
            </div>
        </div>
    )
}