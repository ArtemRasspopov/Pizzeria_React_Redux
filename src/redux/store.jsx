import { configureStore } from "@reduxjs/toolkit";
import ItemsSlice from './slices/ItemsSlice'
import FilterSlice from './slices/FilterSlice'

export const store = configureStore({
  reducer: {
    ItemsSlice,
    FilterSlice
  },
});
