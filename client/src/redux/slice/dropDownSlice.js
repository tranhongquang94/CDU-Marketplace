import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = true;

const dropDownSlice = createSlice({
  name: "dropDownSlice",
  initialState: INITIAL_STATE,
  reducers: {
    close: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { close } = dropDownSlice.actions;
export default dropDownSlice.reducer;
