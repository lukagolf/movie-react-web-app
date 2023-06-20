import React from "react";
import "../../index.css";

function TagBtn({text}) {
  return (
    <button className="wd-whiteBackground wd-purpleText wd-purpleBorder rounded-pill p-2 m-1 wd-disable-hover">
      {text}
    </button>
  );
}

export default TagBtn;