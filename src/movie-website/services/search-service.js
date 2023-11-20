import axios from 'axios';

const MOVIES_API = 'http://localhost:4000/api/search';



export const findMovies = async ({ title, actor, director, year, genre }) => {
    const response = await axios.get(MOVIES_API, { title, actor, director, year, genre });
    const movies = response.data;
    return movies;
}
