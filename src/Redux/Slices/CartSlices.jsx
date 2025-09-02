
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    Cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.Cart.find(item => item.id === action.payload.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.Cart.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.Cart = state.Cart.filter(item => item.id !== action.payload.id);
    },
    incrementQty: (state, action) => {
      const existing = state.Cart.find(item => item.id === action.payload.id);
      if (existing) {
        existing.qty += 1;
      }
    },
    decrementQty: (state, action) => {
      const existing = state.Cart.find(item => item.id === action.payload.id);
      if (existing && existing.qty > 1) {
        existing.qty -= 1;
      }
    }, },});

export const {addToCart,removeFromCart,incrementQty,decrementQty}=cartSlice.actions;
export default cartSlice.reducer;