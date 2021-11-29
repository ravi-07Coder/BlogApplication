import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub,  Email } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
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

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Inspired to make a change</Typography>
                <Typography variant="h5" className={classes.text}>We are group of  Software Engineers full of enthausium
                and flamboyance our intention is to make change in the perception of the society through digital platform 
                 
                 Do pay a visit to our blog website and manifest your skills  to the society
                 <br/>
                 <Typography variant="h5"style={{marginTop:'35px'}} className={classes.text}> you can reach us through
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/ravi-07Coder" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                    or send me an Email 
                        <Link href="mailto:ravishankarchaubey9454@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                    </Typography>
                </Typography>
            </Box>
        </Box>
    )
}

export default About;
