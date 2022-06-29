import { configureStore } from "@reduxjs/toolkit";
import ItemsSlice from "./slices/ItemsSlice";
import FilterSlice from "./slices/FilterSlice";
import CartSlice from "./slices/CartSlice";
import SerchSlice from "./slices/SerchSlice";

export const store = configureStore({
  reducer: {
    ItemsSlice,
    FilterSlice,
    CartSlice,
    SerchSlice,
  },
});
