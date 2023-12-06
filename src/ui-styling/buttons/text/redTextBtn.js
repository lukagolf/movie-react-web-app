import React from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function RedTextBtn({text, fn, className}) {
  return (
    <button
    onClick={fn}
      className={`rounded-pill btn btn-outline-dark wd-redBackground wd-whiteext wd-redBorder px-3 wd-padding10 wd-marginLeft10 ${className}`}
    >
      {text}
    </button>
  );
}

export default RedTextBtn;
