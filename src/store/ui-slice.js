import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    menuIsVisible: false,
    formVisible: false,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    menuToggle(state) {
      state.menuIsVisible = !state.menuIsVisible;
    },
    formToggle(state) {
      state.formVisible = !state.formVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
