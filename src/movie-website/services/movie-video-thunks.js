import * as movieVideoService from "./movie-video-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const findMovieVideoThunk = createAsyncThunk(
  "newMovies/findMovieVideo",
  async (movieId) => await movieVideoService.findMovieVideo(movieId)
);
