import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function About(){
    const useStyles = makeStyles((theme) => ({
        root: {            
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(16),
                height: theme.spacing(16)
            }
        },
        paper: {
            background: 'yellow'
        }
      }));
      const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container>
                <Grid item>
                    <Paper elevation={3} className={classes.paper}/>
                </Grid>                
            </Grid>
        </div>
    )
}

export default About;