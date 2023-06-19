import axios from "axios";

const SAVED_MOVIES_API = "http://localhost:4000/api/saved-movies";

export const createSavedMovie = async (userAndMovie) => {
  const response = await axios.post(SAVED_MOVIES_API, userAndMovie);
  console.log(response);
  return response.data;
};

export const findSavedMovie = async (mid) => {
  const response = await axios.get(`${SAVED_MOVIES_API}/${mid}`);
  return response.data;;
};

export const findAllSavedMovies = async (userId) => {
  const response = await axios.get(`${SAVED_MOVIES_API}/${userId}`);
  const reviews = response.data;
  return reviews;
};

export const deleteSavedMovie = async (mid) => {
  const response = await axios.delete(`${SAVED_MOVIES_API}/${mid}`);
  return response.data;
};