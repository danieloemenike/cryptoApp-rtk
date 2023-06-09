import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { cryptoNewsApi } from "../services/CryptoNewsApi";

const store = configureStore({
    reducer: {
        [ cryptoApi.reducerPath ]: cryptoApi.reducer,
        [ cryptoNewsApi.reducerPath ]: cryptoNewsApi.reducer,

        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([cryptoApi.middleware, cryptoNewsApi.middleware]),
});

setupListeners(store.dispatch)

export default store;