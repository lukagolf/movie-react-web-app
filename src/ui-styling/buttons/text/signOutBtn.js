import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";

function SignOutBtn({ className }) {
  return (
    <button
      className={`rounded-pill btn btn-outline-dark wd-purpleText wd-purpleBorder px-3 wd-padding10 wd-marginLeft10 ${className}`}
    >
      Sign Out
    </button>
  );
}

export default SignOutBtn;
