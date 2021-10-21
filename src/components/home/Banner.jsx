import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  image: {
    background: `url(${"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"}) center/55% repeat-x #000`,
    width: "100%",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    '& :first-child': {
        fontSize:66,
        color:'#ffffff',
        lineHeight:1
    },
    '& :last-child': {
        fontSize: 24,
        background: '#FFFFFF',
    }
    //align-items make the contents vertically center and justify content center makes the content horizontally center
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.image}>
      <Typography>BLOG</Typography>
      <Typography>Hey Bloggers!</Typography>
    </Box>
  );
};

export default Banner;
