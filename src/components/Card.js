import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

function Card(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          height: '100vh'
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
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: '#d83637',
        },
      }));
      const classes = useStyles();
      const [expanded, setExpanded] = React.useState(false);
      const handleExpandClick = () => {
          setExpanded(!expanded);
      };
    return(
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
                        image="props.img"
                        title="Cabinet Psihologie"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et erat diam. Nullam sed urna a ante bibendum aliquet eu sed ipsum. Sed congue volutpat arcu, eu tempor massa ornare eget. Donec scelerisque auctor metus, vel interdum leo sollicitudin et. Maecenas congue augue orci, in tempor felis consequat viverra.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <GitHubIcon className='icon-space'></GitHubIcon>
                        <LinkIcon />
                        <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
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
    )
}

export default Card;