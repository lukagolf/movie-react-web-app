import React from "react";
import "./index.css";
import "../../../ui-styling/index.css"
import SearchBtn from "../../../ui-styling/buttons/icons/searchBtn";

function HomeSearch() {
    return (
      <>
        <div className="wd-outer-div">
          <div className="wd-inner-div">
            <h3 className="mb-4 wd-purpleText">Search for movies</h3>
            <div className="d-flex justify-content-center">
              <input
                type="text"
                className="form-control"
                id="search-bar"
                placeholder="Search movies, actors, directors..."
              />
              <SearchBtn />
            </div>
          </div>
          <div className="wd-inner-div">
            <h3 className="mb-4 wd-purpleText">Add movie</h3>
            <div className="form-group row mb-2">
              <label for="cast" className="col-sm-1 col-form-label me-5">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="cast"
                  placeholder="Enter Name"
                />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label for="year" className="col-sm-1 col-form-label me-5">
                Year
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="year"
                  placeholder="Enter Year"
                />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label for="genre" className="col-sm-1 col-form-label me-5">
                Cast
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="genre"
                  placeholder="Enter Cast"
                />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label for="genre" className="col-sm-1 col-form-label me-5">
                Synopsis
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="genre"
                  placeholder="Enter Synopsis"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="genre" className="col-sm-1 col-form-label me-5">
                Rating
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="genre"
                  placeholder="Enter Rating: 0-5"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default HomeSearch;