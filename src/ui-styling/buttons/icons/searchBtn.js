import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function SearchBtn({className, fn, path='search'}) {
  return (
    <Link to={`/${path}`}>
      <button
        className={`square rounded-circle wd-pinkBackground wd-circleBtn wd-whiteText wd-marginLeft10 ${className}`}
        onClick={fn}
      >
        <FaSearch size={25} />
      </button>
    </Link>
  );
}

export default SearchBtn;
