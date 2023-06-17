import axios from 'axios';

const MOVIES_API = 'https://api.themoviedb.org/3/movie/popular';

export const findTopMovies = async () => {
    const response = await axios.get(MOVIES_API, {
        params: {
            api_key: 'ffdfb660a1488ae7f304368f73e0e7ec',
        },
    })
    const movies = response.data;
    return movies;
}