import React from 'react'
import {Box,makeStyles,Typography} from '@material-ui/core'
import {Edit,Delete} from '@material-ui/icons'
import {Link} from 'react-router-dom'
const useStyles=makeStyles((theme)=>({
     Image:{
        width:'100%',
        height:'50vh',
        objectFit:'cover'
     },
     container:
     {
         padding:'0 100px',
         [theme.breakpoints.down('md')]:{
             padding:0
         }
     },
     Icons:{
        float:'right'   
     },
     Icon:{
         margin:5,
         border:'1px solid #878787',
         padding:5,
          borderRadius:'10px'
        },
        heading:{
            fontSize:38,
            fontWeight:600,
            textAlign:'center',
            margin:'50px 0px 10px 0px'
        },
        subheading:
        {
          color:'#878787',
          display:'flex',
          margin:'20px 0',
          [theme.breakpoints.down('md')]:{
              display:'block'
          }
        }
    }))
 
const DetailView = () => {
    const classes=useStyles()
    const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80    '
    return (
        <Box className={classes.container}>
            <img   className={classes.Image}  src={url} alt="banner" />
             <Box className={classes.Icons}>
                 <Link to="/update">
             <Edit className={classes.Icon} color="primary"/>
            </Link>
             <Delete className={classes.Icon} color="error"/>
             </Box>
             <Typography className={classes.heading}>Title of the blog</Typography>
             <Box className={classes.subheading}>
                 <Typography >Author: <span style={{fontWeight:'600',color:'black'}}>Cricket Talks</span></Typography>
                 <Typography style={{marginLeft:'auto'}}>20 OCT 2021</Typography>
             </Box>
             <Typography>this is a cricket blog</Typography>
        </Box>
    )
}

export default DetailView
