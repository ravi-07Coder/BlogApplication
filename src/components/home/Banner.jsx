import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import img from "../post/zz1-3.jpg"




const useStyles = makeStyles({
  image: {
    background: `url(${img}) center 130%   #000`,
    width: "100%",
    height: "95vh",
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
      
      
    </Box>
  );
};

export default Banner;
