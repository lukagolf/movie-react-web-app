import React, { useEffect, useState } from "react";
import axios from "axios";
import "./details.css";
import "../../../ui-styling/index.css";
import SavedBtn from "../../../ui-styling/buttons/icons/savedBtn";
import { useParams } from "react-router-dom";
import { createSavedMovieThunk, deleteSavedMovieThunk, findAllSavedMoviesThunk } from "../../services/saved-movies-thunks";
import { useDispatch, useSelector } from "react-redux";

const MovieListItem = () => {
  const { currentUser } = useSelector(state => state.user);
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=ffdfb660a1488ae7f304368f73e0e7ec`
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Failed to fetch movie:', error.response);
        alert("This search is currently unavailable. Please try again later.")
      }
    };
    fetchMovie();
  }, [id]);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("CUR USER", currentUser);
    if (currentUser) {
      dispatch(findAllSavedMoviesThunk(currentUser._id));
    }
  }, [currentUser]);

  const handleSaveBtn = async () => {
    try {
      const userAndMovie = { userId: currentUser._id, ...movie };
      await dispatch(createSavedMovieThunk(userAndMovie)).unwrap();
      alert("Saving movie " + userAndMovie.title);
    } catch (e) {
      alert("Movie is already saved")
    }
  };

  // Check if movie exists
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="wd-video-details-background row">
        <div className="d-flex wd-details-row row">
          {currentUser && currentUser.roles[0] === "VIEWER" && (
            <div className="wd-left-col col-1">
              <SavedBtn fn={handleSaveBtn} />
            </div>
          )}
          <div className="col-6">
            <h1>{movie.original_title}</h1>
            <br />
            <h5>
              <b>Rating:</b> {movie.vote_average}
            </h5>
            <br />
            <h5>
              <b>Release date:</b> {movie.release_date}
            </h5>
            <br />
            <h5>
              <b>Summary:</b> {movie.overview}
            </h5>
          </div>
          <div className="wd-photo-col col-sm-4 col-md-5">
            <img
              src={
                "https://image.tmdb.org/t/p/w440_and_h660_face/" +
                movie.poster_path
              }
              alt="Movie Poster"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieListItem;