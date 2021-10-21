import React from 'react'
import { Box,  makeStyles, FormControl,InputBase,TextareaAutosize,Button } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'

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

const UpdateView = () => {
    const classes = useStyles()
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    return (
        <Box className={classes.container}>
            <img className={classes.Image} src={url} alt="banner" />
            <FormControl className={classes.form}>
                <AddCircle fontSize="large" color="action"/>
                <InputBase placeholder='Title'  className={classes.TextField}/>
                <Button variant="contained" color="primary">Update</Button>
              
            </FormControl>
            <TextareaAutosize rowsMin={5} placeholder="Tell your story" className={classes.TextArea}/>
        </Box>

    )
}
export default UpdateView
