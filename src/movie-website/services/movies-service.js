import axios from 'axios';

const MOVIES_API = 'https://api.themoviedb.org/3/search/movie';
const TOP_MOVIES_API = 'https://api.themoviedb.org/3/movie/popular';

export const findMovies = async (searchParams) => {
  const { title } = searchParams;

  const response = await axios.get(MOVIES_API, {
    params: {
      api_key: 'ffdfb660a1488ae7f304368f73e0e7ec',
      query: title
    },
  })

  const movies = response.data;

  return movies;
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