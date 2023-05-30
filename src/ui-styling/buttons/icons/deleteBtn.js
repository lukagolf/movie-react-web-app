import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function DeleteBtn({addWhiteBorder}) {
  return (
    <button
      className={`square rounded-circle ${
        addWhiteBorder ? "wd-whiteBorder wd-circleBorderBtn" : "wd-circleBtn"
      } wd-blackBackground wd-whiteText`}
    >
      <AiFillDelete size={25} />
    </button>
  );
}

export default DeleteBtn;
