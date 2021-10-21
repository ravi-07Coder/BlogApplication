import React from 'react'
import { Box,  makeStyles, FormControl,InputBase,TextareaAutosize,Button } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import {useState} from 'react'
import { createPost } from '../../service/Api.js'

const useStyles = makeStyles((theme) => ({
    Image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    container:
    {
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            padding: 0
        }
    },
    form :{
        display:'flex',
        flexDirection:'row',
        marginTop:'10px'
    },
    TextField:{
        flex:1,
        margin:'0 10px',
        fontSize:'25px'
    },
    TextArea:{
    width:'100%',
    marginTop:'50px',
    border:'none',
    fontSize:'18',
    '&:focus-visible':{
        outline:'none'
    }
    }      
}))

const initValues={
    title:'',
    description:'',
    picture:'',
    username:'ravi',
    categories:'All',
    createdDate:new Date()
}

const CreateView = () => {
  
    const[post,setPost]=useState(initValues)  
     const handleChange=(e)=>{
         setPost({...post,[e.target.name]:[e.target.value]})
     }
   const savePost= async ()=>{
     await  createPost(post)
   }
  
    const classes = useStyles()
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    return (
        <Box className={classes.container}>
            <img className={classes.Image} src={url} alt="banner" />
            <FormControl className={classes.form}>
                <AddCircle fontSize="large" color="action"/>
                <InputBase  onChange={(e)=> handleChange(e)} placeholder='Title' 
                 name='title'
                className={classes.TextField}/>
                <Button  onClick={()=> savePost()} variant="contained" color="primary">Publish</Button>
            </FormControl>
            <TextareaAutosize rowsMin={5} placeholder="Tell your story" 
            onChange={(e)=> handleChange(e)}
           name='description'
           className={classes.TextArea}/>
        </Box>

    )
}
export default CreateView
