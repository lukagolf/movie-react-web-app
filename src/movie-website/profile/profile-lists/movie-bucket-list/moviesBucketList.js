import React, { useEffect } from "react";
import "../../index.css"
import MovieBucketListItem from "./moviesBucketListItem";
import { useSelector, useDispatch } from "react-redux";

function MoviesBucketList() {
  const { currentUser } = useSelector((state) => state.user);

  const savedMovies = currentUser?.savedMovies;
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

