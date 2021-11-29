import React from 'react'
import {AppBar,Toolbar,Typography,makeStyles,Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import { LS_AUTH_TOKEN } from '../constants/data'

const useStyles=makeStyles({

     component:{
         backgroundColor:'gray'
        ,color:'black',
     },
     container:{
         justifyContent:'center', 
            //justify-content center means to align items horizontally
            //'& > *' targets the children of the  container class
            '& > *':{
                padding:20
            } 
     }
})
//makesstyles is a function which provides us the authority to make changes in the material-ui components 

const Header = () => {
    const classes=useStyles();
    //since usestyles is storing a function hence classes is also  going to act as a function variable
    return (
        <AppBar className={classes.component}>
           <Toolbar className={classes.container}>
            <Link to ='/' style={{textDecoration:'none',color:'white'}}><Typography >HOME</Typography></Link>
            <Link to ='/about' style={{textDecoration:'none',color:'white'}}><Typography>ABOUT</Typography></Link>
            <Link to ='/contact' style={{textDecoration:'none',color:'white'}}><Typography>CONTACT</Typography></Link>
              <Button onClick={() => {
                  localStorage.removeItem(LS_AUTH_TOKEN);
                  window.location.href = "/login";
              }}><Typography style={{color:'white'}}>LOGOUT</Typography></Button>
           </Toolbar>
        </AppBar>
    )
}

export default Header
