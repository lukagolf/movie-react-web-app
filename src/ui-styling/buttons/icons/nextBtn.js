import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function NextBtn() {
  return (
    <>
      <button className="rounded wd-purpleBackground wd-whiteText wd-boxBtn float-end m-1">
        <MdOutlineArrowForwardIos size={25} />
      </button>
    </>
  );
}

export default NextBtn;
