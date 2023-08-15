import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   cart: [],
  cart: [
    {
      name: "macca",
      pizzaId: 4,
      quantity: 2,
      unitPrice: 12,
      totalPrice: 24,
    },
  ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload is newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload is pizzaId
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      state.cart.quantity++;
      state.cart.totalPrice = state.cart.quantity * state.cart.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      state.cart.quantity--;
      state.cart.totalPrice = state.cart.quantity * state.cart.unitPrice;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
