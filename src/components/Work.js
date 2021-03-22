import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
import clsx from 'clsx';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import img1 from '../images/project1.jpeg';
import img2 from '../images/project2.jpeg';
import About from '../components/About';
import Contact from './Contact';

function NavBar(){
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          height: '100vh'
        },
        media: {
            height: 400,              
        },
        avatar: {
            backgroundColor: '#d83637',
        },
        button: {
            margin: theme.spacing(2)
        }
      }));
      const classes = useStyles();
      const [expanded1, setExpanded1] = React.useState(false);
      const [expanded2, setExpanded2] = React.useState(false);

      const handleExpandClick1 = () => {
          setExpanded1(!expanded1);
      };
      const handleExpandClick2 = () => {
          setExpanded2(!expanded2);
      }
      
    return (
        <div className={classes.root}>
            <React.Fragment>
            <AppBar position='sticky' className='navbar'>
                <Toolbar className='navbar-item'>
                    <Typography variant="h6" className='navbar-item'>
                        <Button size="large"><a href="home" className='navbar-btn'>Home</a></Button>
                    </Typography>
                    <Typography variant="h6" className='navbar-item'>
                        <Button size="large"><a href='work' className='navbar-btn'>Work</a></Button>
                    </Typography>
                    <Typography variant="h6" className='navbar-item'>
                        <Button size="large"><a href='about' className='navbar-btn'>About</a></Button>
                    </Typography>
                    <Typography variant="h6" className='navbar-item'>
                        <Button size="large"><a href='contact' className='navbar-btn'>Contact</a></Button>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="animation-box">
                <div className="box">
                    <div className="title">
                        <span className="block"></span>
                        <h1>Projects<span className='dot'></span></h1>
                    </div>
                </div>
            </div>
            <Grid container>
                <Grid item xs={6}> 
                    <Card className='card-style'>
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
                        src={img1}
                        title="Cabinet Psihologie"
                    ></CardMedia>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et erat diam. Nullam sed urna a ante bibendum aliquet eu sed ipsum. Sed congue volutpat arcu, eu tempor massa ornare eget. Donec scelerisque auctor metus, vel interdum leo sollicitudin et. Maecenas congue augue orci, in tempor felis consequat viverra.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Button className={classes.button} startIcon={<GitHubIcon />}>GitHub</Button>                        
                        <Button className={classes.button}  startIcon={<LinkIcon />} href="www.cabinetpsihologie.org">Live Demo</Button>
                        <Button onClick={handleExpandClick1} aria-expanded={expanded1} className={clsx(classes.expanded, {[classes.expandOpen]: expanded1})} startIcon={<ExpandMoreIcon />}>{expanded1 ? 'Show Less' : 'Show More'}</Button>                        
                    </CardActions>
                    <Collapse in={expanded1} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et erat diam. Nullam sed urna a ante bibendum aliquet eu sed ipsum. Sed congue volutpat arcu, eu tempor massa ornare eget. Donec scelerisque auctor metus, vel interdum leo sollicitudin et. Maecenas congue augue orci, in tempor felis consequat viverra.
                        </Typography>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et erat diam. Nullam sed urna a ante bibendum aliquet eu sed ipsum. Sed congue volutpat arcu, eu tempor massa ornare eget. Donec scelerisque auctor metus, vel interdum leo sollicitudin et. Maecenas congue augue orci, in tempor felis consequat viverra.
                        </Typography>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et erat diam. Nullam sed urna a ante bibendum aliquet eu sed ipsum. Sed congue volutpat arcu, eu tempor massa ornare eget. Donec scelerisque auctor metus, vel interdum leo sollicitudin et. Maecenas congue augue orci, in tempor felis consequat viverra.
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et erat diam. Nullam sed urna a ante bibendum aliquet eu sed ipsum. Sed congue volutpat arcu, eu tempor massa ornare eget. Donec scelerisque auctor metus, vel interdum leo sollicitudin et. Maecenas congue augue orci, in tempor felis consequat viverra.
                        </Typography>
                        </CardContent>
                    </Collapse>
                    </Card>
                </Grid>

                <Grid item xs={6}> 
                <Card className='card-style'>
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
                        src={img2}
                        title="PurpleEverGlow"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et erat diam. Nullam sed urna a ante bibendum aliquet eu sed ipsum. Sed congue volutpat arcu, eu tempor massa ornare eget. Donec scelerisque auctor metus, vel interdum leo sollicitudin et. Maecenas congue augue orci, in tempor felis consequat viverra.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Button className={classes.button} startIcon={<GitHubIcon />}>GitHub</Button>                        
                        <Button className={classes.button}  startIcon={<LinkIcon />}>Live Demo</Button>
                        <Button onClick={handleExpandClick2} aria-expanded={expanded2} className={clsx(classes.expanded, {[classes.expandOpen]: expanded2})} startIcon={<ExpandMoreIcon />}>{expanded2 ? 'Show Less' : 'Show More'}</Button>                         
                    </CardActions>
                    <Collapse in={expanded2} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et erat diam. Nullam sed urna a ante bibendum aliquet eu sed ipsum. Sed congue volutpat arcu, eu tempor massa ornare eget. Donec scelerisque auctor metus, vel interdum leo sollicitudin et. Maecenas congue augue orci, in tempor felis consequat viverra.
                        </Typography>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et erat diam. Nullam sed urna a ante bibendum aliquet eu sed ipsum. Sed congue volutpat arcu, eu tempor massa ornare eget. Donec scelerisque auctor metus, vel interdum leo sollicitudin et. Maecenas congue augue orci, in tempor felis consequat viverra.
                        </Typography>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et erat diam. Nullam sed urna a ante bibendum aliquet eu sed ipsum. Sed congue volutpat arcu, eu tempor massa ornare eget. Donec scelerisque auctor metus, vel interdum leo sollicitudin et. Maecenas congue augue orci, in tempor felis consequat viverra.
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et erat diam. Nullam sed urna a ante bibendum aliquet eu sed ipsum. Sed congue volutpat arcu, eu tempor massa ornare eget. Donec scelerisque auctor metus, vel interdum leo sollicitudin et. Maecenas congue augue orci, in tempor felis consequat viverra.
                        </Typography>
                        </CardContent>
                    </Collapse>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <About />
                </Grid>
                <Grid item xs={12}>
                    <Contact />
                </Grid>
            </Grid>
            </React.Fragment>
        </div>                       
    )
}



export default NavBar;