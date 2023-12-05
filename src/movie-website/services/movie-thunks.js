import { createAsyncThunk } from "@reduxjs/toolkit";
import * as moviesService from "./movies-service";
import { create } from "@mui/material/styles/createTransitions";

export const findMovieByIDThunk = createAsyncThunk(
  "movies/findMovieByID",
  async (id) => await moviesService.findMovieByID(id)
);

export const getAllMoviesThunk = createAsyncThunk(
  "movies/getAllMovies",
  async () => await moviesService.getAllMovies()
)

export const deleteMovieThunk = createAsyncThunk(
  "movies/deleteMovie",
  async (movie_id) => await moviesService.deleteMovie(movie_id)
)

export const updateMovieThunk = createAsyncThunk(
  "movies/updateMovie",
  async (movie) => await moviesService.updateMovie(movie)
)