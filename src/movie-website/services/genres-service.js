import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const GENRES_URL = `${SERVER_API_URL}/genres`;

export const findAllGenres = async () => {
  const response = await axios.get(`${GENRES_URL}`)
  return response.data
}