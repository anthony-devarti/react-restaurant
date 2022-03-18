import React from "react";
import { Card, Button, Col } from 'react-bootstrap'

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
                                Map Goes Here
                            </Card.Text>
                        <Button variant="primary">Get Directions</Button>
                    </Card.Body>
                </Card>
            </Col>
            </div>
        </div>
    )
}