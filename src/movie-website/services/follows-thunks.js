import { create } from "@mui/material/styles/createTransitions"
import * as service from './follows-service'
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getFollowedCriticsThunk = createAsyncThunk(
  'follows/getFollowedCritics',
  async (username) => await service.getFollowedCritics(username)
)

export const getFollowersThunk = createAsyncThunk(
  'follows/getFollowers',
  async (username) => await service.getFollowers(username)
)

export const addFollowThunk = createAsyncThunk(
  'follows/addFollow',
  async ( {viewer, critic }) => await service.followCritic(viewer, critic)
)

export const unfollowThunk = createAsyncThunk(
  'follows/unFollow',
  async ({ viewer, critic }) => await service.unfollowCritic(viewer, critic)
)