import React from "react";
import { BsCheck } from "react-icons/bs";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

// redirects to previous parent page
function ResolveBtn({fn, additional_classes=''}) {
  return (
    <>
      <button 
        type="button"
        className={`btn wd-greenText no-border ${additional_classes}`}
        onClick={fn} >
        <BsCheck size={25} />
      </button>
    </>
  );
}

export default ResolveBtn;