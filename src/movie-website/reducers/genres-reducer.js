import { createSlice } from "@reduxjs/toolkit";
import { findAllGenresThunk } from "../services/genres-thunks";

const initialState = {
  genres: [],
  error: null
};

const genreSlice = createSlice({
    name: "genres",
    initialState,
    extraReducers: {
        [findAllGenresThunk.pending]: (state) => {
            state.genres = [];
        },
        [findAllGenresThunk.fulfilled]: (state, action) => {
            state.genres = action.payload;
        },
        [findAllGenresThunk.rejected]: (state, action) => {
            state.loading = true;
            state.error = action.error.message;
        }
    }
});

export default genreSlice.reducer;