import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";

// trash can with black background
function DeleteBtn() {
  return (
    <button className="square rounded-circle wd-circleBtn wd-blackBackground wd-whiteText">
      <AiFillDelete size={25} />
    </button>
  );
}

export default DeleteBtn;
