import React from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function WhiteTextBtn({text}) {
  return (
    <button
      className={`rounded-pill btn btn-outline-dark wd-whiteBackground wd-purpleText wd-purpleBorder px-3 wd-padding10 wd-marginLeft10`}
    >
      {text}
    </button>
  );
}

export default WhiteTextBtn;
