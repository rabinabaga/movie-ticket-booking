import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    allMovies:[],
  movieDetail: null,
};

const getMovieDetailSlice = createSlice({
  name: "movieFetching",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieDetailAsync.pending, () => {
        console.log("get movie detail pending");
      })
      .addCase(getMovieDetailAsync.fulfilled, (state, action) => {
        state.movieDetail = action.payload;
      }).addCase(getAllMoviesAsync.pending,()=>{
        console.log("get all movies");
      }).addCase(getAllMoviesAsync.fulfilled,(state,action)=>{
        state.allMovies = action.payload
      })
  },
});

export const getMovieDetailAsync = createAsyncThunk(
  "movieFetching/getMovieDetailAsync",
  async (movieId) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apiKey=3c96e044&page=1&i=${movieId}`
    );
    console.log("get movie detail", response.data)
    return response.data;
  }
);
export const getAllMoviesAsync = createAsyncThunk(
  "movieFetching/getAllMoviesAsync",
  async () => {
    const response = await axios.get(
      "https://www.omdbapi.com/?apiKey=3c96e044&page=1&s=batman"
    );
    console.log("response data", response);
    return response.data.Search;
  }
);

export default getMovieDetailSlice.reducer;
