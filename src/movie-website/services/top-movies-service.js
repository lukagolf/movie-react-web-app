import axios from "axios";

const TOP_MOVIES_API = "https://api.themoviedb.org/3/movie/top_rated";

export const findTopMovies = async () => {
  const response = await axios.get(TOP_MOVIES_API, {
    params: {
      api_key: "ffdfb660a1488ae7f304368f73e0e7ec",
    },
  });

  return (response.data.results);
};