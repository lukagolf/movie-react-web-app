import React from "react";
import SearchBtn from "../../ui-styling/buttons/icons/searchBtn";
import "../../ui-styling/index.css";
import "./index.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { findMoviesThunk } from "../services/search-thunks";

function SearchInput() {

  const [title, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
        await dispatch(findMoviesThunk({ title }));
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
        </div>
      </div>
    </>
  );
}

export default SearchInput;