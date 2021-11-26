import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import Post from "./Posts";
import { Grid } from "@material-ui/core";
//we will wrap all the components after the header tag in the in the box as we want to keep the header as fixed
//and we gave the margin according to the navbar height

const Home = () => {
    return (
        <div>
            <Banner />
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item lg={10} xs={12} sm={10}>
                    <Post/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
