import axios from "axios";

export const findMovieVideo = async (movieId) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
    {
      params: {
        api_key: "ffdfb660a1488ae7f304368f73e0e7ec",
      },
    }
  );
  console.log(response.data.results[0]);
  return response.data.results[0].key;
};
