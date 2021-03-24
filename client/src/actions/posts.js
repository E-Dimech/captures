// * as = import eveything from the actions as api.
// use api.fetchposts because will have a lot of calls exported from api

import * as api from "../api";

// Action creators are functions that return an action
// an acition is an obj with a type and payload
// payload is data where posts are stored
// redux thunk need async logic need 2nd (async) arrow function
// instead of return use dispatch(action)

export const getPosts = () => async (dispatch) => {
  try {
    // gets response from api, returns data obj. the data represents posts
    const { data } = await api.fetchPosts();
    // using redux to pass/dispatch an action from data from backend
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// step:1   when the action gets dispatched
// step:2   from app.js through useEffect
// step:3   fires posts reducer which handles logic for fetching all posts

export const createPost = (post) => async (dispatch) => {
  try {
    // makes a post api request to server
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
