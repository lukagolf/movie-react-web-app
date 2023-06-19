import React, { useEffect } from "react";
import "../../index.css"
import MovieBucketListItem from "./moviesBucketListItem";
import NextBtn from "../../../../ui-styling/buttons/icons/nextBtn";
import { useSelector, useDispatch } from "react-redux";
import { findAllSavedMoviesThunk } from "../../../services/saved-movies-thunks";

function MoviesBucketList() {
  const { currentUser } = useSelector((state) => state.user);
  const { savedMovies } = useSelector((state) => state.savedMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser) {
      dispatch(findAllSavedMoviesThunk(currentUser._id));
    }
  }, []);
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

