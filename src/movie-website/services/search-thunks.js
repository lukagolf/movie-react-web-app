import { createAsyncThunk } from "@reduxjs/toolkit";
import * as moviesService from "./movies-service";

export const findMoviesThunk = createAsyncThunk(
    "search/findMovies",
    async (searchParams) => await moviesService.findMovies(searchParams)
);
