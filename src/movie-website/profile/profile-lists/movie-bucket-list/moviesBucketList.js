import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../../index.css";
import MovieBucketListItem from "./moviesBucketListItem";
import { useSelector, useDispatch } from "react-redux";
import { findAllSavedMoviesThunk } from "../../../services/saved-movies-thunks";
import { fetchProfileByUsernameThunk } from "../../../services/auth-thunks";

function MoviesBucketList() {
  const { currentUser } = useSelector((state) => state.user);
  const { savedMovies } = useSelector((state) => state.savedMovies);
  const dispatch = useDispatch();
  const location = useLocation();
  let { urlUsername } = useParams();

  useEffect(() => {
    const loadMovies = async () => {
      if (location.pathname.endsWith("/profile") || location.pathname.endsWith(`/profile/${currentUser.username}`)) {
        dispatch(findAllSavedMoviesThunk(currentUser._id));
      } else if (urlUsername && urlUsername !== currentUser.username) {
        const { payload } = await dispatch(fetchProfileByUsernameThunk(urlUsername));
        dispatch(findAllSavedMoviesThunk(payload._id));
      }
    }
    loadMovies();
  }, [location.pathname, urlUsername, currentUser]);

  return (
    <div>
      <ul className="wd-profile-list list-group">
        <h3>Saved Movies List</h3>
        <br />
        {savedMovies.map((movie) => (
          <li>
            <MovieBucketListItem movieInfo={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesBucketList;
