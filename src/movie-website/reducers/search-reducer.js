import { createSlice } from "@reduxjs/toolkit";
import { findMoviesThunk } from "../services/search-thunks";

const initialState = {
    title: "",
    actor: "",
    director: "",
    year: "",
    genre: ""
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    extraReducers: {
        [findMoviesThunk.pending]:
            (state) => {
                state.loading = true
                state.movies = []
            },
        [findMoviesThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.movies = payload
            },
        [findMoviesThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
    },
});
export default searchSlice.reducer;

