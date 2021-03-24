import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import ChatContact from './ChatContact';
import Hello from './ChatHello';

function InitialChat() {
    const useStyles = makeStyles((theme) => ({ 
        root: {
            overflowAnchor: 'none'
        }, 
        chatWindow: {
            maxHeight: 450,
            minHeight: 450,
            overflow: 'auto',            
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
        },
        iconFacebookColor: {
            color: '#4967aa'
        },
        iconLinkedInColor: {
            color: '#0477b5'
        },
        iconMailColor: {
            color: '#1c9adb'
        }
    }));
      
    const classes = useStyles();
    const [chatHi, setChatHi] = useState(true); 
    const [chatAsset, setChatAsset] = useState(true); 
    
    


    return(
        <div className={classes.root}>
            <CardContent className={classes.chatBubleMargin}>
                <Chip label="Hi! I'm Bogdan Bot 🤖" className={classes.chatBubleInactive} />
            </CardContent>
            <CardContent className={classes.chatBubleMargin}>
                <Chip label="I’m just like Bogdan, but a far better conversationalist 😉" className={classes.chatBubleInactive} />
            </CardContent>
            <CardContent className={classes.chatBubleMargin}>
                <Chip label="How can I help you today?" className={classes.chatBubleInactive} />
            </CardContent>
            <CardContent className={classes.chatBubleMargin}>
                <Chip 
                    label="👋 I just wanted to say hello!" 
                    onClick={() => {                                                                        
                        setChatHi(() => {                                                                                           
                            return(
                                <div>
                                    {chatHi ?                                                     
                                                                                           
                                        <Hello />                                                        
                                    
                                    : ''}                                                
                                </div>
                            )
                        });                                                                                                                    
                    }} 
                    className={classes.chatBubleActive} 
                />                
            </CardContent>
            <CardContent className={classes.chatBubleMargin}>
                <Chip 
                    label="😁 Think i could be an asset to your company?" 
                    onClick={() => {
                        setChatAsset(() => {
                            return(
                                <div>
                                    {chatAsset ? 
                                    <div>
                                        <ChatContact />
                                    </div>
                                    : ''}
                                </div>                                                
                            )
                        });
                    }} 
                     className={classes.chatBubleActive} 
                />
                
            </CardContent>
            <CardContent className={classes.chatBubleMargin}>
                {chatHi}
                {chatAsset}
            </CardContent>
        </div>
    )
}

export default InitialChat;