import axios from 'axios';

const MOVIES_API = 'https://api.themoviedb.org/3/search/movie';
const TOP_MOVIES_API = 'https://api.themoviedb.org/3/movie/popular';

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const MOVIES_URL = `${SERVER_API_URL}/movies`;

const api = axios.create({ withCredentials: true });

export const findTMDBMovies = async (searchParams) => {
  const { title } = searchParams;
  console.log("IN FIND TMDB MOVIES (SERVICE)")
  const response = await axios.get( MOVIES_API, {
    params: {
      api_key: 'ffdfb660a1488ae7f304368f73e0e7ec',
      query: title
    },
  })

  const movies = response.data;

  return movies;
}

export const findMovies = async ({ title }) => {
  console.log("SERVICE got " + title)
  const response = await api.get(`${MOVIES_URL}/search/${title}`)
  const movies = response.data;
  return movies;
}

export const findMovieByID = async (id) => {
  console.log("findMovieByID SERVICE got " + id)
  const response = await api.get(`${MOVIES_URL}/${id}`)
  const movie = response.data;
  return movie;
}

export const addMovie = async ({ title, release_date, overview, poster_path }) => {
  console.log("ADD MOVIE SERVICE: trying to add " + JSON.stringify({ title, release_date, overview, poster_path }) )
  const response = await api.post(`${MOVIES_URL}`, 
    { title, release_date, overview, poster_path });
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