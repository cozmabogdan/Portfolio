/* eslint-disable no-lone-blocks */
import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import avatarImg from '../images/pozaCV.jpg';
import TrackVisibility from 'react-on-screen';
import InitialChat from './ChatBot/InitialChat';



function Contact() {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            height: '100vh',
            backgroundColor: '#161b1d'
        },                                 
        chatGrid: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6)            
        },
        chatHeader: {            
            backgroundColor: '#F5F5F5',  
            height: 40,              
        },
        chat: {            
            width: 400,
            minHeight: 500,
            maxHeight: 500,            
        },        
        chatBubleInactive: {
            background: '#4c4c4d',
            color: '#F5F5F5',
            height: 40
        },
        chatBubleActive: {
            backgroundColor: '#161b1d',
            color:'#f5f5f5',
            height: 40,            
        },                             
        chatWindow: {
            maxHeight: 450,
            minHeight: 450,
            overflow: 'auto',                      
        },                       
      }));
        const classes = useStyles();        
        
        {/*get's returned only when visible on screen */}
        const TitleAnimation = () => {
            return (
            <div className="animation-box2">
                <div className="box">
                    <div className="title1">
                        <span className="block"></span>
                        <h1>Contact<span className='dot'></span></h1>
                    </div>
                </div>
            </div>
        )}
        
        {/* animation trigger */}
        const animationTrigger = ({ isVisible }) => {           
            return isVisible ? <TitleAnimation /> : <div className='animation-box'></div>;
        }
        
    return(
        <div className={classes.root}>
            {/* arrow shape */}
            <div className='shape'></div>

            {/*title animation */}
            <Grid container item xs={12} justify="center">                    
                    <TrackVisibility>
                        {animationTrigger}
                    </TrackVisibility>
            </Grid>

            {/* chat grid */}
            <Grid container className={classes.chatGrid}>
                <Grid container item xs={12} justify='center'>
                    <Card className={classes.chat}>
                        <Grid item xs={12}>
                            <CardHeader
                                avatar={
                                    <Avatar alt="Cozma Bogdan" src={avatarImg} />                           
                                }                        
                                title="Bogdan Bot"
                                subheader="Ask me a question!" 
                                className={classes.chatHeader}                          
                            /> 
                        </Grid>  
                        <Grid item xs={12} className={classes.chatWindow}>                            
                            <InitialChat />                              
                        </Grid>                                                                                    
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
        
}

export default Contact;