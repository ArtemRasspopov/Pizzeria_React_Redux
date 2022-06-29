import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk(
  "pizzas/fetchItems",
  async (filters) => {
    const res = await axios.get(
      `https://629703cc14e756fe3b26fb80.mockapi.io/items?page=${filters.currentPage}&limit=6&${filters.categoryFilter}&${filters.sortFilter}&${filters.serch}`
    );
    return res.data;
  }
);

const initialState = {
  items: [],
  status: "loading", // loading | success | error
};

export const ItemsSlice = createSlice({
  name: "ItemsSlice",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchItems.fulfilled]: (state, action) => {
      if (action.payload.length) {
        state.items = action.payload;
        state.status = "success";
      } else {
        state.status = "error";
      }
    },
    [fetchItems.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});
export const { setItems } = ItemsSlice.actions;

export default ItemsSlice.reducer;
