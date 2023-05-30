import React from "react";
import { RiPencilFill } from "react-icons/ri";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function EditBtn({addWhiteBorder}) {
  return (
    <button
      className={`square rounded-circle ${
        addWhiteBorder ? "wd-whiteBorder wd-circleBorderBtn" : "wd-circleBtn"
      } wd-blackBackground wd-whiteText`}
    >
      <RiPencilFill size={25} />
    </button>
  );
}

export default EditBtn;
