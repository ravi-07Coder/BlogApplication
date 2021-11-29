import React from 'react'
import {Box,Typography,makeStyles} from '@material-ui/core'
const useStyles=makeStyles({
   container:{
      height:'350px',
      margin:10,
      borderRadius:10,
      border:'2px solid black',
      display:'flex',
      alignItems:'center',
      flexDirection:'column',
      '& > *':
      {
          padding:'0 5px 5px 5px'
      },
      "&:hover":{
    
        backgroundColor:'white',
        transform: "scale3d(1.05, 1.05, 1.5)",
        boxShadow: '5px 10px #888888'
      }
      
    },
  
   image:
   {
       height:'150px',
       width:'100%',
       objectFit:'cover',
       borderRadius:'10px 10px 0 0'
   },
   text:
   {
       color:'#878787',
       fontSize:12
   },
   heading:{
       fontSize:18,
       fontWeight:600,
       textAlign:'center'
   },
   detail:
   {
       fontSize:'14',
       wordBreak:'break-word'
   }
})

const Post = ({post}) => {
    const url=   post.picture  ||  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
    const addElipsis=(str,limit)=>{
        return str.length>limit? str.substring(0,limit)+"...":str;
    }
    const classes=useStyles()
    return (
        <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image}/>
            <Typography className={classes.text}> {post.categories}</Typography>
            <Typography className={classes.heading}>{addElipsis(post.title,20)}</Typography>
            <Typography className={classes.text}> Author:{post.username}</Typography>
            <Typography>{addElipsis(post.description,80)}</Typography>
        </Box>
    )
}

export default Post;
