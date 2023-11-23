import React, { useRef, useEffect } from "react";
import MyNav from "../../nav-components/nav";
import VideoBackground from "./video/video-background";
import HomeCarousel from "./carousel/carousel";
import HomeSearch from "./search/search";
import { useSelector, useDispatch } from "react-redux";
import { getAllMoviesThunk } from "../services/movie-thunks";

function Home() {
  const { currentUser } = useSelector((state) => state.user);
  const movies = useSelector((state) => state.movie.movieList)
  const topMoviesRef = useRef(null);
  
  console.log("MOVIES IS " + JSON.stringify(movies))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMoviesThunk())
  }, [dispatch])

  return (
    movies && movies.length !== 0 &&
    <div style={{ "overflow-x": "hidden" }}>
      {currentUser ? (
        <MyNav
          options={{
            homePage: true,
            search: true,
            signIn: false,
            profile: true,
            signOut: true,
            addMovie: false
          }}
        />
      ) : (
        <MyNav
          options={{
            homePage: true,
            search: true,
            signIn: true,
            profile: false,
            signOut: false,
            addMovie: true
          }}
        />
      )}

      <VideoBackground topMovieRef={topMoviesRef} /> {/* change this <<<< */}
      <HomeCarousel movies={movies} ref={topMoviesRef} /> {/* change this <<<< */}
      <HomeSearch />
    </div>
  );
}

export default Home;
