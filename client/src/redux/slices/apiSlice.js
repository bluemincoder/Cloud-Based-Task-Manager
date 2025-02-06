import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//createApi: A function from RTK Query used to define an API slice.

//fetchBaseQuery: A utility function that creates a basic query function to be used with createApi.
//It handles making HTTP requests.

// const API_URI = "http://localhost:3000/api";
const API_URI = import.meta.env.VITE_APP_BASE_URL;

const baseQuery = fetchBaseQuery({ baseUrl: API_URI + "/api" });
//baseQuery: This is the base query function created using fetchBaseQuery.
//It sets up the base URL for all API requests. In this case, it appends "/api" to the API_URI.

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});

//It helps you define different API calls (endpoints) and automatically handles things like fetching data, caching, and updating your app's state.

//State Management: Once set up, apiSlice takes care of updating your app's state with the data it fetches, so you don't have to manually manage this data.

/*This code snippet sets up an API slice using Redux Toolkit's createApi function and the fetchBaseQuery utility. This is part of the Redux Toolkit Query (RTK Query) library, 
which simplifies data fetching and caching in Redux applications. */
