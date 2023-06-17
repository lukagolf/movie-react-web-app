import { createSlice } from "@reduxjs/toolkit";
import { findMoviesThunk } from "../services/search-thunks";

const searchSlice = createSlice({
    name: "search",
    initialState: { data: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(findMoviesThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(findMoviesThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(findMoviesThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
export default searchSlice.reducer;

