import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    searchItem: [],
    itemQuantity: 1,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += newItem.quantity;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          image: newItem.image,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
          name: newItem.name,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.price * newItem.quantity;
      }

      let totalAmount = 0;
      for (let i = 0; i < state.items.length; i++) {
        totalAmount += state.items[i].totalPrice;
      }
      state.totalAmount = totalAmount;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount -= existingItem.price;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalAmount -= existingItem.price;
      }
    },
    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
      }
      state.totalAmount -= existingItem.totalPrice;
      state.totalQuantity -= existingItem.quantity;
    },
    search(state, action) {
      state.searchItem = action.payload;
    },
    initial(state) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      state.searchItem = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
