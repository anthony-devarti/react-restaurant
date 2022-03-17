import React from 'react'
import heroImage from './arisa-chattasa-QoEvbUUMhJo-unsplash.jpg'
import {Button} from 'react-bootstrap'
import './hero.css'

export default function Hero(){

    return (
        //jsx that makes a hero element
        <div className="hero">
            <img src={heroImage} style={{width:'100vw'}} alt=""></img>
            <Button className='call' variant="primary">Menu</Button>
        </div>

    )
}