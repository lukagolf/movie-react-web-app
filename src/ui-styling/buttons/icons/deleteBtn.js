import React from "react";
import { RxCross2 } from "react-icons/rx";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function DeleteBtn({ addWhiteBorder, className, fn }) {
  return (
    <button
      onClick={fn}
      className={`square rounded-circle ${addWhiteBorder ? "wd-whiteBorder wd-circleBorderBtn" : "wd-circleBtn"
        } wd-blackBackground wd-whiteText ${className}`}
    >
      <RxCross2 size={25} />
    </button>
  );
}

export default DeleteBtn;


