import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub,  Email } from '@material-ui/icons';
import contact from './contactblog.jpg'

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${contact})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px top -100px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: 'white'
    }
})


const Contact = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Typography variant="h5" className={classes.text}>
                    Reach us out through
                    <Link href="https://github.com/ravi-07Coder" color="inherit" target="_blank">
                        <GitHub/>
                    </Link>
                    or send me an Email 
                    <Link href="mailto:ravishankarchaubey9454@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Typography>
            </Box>
        </Box>
    );
}

export default Contact;
