import React, {useRef, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Spring } from 'react-spring/renderprops';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

function ChatContact() {
    const useStyles = makeStyles((theme) => ({ 
        root: {
            overflowAnchor: 'none'
        },    
        chatBubleAnswer: {           
            marginTop: theme.spacing(-1),
            float: 'right',
        },            
        chatBubleUserAnswer: {
            height: 40
        },
        chatUser: {              
            float: 'right',
            clear: 'left'
        },
        chatBot: {            
            float: 'left',
            clear: 'right'
        },
        chatBubleMargin: {
            marginTop: theme.spacing(-1),
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
        chatBubbleForm: {
            backgroundColor: '#161b1d',
            color:'#f5f5f5',
            height: '100px',
            padding: '10px',
            borderRadius: 15,
            marginBottom: '15px'
        }
    }));
      
    const classes = useStyles();
    const el = useRef(null);
    useEffect(() => {
        el.current.scrollIntoView({block: 'end', behavior: 'smooth', inline: 'nearest' });
    });
    
    const redirectLinkedIn = () => {
        window.location.href = "https://www.linkedin.com/in/cozma-bogdan-412333106/";
    }

    const redirectFacebook = () => {
        window.location.href = "https://www.facebook.com/cozma.bogdan.1023/";
    }

    const redirectEmail = () => {
        window.location.href = "mailto:bogdan.cozma1990@gmail.com";
    }

    return(
        <Spring     
            className={classes.root}           
            from={{marginRight: -300}}
            to={{marginRight: 0}}
            config={{delay: 100, duration: 500}}                                                             
        >
            {props => (
                    <div style={props}>   
                        {((m, i) => <div key={i}>{m}</div>)}
                        <div className={classes.chatUser}>                     
                            <CardContent className={classes.chatBubleAnswer}>
                                <Chip id='chat-bubble' label="Yes!" className={classes.chatBubleUserAnswer} />
                            </CardContent>
                        </div>
                        <Spring
                            from={{marginLeft: -300}}
                            to={{marginLeft: 0}}
                            config={{delay: 500, duration: 500}}
                        >
                            {props => (
                                <div style={props}>
                                    <div className={classes.chatBot}>
                                        <CardContent className={classes.chatBubleMargin}>
                                            <Chip label="Great!" className={classes.chatBubleInactive} />
                                        </CardContent>
                                        <Spring
                                            from={{marginLeft: -300}}
                                            to={{marginLeft: 0}}
                                            config={{delay:1000, duration: 500}}
                                        >
                                            {props => (
                                                <div style={props}>
                                                    <CardContent className={classes.chatBubleMargin}>
                                                        <Chip label="Exciting times 🕺" className={classes.chatBubleInactive} />
                                                    </CardContent>
                                                    <Spring
                                                        from={{marginLeft: -300}}
                                                        to={{marginLeft: 0}}
                                                        config={{delay: 1500, duration: 500}}
                                                    >
                                                        {props => (
                                                            <div style={props}>
                                                                <CardContent className={classes.chatBubleMargin}>
                                                                    <Chip label="You can contact me here: 👇" className={classes.chatBubleInactive} />
                                                                </CardContent>
                                                                <Spring
                                                                    from={{marginLeft: -300}}
                                                                    to={{marginLeft: 0}}
                                                                    config={{delay: 2000, duration: 500}}
                                                                >
                                                                    {props => (
                                                                        <div style={props}>
                                                                            <CardContent className={classes.chatBubleMargin}>
                                                                                <Chip icon={<LinkedInIcon />} label="LinkedIn" onClick={redirectLinkedIn} className={classes.chatBubleActive} />
                                                                            </CardContent>
                                                                            <Spring
                                                                                from={{marginLeft: -300}}
                                                                                to={{marginLeft: 0}}
                                                                                config={{delay:2500, duration: 500}}
                                                                            >
                                                                                {props =>(
                                                                                    <div style={props}>                                                                                        
                                                                                        <CardContent className={classes.chatBubleMargin}>
                                                                                            <Chip icon={<FacebookIcon />} label="Facebook" onClick={redirectFacebook} className={classes.chatBubleActive} />
                                                                                        </CardContent>  
                                                                                        <Spring
                                                                                            from={{marginLeft: -300}}
                                                                                            to={{marginLeft: 0}}
                                                                                            config={{delay:3000, duration: 500}}
                                                                                        >
                                                                                            {props =>(
                                                                                                <div style={props}>                                                                                        
                                                                                                    <CardContent className={classes.chatBubleMargin}>
                                                                                                        <Chip icon={<MailIcon />} label="Email me" onClick={redirectEmail} className={classes.chatBubleActive} />
                                                                                                    </CardContent><div id={'el'} ref={el}></div>                                                                                   
                                                                                                </div>
                                                                                            )}
                                                                                        </Spring>                                                                                 
                                                                                    </div>
                                                                                )}
                                                                            </Spring>                                                                            
                                                                        </div>
                                                                    )}
                                                                </Spring>
                                                            </div>
                                                        )}
                                                    </Spring>
                                                </div>
                                            )}
                                        </Spring>
                                    </div>
                                </div>
                            )}
                        </Spring>  
                    </div>                                                 
            )}                                                 
        </Spring>
        
    )
}

export default ChatContact;