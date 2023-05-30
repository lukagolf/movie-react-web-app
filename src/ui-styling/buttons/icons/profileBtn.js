import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function ProfileBtn({ className }) {
  return (
    <Link to="/profile">
      <button
        className={`square rounded-circle wd-purpleBorder wd-circleBorderBtn wd-whiteBackground wd-purpleText wd-blackText wd-marginLeft10 ${className}`}
      >
        <BsFillPersonFill size={25} />
      </button>
    </Link>
  );
}

export default ProfileBtn;
