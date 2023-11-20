import React, { useEffect, useState } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { findMoviesThunk } from "../services/search-thunks";
import { NavLink, useSearchParams } from "react-router-dom";

function SearchResult() {
  const movies = useSelector((state) => state.search.data);
  const status = useSelector((state) => state.search.status);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findMoviesThunk({title: searchParams.get("q")}));
  }, [dispatch]);

  return (
    <>
      <div className="">
        <div className="container">
          <div className="wd-margin">
            <div className="list-group ">
              {status === 'loading' && <div>Loading...</div>}
              {status === 'succeeded' && movies && (
                <div className="list-group ">
                  {movies.map((movie) => (
                    <NavLink
                      to={`/details/${movie.movie_id}`}
                      state={{ movie }}
                      className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="row p-3">
                        <div className="col-md-5 col-lg-4">
                          <img
                            src={movie.photo_url}
                            height="5px"
                            className="img-fluid float-left mr-3"
                          />
                        </div>
                        <div className="col-md-7 col-lg-8">
                          <h3>{movie.title}</h3>
                          <div className="wd-search-result-text d-none d-md-block">
                            Release date: {movie.release_date}
                            <br />
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
