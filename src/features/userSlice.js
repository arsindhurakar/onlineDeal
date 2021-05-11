import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    userSignin: (state, action) => {
      state.user = action.payload;
    },
    userSignout: (state) => {
      state.user = null;
    },
  },
});

export const { userSignin, userSignout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
