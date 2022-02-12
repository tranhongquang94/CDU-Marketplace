import { configureStore } from "@reduxjs/toolkit";
import { accountAPI } from "./account/accountBaseAPI";
import { itemAPI } from "./items/itemBaseAPI";
import userReducer from "./slice/userSlice";
import screenWidthReducer from "./slice/screenWidthSlice";
import dropDownReducer from "./slice/dropDownSlice";

export const store = configureStore({
  reducer: {
    [accountAPI.reducerPath]: accountAPI.reducer,
    [itemAPI.reducerPath]: itemAPI.reducer,
    user: userReducer,
    screenWidth: screenWidthReducer,
    dropdown: dropDownReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemAPI.middleware, accountAPI.middleware),
});
