import { configureStore } from "@reduxjs/toolkit";
// import { configureStore } from "@reduxjs/toolkit";: This imports the configureStore function from Redux Toolkit,
//which simplifies the store setup.

import authReducer from "./slices/authSlice.js";
//This imports the authReducer from the authSlice.js file.

import { apiSlice } from "./slices/apiSlice";
//This imports the apiSlice from the apiSlice.js file.

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

//const store = configureStore({...});: This creates the Redux store with the specified configuration.

//reducer: {...}: This object defines the reducers for the store.
//[apiSlice.reducerPath]: apiSlice.reducer: Adds the apiSlice reducer to the store using its path.
//auth: authReducer: Adds the authReducer to the store with the key auth.

// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware): Adds default middleware and appends the middleware from apiSlice.

//devTools: true: Enables Redux DevTools for easier debugging.

export default store;
