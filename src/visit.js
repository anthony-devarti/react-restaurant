import React from "react";
import { Card, Button, Col } from 'react-bootstrap'

export default function Visit(){
    return(
        <div id="visit">
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
                        <Button variant="primary">Get Directions</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                Map Goes Here
            </Col>
        </div>
    )
}