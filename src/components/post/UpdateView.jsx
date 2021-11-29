import React from 'react'
import { Box, makeStyles, FormControl, InputBase, TextareaAutosize, Button } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import { useState, useEffect } from 'react'
import { getPost, updatePost,uploadFile } from '../../service/Api'
import { useHistory } from 'react-router-dom'

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


const intialValues = {
    title: '',
    description: '',
    picture: '',
    username: 'ravi',
    categories: 'All',
    createdDate: new Date()
}



    const UpdateView = ({ match }) => {
    const [post, setPost] = useState(intialValues);
    const [file, setFile] = useState('');
    const [image, setimage] = useState(''); //eslint-disable-line
    
    useEffect(() => {

        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name)
                data.append("file", file);
                const image = await uploadFile(data);
                post.picture = image.data;
                console.log(post.picture)
                setimage(image.data)
            }
        }
        getImage();
    }, [file]) //eslint-disable-line

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    

    const classes = useStyles()
    
    const history = useHistory();

    
    useEffect(() => {
        const fetchData = async () => {
            let d=window.location.href.split('/')
            d=d[d.length-1];
            let data = await getPost(d);
            setPost(data)
        }
        fetchData();
    }, []) //eslint-disable-line
    const handleChange = (e) => {
        setPost({ ...post, title: e.target.value })
    }
    const handleChange1 = (e) => {
        setPost({ ...post, description: e.target.value })
    }
    const updateBlog = async () => {
        let d=window.location.href.split('/')
        d=d[d.length-1];
        await updatePost(d, post)
        history.push(`/details/${d}`)
    }


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
                <InputBase placeholder='Title' value={post.title}
                    name="title" onChange={(e) => handleChange(e)}
                    className={classes.TextField} />
                <Button variant="contained" color="primary" onClick={() => updateBlog()}>Update</Button>

            </FormControl>
            <TextareaAutosize rowsMin={5} placeholder="Tell your story"
                name="description"
                onChange={(e) => handleChange1(e)}
                className={classes.TextArea}
                value={post.description}
            />
        </Box>
    )
}
export default UpdateView
