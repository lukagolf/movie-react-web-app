import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../../index.css";
import MovieBucketListItem from "./moviesBucketListItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfileByUsernameThunk } from "../../../services/auth-thunks";

function MoviesBucketList() {
  const { currentUser } = useSelector((state) => state.user);
  const [profileUser, setProfileUser] = useState(null);
  const savedMovies = profileUser?.savedMovies;
  const dispatch = useDispatch();
  const location = useLocation();
  let { urlUsername } = useParams();

  useEffect(() => {
    const loadProfileUser = async () => {
      if (location.pathname.endsWith("/profile") || location.pathname.endsWith(`/profile/${currentUser.username}`)) {
        setProfileUser(currentUser);
      } else if (urlUsername && urlUsername !== currentUser.username) {
        const { payload } = await dispatch(fetchProfileByUsernameThunk(urlUsername));
        setProfileUser(payload);
      }
    }
    loadProfileUser();
  }, [urlUsername, location.pathname, currentUser]);

  return (
    <div>
      <ul className="wd-profile-list list-group">
        <h3>Saved Movies List</h3>
        <br />
        {savedMovies?.map((movie) => (
          <li>
            <MovieBucketListItem movieInfo={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesBucketList;
