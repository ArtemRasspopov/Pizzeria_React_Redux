import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serchValue: ''
};

export const Search = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setSerchValue: (state, action) => {
      state.serchValue = action.payload;
    },
  },
});
export const { setSerchValue} = Search.actions;

export default Search.reducer;
