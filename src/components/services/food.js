import React from 'react'
import {Carousel, Card} from 'react-bootstrap'
import cheese_crip from '../../assets/img/cheese_crisp.jpg'
import fried_crab_claws from '../../assets/img/fried_crab_claws.jpg'
import smoked_salmon_dip from '../../assets/img/smoked_salmon_dip.jpg'
import green_chile_everything from '../../assets/img/green_chile_everything.jpg'
import guacamole from '../../assets/img/guacamole.jpg'

const drink_list = [{
    name: 'Cheese Crip',
    image: cheese_crip,
    price: '18'
}, {
    name: 'Fried Crab Claws',
    image: fried_crab_claws,
    price: '19'
}, {
    name: 'Smoked Salmon Dip',
    image: smoked_salmon_dip,
    price: '17'
}, {
    name: 'Green Chile Everything',
    image: green_chile_everything,
    price: '18'
}, {
    name: 'Guacamole',
    image: guacamole,
    price: '19'
}]

function food() {
    return (

        <Card style={{width: '20rem'}}>
            <Carousel className="slider-container">
                {drink_list && drink_list.map( (list) => {
                    return (
                        <Carousel.Item>
                    <Card.Img variant="top" src={list.image} style={{width: '50vh', height: '40vh'}}/>
                    <Card.Body>
                        <Card.Title className='text-muted' style={{fontWeight: 'bold', fontFamily: 'arial'}}>{list.name}</Card.Title>
                        <Card.Text>
                            <p style={{color: '#FF7F50'}}>${list.price}</p>
                        </Card.Text>
                    </Card.Body>
                </Carousel.Item>
                    )
                } )}
            </Carousel>
        </Card>
        
    )
}

export default food
