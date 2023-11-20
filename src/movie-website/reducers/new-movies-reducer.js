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
            const filterMovies = payload.filter((movie) =>
              !movie.genre_ids.includes(27)
            );
            state.newMovies = filterMovies.slice(0, 10);
            state.firstMovie = state.newMovies[0];
            console.log("MOVIES REDUCER" + JSON.stringify(state.firstMovie))
        },
        [findNewMoviesThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }
    }
});

export default newMoviesSlice.reducer;