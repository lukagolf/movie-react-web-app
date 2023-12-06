import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;

export const getFollowedCritics = async (username) => {
  console.log("going to get followed critics")
  const response = await axios.get(`${USERS_URL}/follows/${username}`)
  return response.data
}

export const getFollowers = async (username) => {
  const response = await axios.get(`${USERS_URL}/followers/${username}`)
  return response.data
}

export const followCritic = async (viewer, critic) => {
  console.log("SERVICE: viewer is " + viewer + " and critic is " + critic)
  const response = await axios.post(`${USERS_URL}/follows/${viewer}/${critic}`)
  return response.data
}

export const unfollowCritic = async (viewer, critic) => {
  const response = await axios.delete(`${USERS_URL}/follows/${viewer}/${critic}`)
  return response.data
}