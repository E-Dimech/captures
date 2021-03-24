import React from "react";

// fetches data from the global redux store
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles.js";

const Posts = () => {
  const classes = useStyles();
  // posts is what is being exported from reducers/index.js "combineReducers"
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
