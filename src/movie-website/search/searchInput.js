import React from "react";
import SearchBtn from "../../ui-styling/buttons/icons/searchBtn";
import "../../ui-styling/index.css";
import "./index.css"
import genreArray from "./genres.json";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { findMoviesThunk } from "../services/search-thunks";


function SearchInput() {

  const [title, setSearch] = useState("");
  const [actor, setActor] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState();
  const [genre, setGenre] = useState("");

  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
        await dispatch(findMoviesThunk({ title, actor, director, year, genre }));
    } catch (e) {
        alert(e);
    }
};

  return (
    <>
      <div className="container">
        <h2 className="text-center wd-pinkText">Search Movie</h2>
        <br />
        <div className="wd-margin">
          <div className="d-flex ">
            <input
              type="text"
              className="form-control"
              id="search-bar"
              placeholder="Search movies"
              onChange={(event) => setSearch(event.target.value)}
            />
            <SearchBtn fn={handleSearch} />
          </div>
          <br />
          <label>Filter by:</label>
          <div id="filterForm">
            <div className="form-group row">
              <label
                for="actorFilter"
                className="col-sm-3 col-md-2 col-form-label mt-2"
              >
                Actor
              </label>
              <div className="col-sm-9 col-md-10 mt-2">
                <input
                  id="actorFilter"
                  className="form-control w-75"
                  type="text"
                  onChange={(event) => setActor(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                for="directorFilter"
                className="col-sm-3 col-md-2 col-form-label mt-2"
              >
                Director
              </label>
              <div className="col-sm-9 col-md-10 mt-2">
                <input
                  id="directorFilter"
                  className="form-control w-75"
                  type="text"
                  onChange={(event) => setDirector(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                for="yearFilter"
                className="col-sm-3 col-md-2 col-form-label mt-2"
              >
                Year
              </label>
              <div className="col-sm-9 col-md-10 mt-2">
                <input
                  id="yearFilter"
                  className="form-control w-75"
                  type="number"
                  onChange={(event) => setYear(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                for="genreFilter"
                className="col-sm-3 col-md-2 col-form-label mt-2"
              >
                Genre
              </label>
              <div className="col-sm-9 col-md-10 mt-2">
                <select
                  className="form-select w-75"
                  id="genreFilter"
                  defaultValue={genre}
                  onChange={(event) => {
                    setGenre(event.target.value);
                  }}
                >
                  {genreArray.map((genre) => {
                    return <option value={genre.value}>{genre.label}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchInput;