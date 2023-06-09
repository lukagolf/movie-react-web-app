import React from "react";
import "../../index.css";

function TagBtnNoHover({text}) {
  return (
    <span
    className="wd-whiteBackground wd-purpleText wd-purpleBorder rounded-pill p-2 m-1 ">{text}</span>
  );
}

export default TagBtnNoHover;