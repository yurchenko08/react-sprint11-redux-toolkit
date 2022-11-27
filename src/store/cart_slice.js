import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart: (state, actions) => {
      const item = state.items.find((el) => el.id === actions.payload.id);
      if (typeof item === "undefined") {
        state.items.push({
          id: actions.payload.id,
          title: actions.payload.title,
          price: actions.payload.price,
          quantity: actions.payload.quantity,
          totalPrice: actions.payload.price * actions.payload.quantity,
        });
      } else {
        item.quantity++;
        item.totalPrice = item.price * item.quantity;
      }
      state.totalQuantity += 1;
    },

    incraseItemQtyFromCart: (state, actions) => {
      const item = state.items.find((el) => el.id === actions.payload.id);
      item.quantity++;
      item.totalPrice = item.price * item.quantity;
      state.totalQuantity += 1;
    },

    removeItemFromCart: (state, actions) => {
      const item = state.items.find((el) => el.id === actions.payload);
      item.quantity--;
      item.totalPrice = item.price * item.quantity;
      state.totalQuantity -= 1;
      if (item.quantity < 1) {
        state.items = state.items.filter((item) => item.id !== actions.payload);
      }
    },
  },
});

// these exports should stay the way they are
export const cartActions = cartSlice.actions;
export const addToCart = (state) => state.cartSlice;
export default cartSlice;
