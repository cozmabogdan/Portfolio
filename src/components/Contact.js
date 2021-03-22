import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import avatarImg from '../images/pozaCV.jpg';
import Chip from '@material-ui/core/Chip';
import Hello from './ChatBot/ChatHello';
import ChatContact from './ChatBot/ChatContact';





function Contact() {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            height: '100vh',
            backgroundColor: '#161b1d'
        },
        media: {
            height: 0,
            paddingTop: '56.25%', 
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
          
        avatar: {
            backgroundColor: red[500],
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
        },
        chat: {            
            width: 400,
            minHeight: 500,
            maxHeight: 500,
        },
        chatHidden: {
            display: 'none'
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
        chatBubleMargin: {
            marginTop: theme.spacing(-1),
        },
        chatBubleAnswer: {
            marginTop: theme.spacing(-1),
            float: 'right',
        },      
        chatGridContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        chatWindow: {
            maxHeight: 450,
            minHeight: 450,
            overflow: 'auto',            
        },
        chatBot: {
            float: 'left'
        },
        chatUser: {
            float: 'right'
        },
        chatBubleUserAnswer: {
            height: 40
        }
      }));
        const classes = useStyles();
        const [chatAnswer, setChatAnswer] = useState(true); 
        const [chatContact, setChatContact] = useState(true);   
        
        //intro messages
        const hi = (
            <div>
            <CardContent className={classes.chatBubleMargin}>
                <Chip label="Hi! I'm Bogdan Bot 🤖" className={classes.chatBubleInactive} />
            </CardContent>
            <CardContent className={classes.chatBubleMargin}>
                <Chip label="I’m just like Bogdan, but a far better conversationalist 😉" className={classes.chatBubleInactive} />
            </CardContent>
            <CardContent className={classes.chatBubleMargin}>
                <Chip label="How can I help you today?" className={classes.chatBubleInactive} />
            </CardContent></div>
        );

        const  predefinedHello = (
            <CardContent className={classes.chatBubleMargin}>
                <Chip 
                    label="👋 I just wanted to say hello!" 
                    onClick={() => {                                                                        
                        setChatAnswer(() => {                                                                                           
                            return(
                                <div>
                                    {chatAnswer ?                                                     
                                    <div>                                                        
                                        <Hello />                                                        
                                    </div>
                                    : ''}                                                
                                </div>
                            )
                        });                                                                                                                    
                    }} 
                    className={classes.chatBubleActive} 
                />
            </CardContent>
        )

        const assetMessage = (
            <CardContent className={classes.chatBubleMargin}>
                <Chip 
                    label="😁 Think i could be an asset to your company?" 
                    onClick={() => {
                        setChatContact(() => {
                            return(
                                <div>
                                    {chatContact ? 
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
        )
        
        
    return(
        <div className={classes.root}>
            <div className='shape'></div>
            <div className="animation-box2">
                <div className="box">
                    <div className="title1">
                        <span className="block"></span>
                        <h1>Contact<span className='dot'></span></h1>
                    </div>
                </div>
            </div>
            <Grid container className={classes.chatGrid}>
                <Card className={classes.chat}>
                    <Grid item xs={12}>
                        <CardHeader
                            avatar={
                                <Avatar alt="Cozma Bogdan" src={avatarImg} className={classes.avatar} />                           
                            }                        
                            title="Bogdan Bot"
                            subheader="Ask me a question!"
                            className={classes.chatHeader}
                        /> 
                    </Grid>  
                    <Grid item xs={12}>
                        <div className={classes.chatWindow}>                    
                            <div className={classes.chatBot}>
                                {/*intro messages*/}
                                {hi}   
                                {/*predefined hello message */}
                                {predefinedHello}
                                {/*asset message */}
                                {assetMessage}
                            </div>                        
                            {chatAnswer}   
                            {chatContact}                                                                                                                                 
                        </div>  
                    </Grid>                                                                                    
                </Card>
            </Grid>
        </div>
    )
        
}

export default Contact;