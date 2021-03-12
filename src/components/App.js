import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Work from './Work';
import Grid from '@material-ui/core/Grid';



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
        <Grid item xs={12} className='container'>
            <Container>
              <div id='home'>
              <Typography variant="h2" gutterBottom className={classes.h2}>
                Hello, I'm <span className={classes.name}>Bogdan Cozma</span>.
              </Typography>
              <Typography variant="h2" gutterBottom className={classes.h2}>
                I'm a full-stack web developer.
              </Typography>
              <Button onMouseOver={changeArrow} onMouseOut={changeArrowBack} variant={onHover ? "contained" : "outlined"} color="primary" size="large" className={classes.button}>View my work {onHover ? <ArrowDownwardIcon/> : <ArrowForwardIcon/>}</Button>
              </div>
            </Container>          
        </Grid> 
        {/* projects section */}
        <Grid item xs={12}>    
          <Work /> 
        </Grid>
        
      </Grid>
    </div>
    
  );
}

export default App;
