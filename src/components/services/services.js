import React from 'react'
import { Grid} from '@material-ui/core';
import './service.css'
import Drinks from './drinks'
import Food from './food'



const services = () => {
    return (
        <div id="services" style={{textAlign: 'center', height: 'relative'}}>
            <p style={{color: 'black', fontSize: '40px'}} className='text-muted pt-5'>What do we <span style={{color: '#FF7F50'}}>Serve?</span></p>
            <hr style={{width: '100px', color: 'black'}}></hr>
            <p className='text-muted' style={{fontSize: '15px', fontFamily: 'arial'}}> We serve a wide variety of drinks and dishes</p>
            <Grid container justify="center" direction='row' className='mt-5 p-3' spacing={10}>
                <Grid item>
                    <Drinks/>
                </Grid>
                <Grid item>
                    <Food/>
                </Grid>
            </Grid>
        </div>
    )
}

export default services
