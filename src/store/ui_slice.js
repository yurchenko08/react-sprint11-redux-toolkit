import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "uiSlice",
  initialState: {
    cartIsVisible: false,
  },
  reducers: {
    toggle: (state) => {
      state.cartIsVisible = !state.cartIsVisible;

      // console.log(state.cartIsVisible);
    },
  },
});
// these exports should stay the way they are
export const uiActions = uiSlice.actions;
export const showCart = (state) => state.uiSlice.cartIsVisible;
export default uiSlice;
