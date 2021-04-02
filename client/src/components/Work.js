import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import cabinetPsihologie from '../images/cabinetPsihologie - Home(3).png';
import purpleEverGlow from '../images/PurpleEverGlow - Home.png';
import TrackVisibility from 'react-on-screen';



function NavBar(){
    const useStyles = makeStyles((theme) => ({
        root: {          
            height: 'auto'
        },        
        cardStyle: {
            margin: '2rem'
        },       
        media: {
            height: 345,                                  
        },
        avatar: {
            backgroundColor: '#d83637',
        },
        button: {
            margin: theme.spacing(2)
        },
        textFontSize: {
            fontSize: '16px'
        }                       
    }));
    const classes = useStyles();

    const [expand1, setExpand1] = useState(false);
    const [expand2, setExpand2] = useState(false); 

    const TitleAnimation = () => {
        return (
        <div className="animation-box">
            <div className="box">
                <div className="title">
                    <span className="block"></span>
                    <h1>Work<span className='dot'></span></h1>
                </div>
            </div>
        </div>
    )}

    const animation = ({ isVisible }) => {           
        return isVisible ? <TitleAnimation /> : <div className='animation-box'></div>;
    }
      
    return (
        <div className={classes.root}>  

            <Grid container>
                <Grid container item xs={12} justify="center">
                    {/*title animation */}
                    <TrackVisibility>
                        {animation}
                    </TrackVisibility>
                </Grid>

                {/* left project card */}
                <Grid container item md={6}> 
                    <Card className={classes.cardStyle}>
                        <CardHeader
                            avatar={
                            <Avatar aria-label="project1" className={classes.avatar}>
                                CB
                            </Avatar>
                            }
                            title="Cabinet Psihologie"
                        />                    
                        <CardMedia
                            className={classes.media}   
                            component='img'             
                            src={cabinetPsihologie}
                            title="Cabinet Psihologie"
                        ></CardMedia>
                        <CardContent className={classes.paragraphHeight}>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.textFontSize}>
                                A website for a local psychology praxis working with adults , kids diagnosed with Down syndrome, ADHD, autism, etc , educational and family counseling, personal development, speach therapy, counselling for people with disabilities.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Button className={classes.button} startIcon={<GitHubIcon />} href="https://github.com/cozmabogdan/Cabinet-Psihologie">GitHub</Button>                        
                            <Button className={classes.button}  startIcon={<LinkIcon />} href="http://www.cabinetpsihologie.org/">Live Demo</Button>
                            <Button onClick={() => setExpand1(!expand1)} aria-expanded={expand1} startIcon={<ExpandMoreIcon />}>{expand1 ? 'Show Less' : 'Show More'}</Button>                        
                        </CardActions>
                        <Collapse in={expand1} timeout="auto">
                            <CardContent className={classes.paragraph}>
                                <Typography paragraph>
                                    I made the website using the EJS template and Bootstrap for Front-End. For the Back-End I used the Express framework and Express-session to transfer data between the client and the server. For the database I used Mongoose. For authentication I used passport. 
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>

                {/* right project card */}
                <Grid container item md={6}> 
                    <Card className={classes.cardStyle}>
                        <CardHeader
                            avatar={
                            <Avatar aria-label="project2" className={classes.avatar}>
                                CB
                            </Avatar>
                            }
                            title="PurpleEverGlow"
                        />
                        <CardMedia
                            className={classes.media}
                            component='img'             
                            src={purpleEverGlow}
                            title="PurpleEverGlow"
                        />
                        <CardContent className={classes.paragraphHeight}>
                            <Typography variant="body2" color="textSecondary" className={classes.textFontSize} component="p">
                            A personal blog for a young psychologist, who wants to emphasis the need for emotional education in the world.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Button className={classes.button} startIcon={<GitHubIcon />} href="http://www.cabinetpsihologie.org/">GitHub</Button>                        
                            <Button className={classes.button}  startIcon={<LinkIcon />} href="http://www.purpleeverglow.com/">Live Demo</Button>
                            <Button onClick={()=> setExpand2(!expand2)} aria-expanded={expand2} startIcon={<ExpandMoreIcon />}>{expand2 ? 'Show Less' : 'Show More'}</Button>                         
                        </CardActions>
                        <Collapse in={expand2} timeout="auto">
                            <CardContent className={classes.paragraph}>
                                <Typography paragraph>
                                    The website was made using EJS template and CSS for style. I used the Express framework with Mongoose for the scheme-bases model of the application. For authentication I used passport do add Cookies and Sessions. To upload images to the Database I used Multer and Base64 to encode it. For the Contact form I used nodemailer. 
                                </Typography>                        
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
                
            </Grid>           
        </div>                       
    )
}



export default NavBar;