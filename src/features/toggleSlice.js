import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggle: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,

  reducers: {
    toggleMenu: (state) => {
      state.isToggle = !state.isToggle;
    },
  },
});

export const { toggleMenu } = toggleSlice.actions;

export const selectToggle = (state) => state.toggle.isToggle;

export default toggleSlice.reducer;
