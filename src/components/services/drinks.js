import React from 'react'
import {Carousel, Card} from 'react-bootstrap'
import french from '../../assets/img/french_75.jpg'
import martini from '../../assets/img/martini.jpg'
import whiskey from '../../assets/img/whiskey.jpeg'
import mojito from '../../assets/img/mojito.jpg'
import old_fashioned from '../../assets/img/old_fashioned.jpeg'

const drink_list = [{
    name: 'French 75',
    image: french,
    price: '8'
}, {
    name: 'Martini',
    image: martini,
    price: '9'
}, {
    name: 'Whiskey',
    image: whiskey,
    price: '7'
}, {
    name: 'Mojito',
    image: mojito,
    price: '8'
}, {
    name: 'Old Fashioned',
    image: old_fashioned,
    price: '9'
}]

function drinks() {
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

export default drinks
