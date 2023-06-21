import React from "react";
import { AiFillHome } from "react-icons/ai";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function HomeBtn() {
  return (
    <>
      <button className="square rounded-circle wd-purpleBorder wd-circleBorderBtn wd-whiteBackground wd-purpleText wd-blackText wd-marginLeft10">
        <AiFillHome size={25} />
      </button>
    </>
  );
}

export default HomeBtn;
