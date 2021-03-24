import React from "react";
import useStyles from "./styles";
// fetches data from the global redux store
import { useSelector } from "react-redux";

import Post from "./Post/Post";

import { Grid, CircularProgress } from "@material-ui/core";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  // posts is what is being exported from reducers/index.js "combineReducers"
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
