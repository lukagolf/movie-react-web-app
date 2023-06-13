import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function NextBtn({fn}) {
  return (
    <>
      <button className="rounded wd-purpleBackground wd-whiteText wd-boxBtn float-end m-1" onClick={fn}>
        <MdOutlineArrowForwardIos size={25} />
      </button>
    </>
  );
}

export default NextBtn;
