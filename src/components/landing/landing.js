import React from 'react'
import Nav from '../nav/nav'
import Home from '../home/home'
import About from '../about/about'
import Services from '../services/services'
import Events from '../events/events'
import Contact from '../contact/contact'

const landing = () => {
    return (
        <div>
        <div className='mb-5'>
        <Nav/>
        </div>
            <Home/>
            <About/>
            <Services/>
            <Events/>
            <Contact/>
        </div>
    )
}

export default landing
