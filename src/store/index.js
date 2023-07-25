import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  //redux toolkit property 用於組合多個reducer 作一個reducer
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer }, //ui 及 cart 變數指向uiSlice 及cartSlice的reducer 物件
});

export default store;
