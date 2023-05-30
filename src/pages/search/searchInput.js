import React from "react";
import SearchBtn from "../../ui-styling/buttons/icons/searchBtn";
import "../../ui-styling/index.css";
import "./index.css"

function SearchInput() {
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
            />
            <SearchBtn />
          </div>
          <br />
          <label>Filter by:</label>
          <form id="filterForm">
            <div className="form-group row">
              <label for="actorFilter" className="col-2 col-form-label mt-2">
                Actor
              </label>
              <div class="col-10 mt-2">
                <input
                  id="actorFilter"
                  className="form-control w-50"
                  type="text"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="directorFilter" className="col-2 col-form-label mt-2">
                Director
              </label>
              <div className="col-10 mt-2">
                <input
                  id="directorFilter"
                  className="form-control w-50"
                  type="text"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="yearFilter" className="col-2 col-form-label mt-2">
                Year
              </label>
              <div className="col-10 mt-2">
                <input
                  id="yearFilter"
                  className="form-control w-50"
                  type="number"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="genreFilter" className="col-2 col-form-label mt-2">
                Genre
              </label>
              <div className="col-10 mt-2">
                <select className="form-select w-50" id="genreFilter">
                  <option selected value="COMEDY">
                    Comedy
                  </option>
                  <option value="ROMANCE">Romance</option>
                  <option value="DRAMA">Drama</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SearchInput;