import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { Link} from "react-scroll"
// import {Link} from 'react-router-dom'
import './nav.css'
// import Logo from '../../assets/img/pub_logo.png'

const nav = () => {
    return (
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
  {/* <Navbar.Brand href="#home"><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="/" activeClassName="selected"><img alt="" src={Logo} width="30" height="30" className="d-inline-block align-top" />{' '}Pub</Link></Navbar.Brand> */}
  <Navbar.Brand href="#home"><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="home" activeClassName="selected"><span style={{fontWeight: 'bolder', fontSize: '30px'}} className='nav-logo'>The <span style={{color: '#FF7F50'}}>Garrison</span> Pub</span></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="nav-items ml-auto" style={{justifyContent: 'space-around'}}>
      <Nav.Link href="#home"><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="home" activeClassName="selected"><span style={{fontWeight: 'bold', fontSize: '15px', color: 'white'}} className='nav-link'>Home</span></Link></Nav.Link>
      <Nav.Link href="#about"><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="about" activeClassName="selected"><span style={{fontWeight: 'bold', fontSize: '15px', color: 'white'}} className='nav-link'>About</span></Link></Nav.Link>
      <Nav.Link href="#services"><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="services" activeClassName="selected"><span style={{fontWeight: 'bold', fontSize: '15px', color: 'white'}} className='nav-link'>Services</span></Link></Nav.Link>
      <Nav.Link href="#events"><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="events" activeClassName="selected"><span style={{fontWeight: 'bold', fontSize: '15px', color: 'white'}} className='nav-link'>Events</span></Link></Nav.Link>
      <Nav.Link href="#contact"><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="contact" activeClassName="selected"><span style={{fontWeight: 'bold', fontSize: '15px', color: 'white'}} className='nav-link'>Contact</span></Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )}

export default nav
