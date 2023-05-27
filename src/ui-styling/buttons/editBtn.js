import React from "react";
import { RiPencilFill } from "react-icons/ri";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";

// pencil with black background)
function EditBtn() {
  return (
    <button className="square rounded-circle wd-circleBtn wd-blackBackground wd-whiteText">
      <RiPencilFill size={25} />
    </button>
  );
}

export default EditBtn;
