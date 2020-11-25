import React from 'react'
import './events.css'
import {Grid} from '@material-ui/core';
import comedy from '../../assets/img/comedy.jpg'
import karaoke from '../../assets/img/karaoke.jpeg'
import band from '../../assets/img/band.jpg'


const Events = () => {
    return (
        <div id="events" style={{textAlign: 'center', height: 'relative'}}>
            <p className="pt-5" style={{fontSize: '30px'}}>Events</p>
            <hr style={{width: '100px', color: 'black'}}></hr>

            <Grid container direction="column" justify="center" alignItems='center' spacing={10} className='p-5'>
                <Grid container direction="row" justify="center" alignItems='center' className="p-5">
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <img alt="comedy" src={comedy} style={{width: '40vh', height: '60vh'}}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} className='p-5'>
                        <p className='comedy' style={{fontWeight: 'bolder', fontSize: '40px'}}>Stand Up <span style={{color: '#FF7F50'}}>Comedy</span></p>
                        <p style={{fontWeight: 'bold'}}>Weekends | 6pm - 9pm</p>
                        <hr style={{width: '100px', color: 'black'}}></hr>
                        <p className='text-muted'>Come experience the funniest of comedians at the Garrison and have the laugh of a lifetime.</p>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems='center' className="p-5">
                    <Grid item xs={12} sm={12} md={4} lg={4} className='p-5'>
                        <p className='comedy' style={{fontWeight: 'bolder', fontSize: '40px'}}><span style={{color: '#FF7F50'}}>Karaoke</span></p>
                        <p style={{fontWeight: 'bold'}}>Weekdays | 6pm - 9pm</p>
                        <hr style={{width: '100px', color: 'black'}}></hr>
                        <p className='text-muted'>The Garrison also features a huge and beatiful karaoke machine. Come have the fun of your lifetime singing along your favourite musics.</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <img alt="karaoke" src={karaoke} style={{width: '40vh', height: '50vh'}}/>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems='center' className="p-5">
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <img alt="band" src={band} style={{width: '40vh', height: '60vh'}}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} className='p-5'>
                        <p className='comedy' style={{fontWeight: 'bolder', fontSize: '40px'}}>Live Band <span style={{color: '#FF7F50'}}>Performance</span></p>
                        <p style={{fontWeight: 'bold'}}>Weekends | 6pm - 9pm</p>
                        <hr style={{width: '100px', color: 'black'}}></hr>
                        <p className='text-muted'>Don't miss out on the best live band performace in Ghana. Featuring some of the greatest live bands.</p>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Events
