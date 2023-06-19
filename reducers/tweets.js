import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const tweetSlice = createSlice({
  // nom état
  name: "tweets", // état initial
  initialState,
  reducers: {
    newTweet: (state, action) => {
      let tweet = {
        user: action.payload.user,
        message: action.payload.message,
        isLiked: action.payload.isLiked,
      };
      state.value.push(tweet);
    },
    deleteTweet: (state, action) => {
      state.value = state.value.filter(
        (item) => item.message !== action.payload.message
      );
    },
    deleteAllTweets: (state) => {
      state.value = [];
    },
  },
});

// Pas le mêe actions que dans l'init du reducer (un "s" en plus)
export const { newTweet, deleteTweet, deleteAllTweets } = tweetSlice.actions;
export default tweetSlice.reducer;
