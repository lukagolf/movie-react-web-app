import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function SearchBtn({className}) {
  return (
    <Link to="/search">
      <button
        className={`square rounded-circle wd-pinkBackground wd-circleBtn wd-whiteText ${className}`}>
        <FaSearch size={25} />
      </button>
    </Link>
  );
}

export default SearchBtn;
