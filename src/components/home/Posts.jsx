import React from 'react'
import Post from './Post'
import {Link} from 'react-router-dom'
import { Grid } from '@material-ui/core'
const Posts = () => {
    let posts = [1, 2, 3];
    return (
        posts.map(post => (
            <Grid item lg={4} sm={4} xs={12}>
                <Link to={'/details'} style={{textDecoration:'none',color:'inherit'}}>
                <Post/>
                <Post/>
                </Link>
            </Grid>
        ))
    )
}

export default Posts
