import React from 'react'
import { Box, makeStyles, FormControl, InputBase, TextareaAutosize, Button } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import { useState, useEffect } from 'react'
import { createPost, uploadFile } from '../../service/Api.js'

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
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10px'
    },
    TextField: {
        flex: 1,
        margin: '0 10px',
        fontSize: '25px'
    },
    TextArea: {
        width: '100%',
        marginTop: '50px',
        border: 'none',
        fontSize: '18',
        '&:focus-visible': {
            outline: 'none'
        }
    }
}))

const initValues = {
    title: "",
    description: "",
    picture: '',
    username: 'ravi',
    categories: 'All',
    createdDate: new Date()
}

const CreateView = () => {
   
    const [post, setPost] = useState(initValues)
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    
  
    useEffect(() => {

        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                const  image = await uploadFile(data);
                console.log(image)
                post.picture = image.data;
                console.log(post.picture)
                setImage(image.data)
            }
        }
        getImage();
    }, [file])
    

    const handleChange = (e) => {
        setPost({ ...post, title: e.target.value })
    }
    const handleChange1 = (e) => {
        setPost({ ...post, description: e.target.value })
    }
    const savePost = async () => {
        await createPost(post)
    }
    //create the intial value post use the set state to keep on changing the values use hamdlechange to handle the onchange funtionality
    //create an api for the post of the data and on the click of the publish button create a savePost function  
    const classes = useStyles()
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'  
    return (
        <Box className={classes.container}>
            <img className={classes.Image} src={url} alt="banner" />
            <FormControl className={classes.form}>
                <label htmlFor="fileinput">
                    <AddCircle fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileinput"
                    style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputBase onChange={(e) => handleChange(e)} placeholder='Title'
                    name="title" className={classes.TextField} />
                <Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
            </FormControl>
            <TextareaAutosize rowsMin={5} placeholder="Tell your story"
                onChange={(e) => handleChange1(e)}
                name="description"
                className={classes.TextArea}
            />
        </Box>
    )
}
export default CreateView
