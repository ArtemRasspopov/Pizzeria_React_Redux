import { configureStore } from "@reduxjs/toolkit";
import ItemsSlice from "./slices/ItemsSlice";
import FilterSlice from "./slices/FilterSlice";
import CartSlice from "./slices/CartSlice";

export const store = configureStore({
  reducer: {
    ItemsSlice,
    FilterSlice,
    CartSlice,
  },
});
