import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";

// trash can with white border
function NextBtn() {
  return (
    <button className="rounded wd-purpleBackground wd-whiteText wd-boxBtn">
      <MdOutlineArrowForwardIos size={25} />
    </button>
  );
}

export default NextBtn;
