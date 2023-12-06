import React from "react";
import "../../index.css";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { unsaveMovieThunk } from "../../../services/auth-thunks";
import { useLocation } from "react-router-dom";
import DeleteBtn from "../../../../ui-styling/buttons/icons/deleteBtn";
import { useState } from "react";

function MovieBucketListItem({ movieInfo }) {
  const { currentUser } = useSelector(state => state.user);
  const userSavedMovies = currentUser?.savedMovies;
  const location = useLocation();

  const dispatch = useDispatch();
  const handleUnSaveBtn = async (e) => {
    dispatch(unsaveMovieThunk({ username: currentUser.username, movie_id: movieInfo.movie_id }));
    e.preventDefault();
    alert("Un-saving movie: " + movieInfo.title);
  };
  return (
    <>
      <NavLink
        to={`/details/${movieInfo.movie_id}`}
        state={{ movieInfo }}
        className="list-group-item list-group-item-action flex-column align-items-start wd-movie-list-item"
      >
        {
          (location.pathname.endsWith("/profile") || location.pathname.endsWith(`/profile/${currentUser.username}`)) &&
          <DeleteBtn
            fn={(e) => handleUnSaveBtn(e)}
            className={"float-end"}
          />
        }
        <div className="row p-3 wd-movie-list-row">
          <div className="col-3 wd-movie-list-image d-none d-lg-block">
            <img
              src={movieInfo.photo_url}
              className="float-left mr-3"
            />
          </div>
          <div className="col-9 wd-movie-list-info d-none d-lg-block">
            <h3>{movieInfo.title}</h3>
          </div>
          <div className="d-lg-none col-12">
            <img
               src={movieInfo.photo_url}
              className="float-left mr-3 wd-md-screen-size-img"
            />
            <h3>{movieInfo.title}</h3>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default MovieBucketListItem;