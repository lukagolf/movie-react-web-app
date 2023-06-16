import { createAsyncThunk } from "@reduxjs/toolkit";
import * as moviesService from "./movies-service";


export const findMoviesThunk = createAsyncThunk(
    "search/findMovies",
    async (info) => await moviesService.findMovies(info.title)
);
