import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allMovies: [],
  movieDetail: null,
};

const getMovieDetailSlice = createSlice({
  name: "movieFetching",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieDetailAsync.pending, () => {
        console.log("get movie detail pending");
      })
      .addCase(getMovieDetailAsync.fulfilled, (state, action) => {
        state.movieDetail = action.payload;
      })
      .addCase(getAllMoviesAsync.pending, () => {
        console.log("get all movies");
      })
      .addCase(getAllMoviesAsync.fulfilled, (state, action) => {
        state.allMovies = action.payload;
      });
  },
});

export const getMovieDetailAsync = createAsyncThunk(
  "movieFetching/getMovieDetailAsync",
  async (movieId) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apiKey=3c96e044&page=1&i=${movieId}`
    );
     function generateRandomPrice() {
       // Generate a random price between 400 rupees and 200 rupees for demonstration purposes
       return (Math.random() * (400 - 200) + 5).toFixed(2);
     }
    response.data.price = generateRandomPrice();
    console.log("get movie detail with price", response.data);
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
    function generateRandomPrice() {
      // Generate a random price between 400 rupees and 200 rupees for demonstration purposes
      return (Math.random() * (400 - 200) + 5).toFixed(2);
    }
    response.data.Search.forEach((movie) => {
      movie.price = generateRandomPrice();
    });
    console.log("response.data.serac.price", response.data.Search[0].price);
    return response.data.Search;
  }
);

export default getMovieDetailSlice.reducer;
