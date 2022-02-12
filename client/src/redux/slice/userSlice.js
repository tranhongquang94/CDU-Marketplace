import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isLoggedIn: false,
  username: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: INITIAL_STATE,
  reducers: {
    userLogIn: (state, action) => {
      return {
        isLoggedIn: true,
        username: action.payload,
      };
    },
    userLogOut: (state, action) => {
      return {
        isLoggedIn: false,
        username: action.payload,
      };
    },
  },
});

export const { userLogIn, userLogOut } = userSlice.actions;
export default userSlice.reducer;
