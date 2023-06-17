import axios from "axios";

const LATEST_MOVIES_API = "https://api.themoviedb.org/3/movie/now_playing";

export const findLatestMovies = async () => {
  const response = await axios.get(LATEST_MOVIES_API, {
    params: {
      api_key: "ffdfb660a1488ae7f304368f73e0e7ec",
    },
  });

  return (response.data.results);
};