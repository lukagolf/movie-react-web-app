import { createSlice } from "@reduxjs/toolkit";
import { findMovieByIDThunk, getAllMoviesThunk, updateMovieThunk } from "../services/movie-thunks";
import { addMovieThunk } from "../services/search-thunks";

const initialState = {
  movie: {},
  movieList: [],
  loading: false,
  status: ''
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    extraReducers: {
        [findMovieByIDThunk.pending]: (state) => {
            state.loading = true;
            state.movie = {};
        },
        [findMovieByIDThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.movie = payload;
        },
        [findMovieByIDThunk.rejected]: (state, action) => {
            state.loading = false;
            state.movie = {};
            state.error = action.error;
        },
        [getAllMoviesThunk.pending]: (state) => {
            state.loading = true;
        },
        [getAllMoviesThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.movieList = action.payload;
        },
        [getAllMoviesThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [addMovieThunk.pending]: (state)  => {
            state.loading = true;
            state.error = null
            state.status = 'pending'
        },
        [addMovieThunk.fulfilled]: (state, action) => {
            state.loading = false;
            console.log("setting succeeded!")
            state.status = 'succeeded'
            state.movieList = action.payload;
        },
        [addMovieThunk.rejected]: (state) => {
            state.loading = false;
            state.status = 'failed';
        },
        [updateMovieThunk.pending]: (state)  => {
            state.loading = true;
            state.error = null
            state.status = 'pending'
        },
        [updateMovieThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = 'succeeded'
            state.movie = action.payload.data;
        },
        [updateMovieThunk.rejected]: (state) => {
            state.loading = false;
            state.status = 'failed';
        },
    }
});

export default movieSlice.reducer;