import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Work from './Work';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";



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
    <Router>
    <div className={classes.root}>         
      <Switch>
      <Grid container>
        {/* welcome page */}
        <Route path='/' exact component={App}>
        <Grid item xs={12} className='container'>
            <Container>
              <div id='home'>
              <Typography variant="h2" gutterBottom className={classes.h2}>
                Hello, I'm <span className={classes.name}>Bogdan Cozma</span>.
              </Typography>
              <Typography variant="h2" gutterBottom className={classes.h2}>
                I'm a full-stack web developer.
              </Typography>
              <Button href='/work' onMouseOver={changeArrow} onMouseOut={changeArrowBack} variant={onHover ? "contained" : "outlined"} color="primary" size="large" className={classes.button}>View my work {onHover ? <ArrowDownwardIcon/> : <ArrowForwardIcon/>}</Button>
              </div>
            </Container>          
        </Grid> 
        </Route>
        
        <React.Fragment>

          {/* navbar */}
          <AppBar position='sticky' className='navbar'>
            <Toolbar className='navbar-item'>
                <Typography variant="h6" className='navbar-item'>
                    <Button size="large"><a href="/" className='navbar-btn'>Home</a></Button>
                </Typography>
                <Typography variant="h6" className='navbar-item'>
                    <Button size="large"><a href='/work' className='navbar-btn'>Work</a></Button>
                </Typography>
                <Typography variant="h6" className='navbar-item'>
                    <Button size="large"><a href='/about' className='navbar-btn'>About</a></Button>
                </Typography>
                <Typography variant="h6" className='navbar-item'>
                    <Button size="large"><a href='/contact' className='navbar-btn'>Contact</a></Button>
                </Typography>
            </Toolbar>
          </AppBar>   
        
        {/* work component */}
        <Grid item xs={12}> 
          <Route path='/work' component={Work} />
            <Work />                          
        </Grid>

        {/* about component */}
        <Grid item xs={12}>
          <Route path='/about' component={About} />
            <About />        
        </Grid>

        {/* contact component */}
        <Grid item xs={12}>
          <Route path='/contact' component={Contact} />
            <Contact />         
        </Grid>

        </React.Fragment>
      </Grid>
      </Switch>        
    </div>
    </Router>
  );
}

export default App;
