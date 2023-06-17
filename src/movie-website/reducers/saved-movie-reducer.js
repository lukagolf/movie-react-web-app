import { createSlice } from "@reduxjs/toolkit";
import { findSavedMovieThunk,
    findAllSavedMoviesThunk,
    createSavedMovieThunk,
    deleteSavedMovieThunk } from "../services/saved-movies-thunks";

const initialState = {
  savedMovies: [],
  loading: false,
};

const saveMoviesSlice = createSlice({
  name: "savedMovies",
  initialState,
  extraReducers: {
    [createSavedMovieThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.savedMovies.unshift(payload);
    },
    [deleteSavedMovieThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.savedMovies = state.savedMovies.filter((m) => m.id !== payload);
    },
    [findAllSavedMoviesThunk.pending]: (state) => {
      state.loading = true;
      state.savedMovies = [];
    },
    [findAllSavedMoviesThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.savedMovies = payload;
    },
    [findAllSavedMoviesThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [findSavedMovieThunk.pending]: (state) => {
      state.loading = true;
      state.savedMovies = [];
    },
    [findSavedMovieThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.savedMovies = payload;
    },
    [findSavedMovieThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default saveMoviesSlice.reducer;
