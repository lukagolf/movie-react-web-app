import { createSlice } from "@reduxjs/toolkit";
import { findTMDBMoviesThunk, addMovieThunk, getGenresThunk } from "../services/search-thunks";

const tmdbSlice = createSlice({
    name: "tmdb",
    initialState: { data: [], genres: [], status: 'idle', addedStatus: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(findTMDBMoviesThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(findTMDBMoviesThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(findTMDBMoviesThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                let movies = action.payload.results;
                state.data = movies.map(movie => {
                    let genres = state.genres
                        .filter(g => movie.genre_ids.includes(g.id))
                        .map(g => g.name)
                    return {...movie, genres}
                })
            })
            .addCase(addMovieThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addMovieThunk.fulfilled, (state, action) => {
                console.log('ADD MOVIE THUNK: IT WORKED')
                state.addedStatus = 'succeeded';
            })
            .addCase(addMovieThunk.rejected, (state, action) => {
                state.addedStatus = 'failed';
                state.error = action.error.message;
            })
            .addCase(getGenresThunk.fulfilled, (state, { payload }) => {
                state.genres = payload.data.genres
            })
    },
});
export default tmdbSlice.reducer;

