/* eslint-disable no-lone-blocks */
import React, {useState, useRef, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Spring } from 'react-spring/renderprops';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import ChatContact from './ChatContact';

function Hello(){
    const useStyles = makeStyles((theme) => ({           
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
    }));
      
    const classes = useStyles();
    const [chatAgain, setChatAgain] = useState(true);
    
    {/* scroll to div */}
    const el = useRef(null);
    useEffect(() => {
        el.current.scrollIntoView({behavior: 'smooth' });
    });
    
    return(        
        <Spring                          
            from={{marginRight: -300}}
            to={{marginRight: 0}}
            config={{delay: 100, duration: 500}}                                                             
        >
            {props => (
                    <div style={props}>   
                        {((m, i) => <div key={i}>{m}</div>)}
                        <div className={classes.chatUser}>                     
                            <CardContent className={classes.chatBubleAnswer}>
                                <Chip id='chat-bubble' label="I just wanted to say hello" className={classes.chatBubleUserAnswer} />
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
                                            <Chip label="Well hello there!" className={classes.chatBubleInactive} />
                                        </CardContent>
                                        <Spring
                                            from={{marginLeft: -300}}
                                            to={{marginLeft: 0}}
                                            config={{delay:1000, duration: 500}}
                                        >
                                            {props => (
                                                <div style={props}>
                                                    <CardContent className={classes.chatBubleMargin}>
                                                        <Chip label="😁 Thanks for saying hi!" className={classes.chatBubleInactive} />
                                                    </CardContent>
                                                    <Spring
                                                        from={{marginLeft: -300}}
                                                        to={{marginLeft: 0}}
                                                        config={{delay: 1500, duration: 500}}
                                                    >
                                                        {props => (
                                                            <div style={props}>
                                                                <CardContent className={classes.chatBubleMargin}>
                                                                    <Chip label="I hope you've enjoyed browsing my work" className={classes.chatBubleInactive} />
                                                                </CardContent>
                                                                <Spring
                                                                    from={{marginLeft: -300}}
                                                                    to={{marginLeft: 0}}
                                                                    config={{delay: 2000, duration: 500}}
                                                                >
                                                                    {props => (
                                                                        <div style={props}>
                                                                            <CardContent className={classes.chatBubleMargin}>
                                                                                <Chip label="Can I help you with anything else?" className={classes.chatBubleInactive} />
                                                                            </CardContent>
                                                                            <Spring
                                                                                from={{marginLeft: -300}}
                                                                                to={{marginLeft: 0}}
                                                                                config={{delay:2500, duration: 500}}
                                                                            >
                                                                                {props =>(
                                                                                    <div style={props}>                                                                                        
                                                                                        <CardContent className={classes.chatBubleMargin}>
                                                                                            <Chip 
                                                                                                label="😁 Think i could be an asset to your company?" 
                                                                                                onClick={()=>{
                                                                                                    setChatAgain(()=>{
                                                                                                        return(
                                                                                                            <div>
                                                                                                                {chatAgain ? <ChatContact /> : ''}
                                                                                                            </div>
                                                                                                        )
                                                                                                    })
                                                                                                }}                                                                                                  
                                                                                                className={classes.chatBubleActive} />                                                                                                                                                                                                                                                                                      
                                                                                        </CardContent>   
                                                                                                {chatAgain}
                                                                                        {/* scroll to this div */}
                                                                                        <div id={'el'} ref={el}></div>                                                                                                                                                                     
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

export default Hello;