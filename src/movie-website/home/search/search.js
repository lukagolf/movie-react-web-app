import React, { useState } from "react";
import "./index.css";
import "../../../ui-styling/index.css"
import SearchBtn from "../../../ui-styling/buttons/icons/searchBtn";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { findMoviesThunk } from "../../services/search-thunks";

function HomeSearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const handleSearch = async () => {
    try {
      await dispatch(findMoviesThunk({ title }));
      navigate("/search");
    } catch (e) {
      alert(e);
    }
  };
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
              placeholder="Search movies"
              onChange={(event) => setTitle(event.target.value)}
            />
            <SearchBtn fn={handleSearch} />
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeSearch;