import React from 'react'
import {Box, TextareaAutosize,Button,makeStyles} from '@material-ui/core';
import {useState,useEffect} from 'react';
import { getComments, newComment} from '../../service/Api';
import Comment from './Comment'

const useStyles=makeStyles({
    componet:{
        marginTop:100,
          display:"flex"

    },
    image:{
        width:50,
        height:50,
        borderWidth:'50%'
    },
    textAreaAutoSize:{
        width:'100%',
        margin:'0 20px'
    },
    button:
    {
        height:40
    }
})

  const intialValues={
      name:'',
      postId:'',
      date:new Date(),
      comments:''
  }

   


const Comments=({post})=> {
   
   
  const[comment,setComment]=useState(intialValues);
  const[comments,setComments]=useState([])
  const[toggle,settoggle]=useState(false)


  useEffect(() => {
     const  getData=async () => {
           let response= await getComments(post._id)
            setComments(response)
        }
        getData();
  }, [post,toggle])
  
  const handleChange=(e)=>{
      setComment(
          {
              ...comment,
              name:post.username,
              postId:post._id,
              comments:e.target.value,
              
          })
  }
   const postComment=async()=>{
       await newComment(comment)
        settoggle(prev=>!prev)
    }
    const classes=useStyles();
    return (
        <Box>
            <Box className={classes.componet}>
              <img src={'https://static.thenounproject.com/png/12017-200.png'} alt="dp" className={classes.image}/>
            <TextareaAutosize className={classes.textAreaAutoSize}  minRows={5}   
              onChange={(e)=>handleChange(e)}
            />
            <Button variant="contained" color="primary" size="meduium" className={classes.button} onClick={()=>postComment()}>
              Post
            </Button>
            </Box>
            {
                comments && comments.map(comment=>(
                    <Comment comment={comment}  settoggle={settoggle}/>
                ))
            }
       
        </Box>
    )
}

export default Comments
