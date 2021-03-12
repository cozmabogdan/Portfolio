import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import avatarImg from '../images/pozaCV.jpg';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';



function About(){
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            height: '100vh'
          },
        large: {            
            width: '300px',
            height: '300px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '3rem',
            marginBottom: '2rem'       
        },
        title: {
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
        },
        about: {
            marginBottom: '1rem',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
        },
        contact: {
            display:'flex',
            alignContent:'center',
            justifyContent: 'center',
            color: '#34c2c9',
            marginBottom: '1rem'
        },
        skill: {
            display:'flex',
            alignContent: 'center',
            justifyContent: 'center',            
            margin: theme.spacing(2),
        },
        skillDesign: {
            fonstSize: 14,
        },
        skillContainer: {
            width: '60%'
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            masWidth: 500
        }

      }));
      const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container>
                <div className="animation-box">
                    <div className="box">
                    <div className="title">
                            <span className="block"></span>
                            <h1>About<span className='dot'></span></h1>
                        </div>
                    </div>
                </div>
                <Grid item xs={6}>
                    <Avatar alt="Cozma Bogdan" src={avatarImg} className={classes.large} />
                    <Typography variant="h4" className={classes.title}>Who's this guy?</Typography> 
                    <Typography className={classes.about}>I'm a Full-Stacked developer with a serious passion for Web Development. These days I spend my time expanding my knowledge.</Typography> 
                    <Typography className={classes.contact}>Let's make something special</Typography>                  
                </Grid>  
                <Grid item xs={6}>                
                    <Grid item xs={12} className={classes.skill}>
                        <Typography>CSS</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.skill}>
                        <Typography>HTML</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.skill}>
                        <Typography>React</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.skill}>
                        <Typography>JavaScript</Typography>
                    </Grid> 
                    <Grid item xs={12} className={classes.skill}>
                        <Typography>Node.js</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.skill}>
                        <Typography className={classes.skillDesign}>Bootstrap</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.skill}>
                        <Typography>jQuery</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.skill}>
                        <Typography>Express.js</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.skill}>
                        <Typography>API</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.skill}>
                        <Typography>MongoDB</Typography>
                    </Grid>                
                </Grid>                            
            </Grid>
        </div>
    )
}

export default About;