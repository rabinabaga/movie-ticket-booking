import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moviesSvc from "../pages/movies/movies.service";

export const getCurrentMovie = createAsyncThunk(
    "movie/getCurrentMovie", async(data) => {
        try{
                let currentMovie = await moviesSvc.getCurrentMovie(data);
                return currentMovie;
        }catch(exception){
            throw exception
        }
    }
)

const MovieSlicer = createSlice({
  name: "movie",
  initialState: {
    currentMovie:null,
    status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  },

  reducers: {
    // setCurrentMovie: (state, action) => {
    //   state.currentMovie = action.payload;
    // },
    hello: (state, action) => {
      //statema mathiko initial stateko value aauncha
      // state.loggedInUser = {
      //     name:"Rabina Baga"
      // }
      // console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentMovie.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCurrentMovie.fulfilled, (state, action) => {
         state.status = "succeeded";
          console.log("succeeded", action.payload);
     
        state.currentMovie = action.payload;
           console.log("state.currentMovie", state.currentMovie);
       
        
      });
    builder.addCase(getCurrentMovie.rejected, (state, action) => {
      state.currentMovie = null;
    });
  },
});


export const selectCurrentMovie = (state) => state.movie.currentMovie;
export const getMovieStatus = (state) =>{
   return state.movie.status;
}



export default MovieSlicer.reducer;
