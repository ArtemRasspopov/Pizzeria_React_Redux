import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  quantity: 0,
  cartItems: [],
};

export const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addCartItems: (state, action) => {
      const findItem = state.cartItems.find(
        (obj) =>
          obj.title === action.payload.title &&
          obj.types === action.payload.types &&
          obj.sizes === action.payload.sizes
      );
      if (findItem) {
        findItem.count += 1;
        findItem.sumPrice += action.payload.price;
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
          sumPrice: action.payload.price,
        });
      }
      state.totalPrice += action.payload.price;
      state.quantity++;
    },
    clearCart: (state) => {
      state.totalPrice = 0;
      state.quantity = 0;
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.quantity -= action.payload.count;
      state.totalPrice -= action.payload.sumPrice;
      state.cartItems = state.cartItems.filter((object) => {
        return (
          object.title !== action.payload.title ||
          object.sizes !== action.payload.sizes ||
          object.types !== action.payload.types
        );
      });
    },
    minusItem: (state, action) => {
      const findItem = state.cartItems.find(
        (obj) =>
          obj.title === action.payload.title &&
          obj.types === action.payload.types &&
          obj.sizes === action.payload.sizes
      );
      console.log(findItem.price);
      state.totalPrice -= findItem.price;
      state.quantity--;
      findItem.sumPrice -= findItem.price;
      findItem.count--;
    },
  },
});
export const { addCartItems, clearCart, removeItem, minusItem } =
  CartSlice.actions;

export default CartSlice.reducer;
