import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {};

const screenWidthSlice = createSlice({
  name: "screenWidthSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setScreenWidth: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setScreenWidth } = screenWidthSlice.actions;
export default screenWidthSlice.reducer;
