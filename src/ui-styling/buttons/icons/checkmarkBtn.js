import React from "react";
import { FaCheck } from "react-icons/fa";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

// trash can with white border
function CheckmarkBtn() {
  return (
    <button className="square rounded-circle wd-greenBackground wd-circleBtn wd-whiteText">
      <FaCheck size={25} />
    </button>
  );
}

export default CheckmarkBtn;
