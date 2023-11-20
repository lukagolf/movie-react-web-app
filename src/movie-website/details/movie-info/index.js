import React, { useEffect, useState } from "react";
import axios from "axios";
import "./details.css";
import "../../../ui-styling/index.css";
import SavedBtn from "../../../ui-styling/buttons/icons/savedBtn";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteBtn from "../../../ui-styling/buttons/icons/deleteBtn";
import { updateUserThunk } from "../../services/auth-thunks";
import { findMovieByIDThunk } from "../../services/movie-thunks";

const MovieListItem = () => {
  const { currentUser } = useSelector(state => state.user);
  const { movie, loading } = useSelector(state => state.movie)
  const userSavedMovies = currentUser?.savedMovies;
  const { id } = useParams();
  // const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchMovie = async () => {
    //   try {
    //     const response = await axios.get(
    //       `https://api.themoviedb.org/3/movie/${id}?api_key=ffdfb660a1488ae7f304368f73e0e7ec`
    //     );
    //     setMovie(response.data);
    //   } catch (error) {
    //     console.error('Failed to fetch movie:', error.response);
    //     alert("This search is currently unavailable. Please try again later.")
    //   }
    // };
    // fetchMovie();
    
    dispatch(findMovieByIDThunk(id))
  }, [dispatch]);


  const handleSaveBtn = async () => {
    const newSavedMoviesList = userSavedMovies.concat(movie);
    const updatedViewer = {
      ...currentUser,
      savedMovies: newSavedMoviesList,
    };
    dispatch(updateUserThunk(updatedViewer));
    alert("Saving movie: " + movie.title);
  };

  const handleUnSaveBtn = async () => {
    const newSavedMoviesList = userSavedMovies.filter(
      (savedMovie) => savedMovie.id !== movie.id
    );
    const updatedViewer = {
      ...currentUser,
      savedMovies: newSavedMoviesList,
    };
    dispatch(updateUserThunk(updatedViewer));
    alert("Un-saving movie: " + movie.title);
  };

  const forceLogin = () => {
    alert("Create an account to proceed");
    navigate("/login");
  }

  // Check if movie exists
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="wd-video-details-background row">
        <div className="wd-details-row">
          <div className="row">
            <div className="wd-left-col col-sm-3 col-md-2 col-lg-1">
              {currentUser && currentUser.roles[0] === "VIEWER" && (
                <>
                  {userSavedMovies.filter(
                    (savedMovie) => savedMovie.id === movie.id
                  ).length === 0 ?  <SavedBtn fn={handleSaveBtn} /> : <DeleteBtn fn={handleUnSaveBtn} addWhiteBorder={true} />}

                </>
              )}
              {!currentUser && <SavedBtn fn={forceLogin} />}
            </div>

            <div className="col-sm-9 col-md-5">
              <h1>{movie.original_title}</h1>
              <br />
              {/* <h5>
                <b>Rating:</b> {movie.vote_average}
              </h5> */}
              <br />
              <h5>
                <b>Release date:</b> {movie.release_date}
              </h5>
              <br />
              <h5>
                <b>Summary:</b> {movie.summary}
              </h5>

              <div className="d-sm-block d-md-none wd-details-row">
                <img
                  className="w-75"
                  src={movie.photo_url}
                  alt="Movie Poster"
                />
              </div>
            </div>
            <div className="wd-photo-col d-none d-md-block col-md-5">
              <img
                className="w-75 mx-3"
                src={movie.photo_url}
                alt="Movie Poster"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieListItem;