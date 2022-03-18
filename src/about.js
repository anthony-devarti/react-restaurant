import { Fragment } from 'react'
import { Col, Card, Row } from 'react-bootstrap'
import Bird from './jan-meeus-7LsuYqkvIUM-unsplash.jpg'

export default function About(){
    return (
        <Fragment>
            <Row>
                <Col>
                    <Card>
                        <img src={Bird} alt="our chef" style={{maxWidth: '50vw'}}></img>
                    </Card>
                </Col>
                <Col id="about">
                    <div className="m-5"><h2>About Us</h2></div>
                <p><i>Presenting a unique experience for our unique clientele.</i></p>
                <p>Here at Bouche de Folle, our patrons enjoy an experience like none other
                    Our wait staff, cooks, bartenders, and all memebers of management and ownership are 
                    just birds.  That's right.  There are only birds here.  All of our poultry dishes are 
                    served with irony on the side.
                </p>
                </Col>
            </Row>
        </Fragment>
    )
}