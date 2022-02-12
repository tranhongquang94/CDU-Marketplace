import { configureStore } from "@reduxjs/toolkit";
import { accountAPI } from "./account/accountBaseAPI";
import { itemAPI } from "./items/API/itemBaseAPI";

export const store = configureStore({
  reducer: {
    [accountAPI.reducerPath]: accountAPI.reducer,
    [itemAPI.reducerPath]: itemAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemAPI.middleware, accountAPI.middleware),
});
