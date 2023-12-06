import React, { useRef, useEffect } from "react";
import MyNav from "../../nav-components/nav";
import GenreCarousel from "./carousel/carousel";
import { useSelector, useDispatch } from "react-redux";
import { getAllMoviesThunk } from "../services/movie-thunks";
import { findAllGenresThunk } from "../services/genres-thunks";
import { current } from "@reduxjs/toolkit";

function Home() {
  const { currentUser } = useSelector((state) => state.user);
  const movies = useSelector((state) => state.movie.movieList.data);
  const { genres } = useSelector((state) => state.genres)
  const moviesRef = useRef(null);
  const adminAdd = currentUser?.roles[0] === 'Admin';

  console.log("GENRES IS " + JSON.stringify(genres))
  
  console.log("MOVIES IS " + JSON.stringify(movies))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMoviesThunk())
    dispatch(findAllGenresThunk())
  }, [dispatch])

  return (
    movies && movies.length !== 0 &&
    <div style={{ "overflow-x": "hidden" }}>
      {currentUser ? (
        <>
          <MyNav
            options={{
              homePage: true,
              search: true,
              signIn: false,
              profile: true,
              signOut: true,
              adminAdd,
              addMovie: false
            }}
          />
          <h1 className="text-center mt-5 mb-5"> Welcome, {currentUser.firstname} ({currentUser.roles[0]})</h1>
        </>
      ) : (
        <>
          <MyNav
            options={{
              homePage: true,
              search: true,
              signIn: true,
              profile: false,
              signOut: false,
              addMovie: false
            }}
          />
           <h1 className="text-center mt-5 mb-5"> Welcome! </h1>
        </>
      )}
      <h3 className="text-center"> Explore Movies </h3>
      { genres.map(g => 
        <GenreCarousel genre={g} movies={movies} ref={moviesRef} /> 
      )}
    </div>
  );
}

export default Home;
