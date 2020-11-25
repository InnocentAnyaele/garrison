import React from 'react'
import './contact.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
// import bg from '../../assets/img/contact_bg.jpg'

const Contact = () => {
    return (
        <div id="contact" className='d-flex justify-content-center align-items-center' style={{backgroundColor: '#022c4d', height: '100vh'}}>


        <div style={{color: 'white', textAlign: 'center'}} >
            <p style={{fontWeight: 'bolder', fontSize: '50px'}}>The <span style={{color: '#FF7F50'}} className="garrison">Garrison</span> Pub</p>
            <p style={{fontWeight: 'bold', fontSize: '30px'}}>Contact Us</p>
            <p className='text-muted'>0557187667 || 055250263</p>
            <p className='text-muted'>Sowutuom - Heaven Church</p>
            <ul style={{listStyle: 'none'}}>
               <li><FacebookIcon/></li>
                <li><TwitterIcon/></li>
                <li><InstagramIcon/></li>
            </ul>
        </div>
        {/* <div className='row'>
            <div className='col-lg-6'>
                <div>
                    <img alt='bg' src={bg} style={{height: '100vh', width: '100vh', 'opacity': '0.8'}}/>
                </div>
            </div>
            <div className='col-lg-6' style={{'backgroundColor': '#022c4d'}}>

            </div>
        </div> */}
            {/* <Grid container direction="row">
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <img alt='bg' src={bg} style={{height: '100vh', width: '100%', 'opacity': '0.8'}}/>
                </Grid>
                <Grid item alignItems='center' justify='center' lg={6} md={6} sm={12} xs={12} style={{backgroundColor: '#022c4d', textAlign: 'center'}}>
                    <p style={{color: 'white'}}>Contact us</p>
                </Grid>
            </Grid> */}
        </div> 
    )
}

export default Contact