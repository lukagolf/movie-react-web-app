import React from "react";
import { FaCheck } from "react-icons/fa";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function SubmitReviewBtn({className}) {
  return (
    <button
      className={`square rounded-circle wd-greenBackground wd-circleBtn wd-whiteText ${className}`}
    >
      <FaCheck size={25} />
    </button>
  );
}

export default SubmitReviewBtn;