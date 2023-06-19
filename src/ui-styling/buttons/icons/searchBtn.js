import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function SearchBtn({className, fn}) {
  return (
    <Link to="/search">
      <button
        className={`square rounded-circle wd-pinkBackground wd-circleBtn wd-whiteText ${className}`}
        onClick={fn}
        >
        <FaSearch size={25} />
      </button>
    </Link>
  );
}

export default SearchBtn;
