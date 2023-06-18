import { createSlice } from "@reduxjs/toolkit";
import { findTopMoviesThunk } from "../services/top-movies-thunks";

const initialState = {
  topMovies: [],
  loading: false
};

const topMoviesSlice = createSlice({
    name: "topMovies",
    initialState,
    extraReducers: {
        [findTopMoviesThunk.pending]: (state) => {
            state.loading = true;
            state.topMovies = [];
        },
        [findTopMoviesThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.topMovies = payload.slice(0, 10);
        },
        [findTopMoviesThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }
    }
});

export default topMoviesSlice.reducer;