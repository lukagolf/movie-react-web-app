import React from "react";
import { FaSearch } from "react-icons/fa";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";

function SearchBtn() {
  return (
    <button className="square rounded-circle wd-pinkBackground wd-circleBtn wd-whiteText">
      <FaSearch size={25} className="" />
    </button>
  );
}

export default SearchBtn;
