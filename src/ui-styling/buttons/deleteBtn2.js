import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";

// trash can with white border
function DeleteBtn2() {
  return (
    <button className="square rounded-circle wd-whiteBorder wd-circleBorderBtn wd-blackBackground wd-whiteText">
      <AiFillDelete size={25} />
    </button>
  );
}

export default DeleteBtn2;
