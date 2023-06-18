import * as topMoviesService from "./top-movies-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const findTopMoviesThunk = createAsyncThunk(
  "topMovies/findTopMovies",
  async () => await topMoviesService.findTopMovies()
);