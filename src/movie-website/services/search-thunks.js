import { createAsyncThunk } from "@reduxjs/toolkit";
import * as searchService from "./search-service";


export const findMoviesThunk = createAsyncThunk(
    "search/findMovies",
    async (info) => await searchService.findMovies(info)
);
