import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

// trash can with white border
function BackBtn() {
  return (
    <button className="square rounded-circle wd-pinkBackground wd-circleBtn wd-whiteText">
      <MdOutlineArrowBackIos size={25} />
    </button>
  );
}

export default BackBtn;
