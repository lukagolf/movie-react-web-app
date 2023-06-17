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
        </div>
      </>
    );
}
export default HomeSearch;