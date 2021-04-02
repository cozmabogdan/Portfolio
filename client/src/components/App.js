import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Scrollchor from 'react-scrollchor';
import Work from './Work';
import About from './About';
import Contact from './Contact';




function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height: '100vh'
    },
    h2: {
      color: 'white',
      textAlign:'center',
    },
    button: {
      color: ' white',
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 200
    },
    name: {
      color: '#d83637',
    }
  }))
  const classes = useStyles();
  const [onHover, setHover] = useState(false);
  
  function changeArrow(){
    setHover(true);
  }
  function changeArrowBack(){
    setHover(false);
  }

 

  return (    
      <div className={classes.root}>                          
          <Grid container>
            {/* welcome page */}            
              <Grid item xs={12} className='container' id=''>
                  <Container>
                    <div id='home'>
                    <Typography variant="h2" gutterBottom className={classes.h2}>
                      I'm a full-stack web developer.
                    </Typography>               
                    <Button onMouseOver={changeArrow} onMouseOut={changeArrowBack} variant={onHover ? "contained" : "outlined"} color="primary" size="large" className={classes.button}><Scrollchor to='#work' className='scroll-btn-style'>View my work </Scrollchor>{onHover ? <ArrowDownwardIcon/> : <ArrowForwardIcon/>}</Button>
                    </div>
                  </Container>          
              </Grid>             
            

            <React.Fragment>

              {/* navbar */}
              <AppBar position='sticky' className='navbar'>
                <Toolbar className='navbar-item'>                                 
                    <Typography variant="h6" className='navbar-item'>
                        <Button size="large"><Scrollchor to="" className='navbar-btn'>Home</Scrollchor></Button>
                    </Typography>                                            
                    <Typography variant="h6" className='navbar-item'>
                        <Button size="large"><Scrollchor to="#work" className='navbar-btn'>Work</Scrollchor></Button>
                    </Typography>                                                
                    <Typography variant="h6" className='navbar-item'>
                        <Button size="large"><Scrollchor to="#about" className='navbar-btn'>About</Scrollchor></Button>
                    </Typography>                                                
                    <Typography variant="h6" className='navbar-item'>
                        <Button size="large"><Scrollchor to="#contact" className='navbar-btn'>Contact</Scrollchor></Button>
                    </Typography>                  
                </Toolbar>
              </AppBar>   

            {/* work component */}
            <Grid item xs={12} id='work'>                 
                <Work />                                                                                               
            </Grid>

            {/* about component */}
            <Grid item xs={12} id='about'>                             
              <About />              
            </Grid>

            {/* contact component */}
            <Grid item xs={12} id='contact'>                           
              <Contact />                    
            </Grid>

            </React.Fragment>
          </Grid>                                      
      </div>    
  );
}

export default App;