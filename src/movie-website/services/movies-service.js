import axios from 'axios';

const MOVIES_API = 'https://api.themoviedb.org/3/search/movie';
const MOVIES_GENRES_API = 'https://api.themoviedb.org/3/genre/movie/list';
const TOP_MOVIES_API = 'https://api.themoviedb.org/3/movie/popular';

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const MOVIES_URL = `${SERVER_API_URL}/movies`;

const api = axios.create({ withCredentials: true });

export const findTMDBMovies = async (searchParams) => {
  const { title } = searchParams;
  const response = await axios.get( MOVIES_API, {
    params: {
      api_key: 'ffdfb660a1488ae7f304368f73e0e7ec',
      query: title
    },
  })

  const movies = response.data;

  return movies;
}

export const getTMDBGenres = async () => {
  return axios.get( MOVIES_GENRES_API, {
    params: {
      api_key: 'ffdfb660a1488ae7f304368f73e0e7ec'
    }
  })
}

export const findMovies = async ({ title }) => {
  const response = await api.get(`${MOVIES_URL}/search/${title}`)
  const movies = response.data;
  return movies;
}

export const findMovieByID = async (id) => {
  const response = await api.get(`${MOVIES_URL}/${id}`)
  const movie = response.data;
  return movie;
}

export const addMovie = async ({ title, release_date, overview, poster_path, genres }) => {
  const response = await api.post(`${MOVIES_URL}`, 
    { title, release_date, overview, poster_path, genres });
  const movie = response.data;
  return movie;
}

export const findTopMovies = async () => {
    const response = await axios.get(TOP_MOVIES_API, {
        params: {
            api_key: 'ffdfb660a1488ae7f304368f73e0e7ec',
        },
    })
    const movies = response.data;
    return movies;
}

export const getAllMovies = async () => {
  console.log("making the call")
  const response = await axios.get(MOVIES_URL)
  return response;
}