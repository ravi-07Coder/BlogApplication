import React from 'react'
import {AppBar,Toolbar,Typography,makeStyles,Button} from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles=makeStyles({
     component:{
         backgroundColor:'#ffffff'
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
            <Link to ='/' style={{textDecoration:'none',color:'inherit'}}><Typography >HOME</Typography></Link>
              <Typography>ABOUT</Typography>
              <Typography>CONTACT</Typography>
              <Button>LOGOUT</Button>
           </Toolbar>
        </AppBar>
    )
}

export default Header
