const reducer = (posts = [], action) => {
  // the payload in FETCH_ALL is the actual posts
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default reducer;
