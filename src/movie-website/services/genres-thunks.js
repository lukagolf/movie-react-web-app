import { create } from '@mui/material/styles/createTransitions'
import * as service from './genres-service'
import { createAsyncThunk } from "@reduxjs/toolkit"

export const findAllGenresThunk = createsAsyncThunk(
  'genres/findGenres',
   async () => await service.findAllGenres()
)