import React from "react";
import "../../index.css";
import { NavLink } from "react-router-dom";

function MovieBucketListItem({ movieInfo }) {
  return (
    <>
      <NavLink
        to={`/details/${movieInfo.id}`}
        state={{ movieInfo }}
        className="list-group-item list-group-item-action flex-column align-items-start wd-movie-list-item"
      >
        <div className="row p-3 wd-movie-list-row">
          <div className="col-3 wd-movie-list-image d-none d-lg-block">
            <img
              src={`http://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}`}
              className="float-left mr-3"
            />
          </div>
          <div className="col-9 wd-movie-list-info d-none d-lg-block">
            <h3>{movieInfo.title}</h3>
            <div>
              Rating: {movieInfo.vote_average}
              <br />
            </div>
          </div>
          <div className="d-lg-none col-12">
          <img
              src={`http://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}`}
              className="float-left mr-3 wd-md-screen-size-img"
            />
            <h3>{movieInfo.title}</h3>
            <div>
              Rating: {movieInfo.vote_average}
              <br />
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default MovieBucketListItem;