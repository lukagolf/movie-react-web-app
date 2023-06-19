import { createAsyncThunk } from "@reduxjs/toolkit";
import * as savedMoviesService from "../services/saved-movies-service";

export const findSavedMovieThunk = createAsyncThunk(
    "savedMovies/findSavedMovie",
    async () => {
        const response = await savedMoviesService.findSavedMovie();
        return response;
    }
);

export const findAllSavedMoviesThunk = createAsyncThunk(
    "savedMovies/findAllSavedMovies",
    async (userId) => {
        const response = await savedMoviesService.findAllSavedMovies(userId);
        return response;
    }
);

export const deleteSavedMovieThunk = createAsyncThunk(
    "savedMovies/deleteSavedMovie",
    async (mid) => {
        const response = await savedMoviesService.deleteSavedMovie(mid);
        return mid;
    }
);

export const createSavedMovieThunk = createAsyncThunk(
    "savedMovies/createSavedMovie",
    async (userAndMovie) => {
        const response = await savedMoviesService.createSavedMovie(userAndMovie);
        return response;
    }
);