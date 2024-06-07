import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/movieFetchingSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
