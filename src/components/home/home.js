import React from 'react'
import Beer2 from '../../assets/img/Beer2.png'
import './home.css'
import { Grid, Button } from '@material-ui/core';
// import { Spring } from 'react-spring/renderprops'
// import clamp from 'lodash-es/clamp'
import {animated, useSpring} from 'react-spring'
// import { useGesture } from 'react-with-gesture'
import { Link} from "react-scroll"


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Home = () => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    
    return (
        <div className="home-container pt-3" style={{backgroundColor: '#007bff', height: 'relative'}} id="home">

        <Grid container direction="row"  alignItems="center" justify="center" spacing={0}>
            <Grid item xs={12} sm={12} lg={6} md={6}>
            <div className='pl-5'>
            <div className='mb-3'>
                <h1>Welcome to the <span style={{color: '#FF7F50', fontSize: '70px'}} className="garrison">Garrison</span>.</h1> 
                <h1 >Ghana's finest Pub.</h1>
            </div>
                <p><h2>Home of the greatest drinks | dishes | entertainment. </h2></p>
                <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="services" activeClassName="selected"><Button className='mt-4 mb-5' variant='contained' color="primary">What do we serve?</Button></Link>
            </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={6} md={6}>
            <animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })} onMouseLeave={() => set({ xys: [0, 0, 1] })} style={{transform: props.xys.interpolate(trans) }}>
            <img className='mt-3' alt="logo" src={Beer2} style={{height: '95vh'}} ></img>
            </animated.div>
            </Grid>
        </Grid>

        </div>
    )
}

export default Home
