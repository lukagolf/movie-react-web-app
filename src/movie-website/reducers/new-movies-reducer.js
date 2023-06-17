import { createSlice } from "@reduxjs/toolkit";
import { findNewMoviesThunk } from "../services/new-movies-thunks";

const initialState = {
  newMovies: [],
  firstMovie: "",
  loading: false
};

const newMoviesSlice = createSlice({
    name: "newMovies",
    initialState,
    extraReducers: {
        [findNewMoviesThunk.pending]: (state) => {
            state.loading = true;
            state.firstMovie = "";
            state.newMovies = [];
        },
        [findNewMoviesThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.newMovies = payload.slice(0, 10);
            state.firstMovie = state.newMovies[0];
        },
        [findNewMoviesThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }
    }
});

export default newMoviesSlice.reducer;