import { createAsyncThunk } from "@reduxjs/toolkit";
import * as moviesService from "./movies-service";

export const findMoviesThunk = createAsyncThunk(
    "search/findMovies",
    async (searchParams) => await moviesService.findMovies(searchParams)
);

export const findTMDBMoviesThunk = createAsyncThunk(
    "search/findTMDBMovies",
    async (searchParams) => await moviesService.findTMDBMovies(searchParams)
);

export const getGenresThunk = createAsyncThunk(
    "search/getGenres",
    async () => await moviesService.getTMDBGenres()
)

export const addMovieThunk = createAsyncThunk(
    "search/addMovie",
    async(movie) => await moviesService.addMovie(movie)
)