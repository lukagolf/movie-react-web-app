import React, { useEffect } from "react";
import "../movie-website/search/index.css";
import AddToDBButton from "./add-to-db-btn"
import { useSelector, useDispatch } from "react-redux";
import { findTMDBMoviesThunk } from "../movie-website/services/search-thunks";
import { NavLink, useSearchParams } from "react-router-dom";

function SearchResult() {
  const movies = useSelector((state) => state.tmdb.data);
  console.log("MOVIES IS " +JSON.stringify(movies))
  const status = useSelector((state) => state.search.status);
  const genres = useSelector((state) => state.tmdb.genres);
  // console.log("GENRES IS " + JSON.stringify(genres))
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findTMDBMoviesThunk({title: searchParams.get("q")}));
  }, [dispatch, searchParams]);

  return (
    <>
      <div className="">
        <div className="container">
          <div className="wd-margin">
            <div className="list-group ">
              {status === 'loading' && <div>Loading...</div>}
              {movies && (
                <div className="list-group ">
                  {console.log("GOING TO MAP") }
                  {movies.map((movie) => (
                    // If you want to use NavLink, uncomment and properly close it
                    // <NavLink
                    //   to={`/details/${movie.id}`}
                    //   state={{ movie }}
                    //   className="list-group-item list-group-item-action flex-column align-items-start"
                    // >
                    <div className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="row p-3">
                        <div className="col-md-5 col-lg-4">
                          <img
                            src={"https://image.tmdb.org/t/p/w440_and_h660_face/" + movie.poster_path}
                            height="5px"
                            className="img-fluid float-left mr-3"
                          />
                        </div>
                        <div className="col-md-7 col-lg-8">
                          <h3>{movie.title}</h3>
                          <div className="wd-search-result-text d-none d-md-block">
                            Release date: {movie.release_date}
                            <div>
                            Genres: {movie.genres.map((genre, index, array) =>
                              <span key={index}>{genre}{index !== array.length - 1 && `, `}</span>
                              )}
                            </div>
                            <AddToDBButton movie={movie}/>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div> 
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
