import React from 'react'
import './about.css'
import { Grid} from '@material-ui/core';
// import Beer17 from '../../assets/img/Beer17.png'
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles({
//     root: {
//       maxWidth: 500,
//     },
//     title: {
//         // color: 'white',
//         fontWeight: 'bold',
//     }
//  })


export default function About() {

    // const classes = useStyles();

    return (
        <div>
        <div id="about" className="about" style={{height: '100vh', textAlign: 'center', backgroundColor:'#EDF1F4'}}>
        <p style={{color: 'black', fontSize: '40px'}} className='text-muted pt-5'>About the <span style={{color: '#FF7F50'}}>Garrison</span></p>
           {/* <p className='pt-5 text-muted' style={{fontFamily: 'verdana', fontWeight: 'bold'}}>About The <span style={{color: '#FF7F50'}}>Garrison</span></p> */}
            <hr style={{width: '100px', color: 'black'}}></hr>
            <Grid container direction="row" justify="center">
                <Grid item lg={6} md={6} sm={12} xs={12} className='mt-5 p-4'>
                <p style={{textAlign: 'center', fontFamily: 'verdana'}}>
                Occaecat occaecat velit ipsum ea aliquip non pariatur esse culpa consequat voluptate eiusmod. Aliquip ullamco esse eiusmod sit id reprehenderit ea voluptate ad culpa ea pariatur labore. Sit in fugiat occaecat id labore ea ad magna esse laboris excepteur reprehenderit. Nostrud consectetur duis incididunt exercitation. Pariatur culpa ad voluptate sint ad laborum ad consequat duis cupidatat voluptate dolor enim. Do ex officia amet sint minim do minim ut ad Lorem sint voluptate mollit. Eiusmod nulla cillum dolor laboris dolore eiusmod laboris in id proident dolore velit.
               </p>
                </Grid>
            </Grid>

           {/* <div style={{width: '400px'}}>
               <p style={{textAlign: 'center'}}>
               Cillum velit aliquip velit ex ut voluptate commodo ad proident magna amet pariatur fugiat. Occaecat aliquip quis do Lorem ex ut. Tempor elit ex proident reprehenderit consectetur incididunt tempor ex excepteur eiusmod tempor et incididunt elit. Magna ut sunt aliquip aute.
               </p>
           </div> */}

        {/* <Grid container direction="row">

        <Grid item lg={12} md={12} sm={12} xs={12}>
        <Card className={classes.root} style={{margin: 'auto', padding: '10px', marginTop: '50px'}}>
                <CardContent>
                    <Typography className={classes.title} color='textSecondary'>
                        Cillum velit aliquip velit ex ut voluptate commodo ad proident magna amet pariatur fugiat. Occaecat aliquip quis do Lorem ex ut. Tempor elit ex proident reprehenderit consectetur incididunt tempor ex excepteur eiusmod tempor et incididunt elit. Magna ut sunt aliquip aute.
                    </Typography>
                </CardContent>
            </Card>
            <img alt="logo" src={Beer17} style={{height: '80vh', width: '100vh'}}></img>
        </Grid>

        </Grid> */}

        </div>
    )
        </div>
    )
}
