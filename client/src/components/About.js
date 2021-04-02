/* eslint-disable no-lone-blocks */
import React from 'react';
import { makeStyles} from '@material-ui/core/styles'; //material components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import avatarImg from '../images/pozaCV.jpg'; //icons and images
import cssIcon from '../images/css.png';
import htmlIcon from '../images/html.png';
import javascriptIcon from '../images/JavaScript.png';
import reactIcon from '../images/react.png';
import nodejsIcon from '../images/node.png';
import bootstrapIcon from '../images/bootstrap.png';
import jqueryIcon from '../images/jquery.png';
import sqlIcon from '../images/sql.png';
import apiIcon from '../images/API.png';
import mongoIcon from '../images/mongo.png';
import TrackVisibility from 'react-on-screen';





function About(){
    const useStyles = makeStyles((theme) => ({
        root: {           
            height: 'auto',            
            backgroundColor: '#F5F5F5',            
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
            marginBottom: '1rem',
            
        },
        about: {
            marginBottom: '1rem',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            marginLeft: theme.spacing(5),
            marginRight: theme.spacing(5)
        },
        contact: {
            display:'flex',
            alignContent:'center',
            justifyContent: 'center',
            color: '#34c2c9',
            marginBottom: '1rem'
        },
        skill: {                      
            margin: theme.spacing(4)            
        },                                                       
        avatarSkill: {  
            maxWidth: 35,
            maxHeight: 35,                      
            objectFit: 'contain',
            marginRight: theme.spacing(2),
        },
        skillCard: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '200px',
            height:'50px',
        }        
    }));
    const classes = useStyles();

    const TitleAnimation = () => {
        return (
        <div className="animation-box1">
            <div className="box">
                <div className="title">
                    <span className="block"></span>
                    <h1>About<span className='dot'></span></h1>
                </div>
            </div>
        </div>
    )}

    const animation = ({ isVisible }) => {           
        return isVisible ? <TitleAnimation /> : <div className='animation-box1'></div>;
    }

    {/* short description */}
    const Description = () => {
          return(
            <React.Fragment>
                <Grid item sm={12}>
                    <Avatar alt="Cozma Bogdan" src={avatarImg} className={classes.large} />
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="h4" className={classes.title}>Who's this guy?</Typography> 
                 </Grid>
                <Grid item sm={12}>
                    <Typography className={classes.about}>I'm a Full-Stacked developer with a serious passion for Web Development. These days I spend my time expanding my knowledge.</Typography>                     
                </Grid>    
                <Grid item sm={12}>
                    <Typography className={classes.contact}><Button className={classes.contact} href="/contact">Let's make something special</Button> </Typography>               
                </Grid>
            </React.Fragment>
          );
    }

    {/* first column with skill cards */}
    const SkillRowOne = () => {
          return(
            <React.Fragment>
                <Grid item md={12} className={classes.skill}>
                    <Card className={classes.skillCard}>
                        <Avatar
                            variant='square'
                            className={classes.avatarSkill}
                            src={cssIcon}                            
                        />                                                     
                        <Typography component="h5" variant="h5">
                            CSS
                        </Typography>                                                                                                                                   
                    </Card>
                </Grid>
                <Grid item md={9} className={classes.skill}>
                    <Card className={classes.skillCard}>
                        <Avatar
                            variant='square'
                            className={classes.avatarSkill}
                            src={htmlIcon}
                        />                                                     
                        <Typography component="h5" variant="h5">
                            HTML
                        </Typography>                                                                                                                                   
                    </Card>
                </Grid>
                <Grid item md={9} className={classes.skill}>
                    <Card className={classes.skillCard}>
                        <Avatar
                            variant='square'
                            className={classes.avatarSkill}
                            src={reactIcon}
                        />                                                     
                        <Typography component="h5" variant="h5">
                            React
                        </Typography>                                                                                                                                   
                    </Card>
                </Grid>
                <Grid item md={9} className={classes.skill}>
                    <Card className={classes.skillCard}>
                        <Avatar
                            variant='square'
                            className={classes.avatarSkill}
                            src={javascriptIcon}
                        />                                                     
                        <Typography component="h5" variant="h5">
                            JavaScript
                        </Typography>                                                                                                                                   
                    </Card>
                </Grid>
                <Grid item md={9} className={classes.skill}>
                    <Card className={classes.skillCard}>
                        <Avatar
                            variant='square'
                            className={classes.avatarSkill}
                            src={nodejsIcon}
                        />                                                     
                        <Typography component="h5" variant="h5">
                            NodeJS
                        </Typography>                                                                                                                                   
                    </Card>
                </Grid> 
            </React.Fragment>
          )
    }

    {/* second column for skill cards */}
    const SkillRowTwo = () => {
          return(
            <React.Fragment>
                <Grid item md={12} className={classes.skill}>
                    <Card className={classes.skillCard}>
                        <Avatar
                            variant='square'
                            className={classes.avatarSkill}
                            src={bootstrapIcon}
                        />                                                     
                        <Typography component="h5" variant="h5">
                            Bootstrap
                        </Typography>                                                                                                                                   
                    </Card>
                </Grid>
                <Grid item md={9} className={classes.skill}>
                    <Card className={classes.skillCard}>
                        <Avatar
                            variant='square'
                            className={classes.avatarSkill}
                            src={jqueryIcon}
                        />                                                     
                        <Typography component="h5" variant="h5">
                            jQuery
                        </Typography>                                                                                                                                   
                    </Card>
                </Grid>
                <Grid item md={9} className={classes.skill}>
                    <Card className={classes.skillCard}>
                        <Avatar
                            variant='square'
                            className={classes.avatarSkill}
                            src={sqlIcon}
                        />                                                     
                        <Typography component="h5" variant="h5">
                            MySql
                        </Typography>                                                                                                                                   
                    </Card>
                </Grid>
                <Grid item md={9} className={classes.skill}>
                    <Card className={classes.skillCard}>
                        <Avatar
                            variant='square'
                            className={classes.avatarSkill}
                            src={apiIcon}
                        />                                                     
                        <Typography component="h5" variant="h5">
                            RESTful API
                        </Typography>                                                                                                                                   
                    </Card>
                </Grid>
                <Grid item md={9} className={classes.skill}>
                    <Card className={classes.skillCard}>
                        <Avatar
                            variant='square'
                            className={classes.avatarSkill}
                            src={mongoIcon}
                        />                                                     
                        <Typography component="h5" variant="h5">
                            MongoDB
                        </Typography>                                                                                                                                   
                    </Card>
                </Grid>
            </React.Fragment>
          )
    }

    return(
        <div className={classes.root}>

            {/* title animation */}            
            <Grid container spacing={1}>                
                <Grid container item lg={12} justify="center">
                    <TrackVisibility>
                        {animation}
                    </TrackVisibility>
                </Grid>
                
                {/*Description column */}
                <Grid container item md={4}>
                    <Description />
                </Grid>                  

                {/*First skill column */}
                <Grid container item md={4} justify='center' alignItems='center'>   
                    <SkillRowOne />                                          
                </Grid> 

                {/*Second skill column */} 
                <Grid container item md={4} justify='center' alignItems='center'>
                    <SkillRowTwo />
                </Grid>                         
            </Grid>
        </div>
    )
}

export default About;