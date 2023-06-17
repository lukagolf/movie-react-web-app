import * as newMoviesService from "./new-movies-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const findNewMoviesThunk = createAsyncThunk(
  "newMovies/findLatestMovies",
  async () => await newMoviesService.findLatestMovies()
);