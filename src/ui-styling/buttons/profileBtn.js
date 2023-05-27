import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";

function ProfileBtn() {
  return (
    <button className="square rounded-circle wd-purpleBorder wd-circleBorderBtn wd-whiteBackground wd-purpleText wd-blackText">
      <BsFillPersonFill size={25} />
    </button>
  );
}

export default ProfileBtn;
