import axios from 'axios';

const MOVIES_API = 'https://api.themoviedb.org/3/search/movie';

export const findMovies = async (title) => {
    const response = await axios.get(MOVIES_API, {
    params: {
        api_key: 'ffdfb660a1488ae7f304368f73e0e7ec',
        query: title
      },
    })
    const movies = response.data;
    // console.log("Service Movies", movies);
    return movies;
}
