import React, { useState, useEffect } from "react";
import "./index.css";
import NextBtn from "../../ui-styling/buttons/icons/nextBtn";
import { useSelector, useDispatch } from "react-redux";
import { findMoviesThunk } from "../services/search-thunks";


function SearchResult() {
  const { currentUser } = useSelector((state) => state.user);
  const [movies, setSearch] = useState(currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovies = async () => {
      const { payload } = await dispatch(findMoviesThunk());
      setSearch(payload);
    };
    getMovies();
  }, []);

  const getNextPage = () => {
    console.log("retrieves results for next page")
  }
  return (
    <>
      <div className="">
        <div className="container">
          <div className="wd-margin">
            <div className="list-group ">

              {movies && (
                <div className="list-group ">
                  {movies.map((movie) => {
                    return (
                      <a className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="row p-3">
                          <div className="col-md-5 col-lg-4">
                            <img
                              src={movie.image}
                              height="5px"
                              className="img-fluid float-left mr-3"
                            />
                          </div>
                          <div className="col-md-7 col-lg-8">
                            <h3>{movie.title}</h3>
                            <div className="wd-search-result-text d-none d-md-block">
                              {movie.year}
                              <br />
                              {movie.actors}
                              <br />
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
            <label className="float-end">100 results</label>
            <br />
            <NextBtn fn={getNextPage} />
            <br />
            <br />
            <label className="float-end">1 of 10 pages</label>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;