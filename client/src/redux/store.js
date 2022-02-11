import { configureStore} from '@reduxjs/toolkit';
import { itemAPI } from './items/API/itemBaseAPI';

export const store = configureStore({
    reducer: {
        [itemAPI.reducerPath]: itemAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itemAPI.middleware)
})