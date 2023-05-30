import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function BackBtn() {
  return (
    <Link to="/home">
      <button className="square rounded-circle wd-pinkBackground wd-circleBtn wd-whiteText">
        <MdOutlineArrowBackIos size={25} />
      </button>
    </Link>
  );
}

export default BackBtn;
