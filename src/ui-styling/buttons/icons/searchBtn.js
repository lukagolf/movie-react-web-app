import React from "react";
import { FaSearch } from "react-icons/fa";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function SearchBtn({className}) {
  return (
    <button
      className={`square rounded-circle wd-pinkBackground wd-circleBtn wd-whiteText ${className}`}
    >
      <FaSearch size={25} />
    </button>
  );
}

export default SearchBtn;
