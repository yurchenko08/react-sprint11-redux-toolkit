import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart_slice";
import uiSlice from "./ui_slice";

const store = configureStore({
  reducer: {
    uiSlice: uiSlice.reducer,
    cartSlice: cartSlice.reducer,
  },
});

export default store;
