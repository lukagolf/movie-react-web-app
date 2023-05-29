import React from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function SignInBtn({className}) {
  return (
    <button
      className={`rounded-pill btn btn-outline-dark wd-purpleText wd-purpleBorder px-3 wd-padding10 wd-marginLeft10 ${className}`}
    >
      Sign In
    </button>
  );
}

export default SignInBtn;
