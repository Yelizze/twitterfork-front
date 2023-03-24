import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const hashtagSlice = createSlice({
  // nom état
  name: "hashtags", // état initial
  initialState,
  reducers: {
    newHashtag: (state, action) => {
      state.value.push(action.payload)
    },
  }
});

// Pas le même actions que dans l'init du reducer (un "s" en plus)
export const { newHashtag } = hashtagSlice.actions;
export default hashtagSlice.reducer;
