import React from "react";
import MovieThumbnail from "../movieStockImg.jpg"
import "../../index.css"
import { useSelector, useDispatch } from "react-redux";
import { findAllSavedMoviesThunk } from "../../../services/saved-movies-thunks";

function MovieBucketListItem({ movieInfo }) {
  return (
    <a
      href={`/details/${movieInfo.id}`}
      className="list-group-item list-group-item-action flex-column align-items-start wd-movie-list-item"
    >
      <div className="row p-3 wd-movie-list-row">
        <div className="col-3 wd-movie-list-image">
          <img
            src={`http://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}`}
            className="float-left mr-3"
          />
        </div>
        <div className="col-9 wd-movie-list-info">
          <h3>{movieInfo.title}</h3>
          <div>
            Rating: {movieInfo.vote_average}
            <br />
          </div>
        </div>
      </div>
    </a>
  );
};

export default MovieBucketListItem;