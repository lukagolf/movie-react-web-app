import React from "react";
import { RiPencilFill } from "react-icons/ri";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";

// pencil with white border
function EditBtn2() {
  return (
    <button className="square rounded-circle wd-whiteBorder wd-circleBorderBtn wd-blackBackground wd-whiteText">
      <RiPencilFill size={25} />
    </button>
  );
}

export default EditBtn2;
