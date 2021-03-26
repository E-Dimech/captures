import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

const reducer = (posts = [], action) => {
  // the payload in FETCH_ALL is the actual posts

  // update/like run same returns. Just double the case.
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      // case "LIKE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default reducer;
