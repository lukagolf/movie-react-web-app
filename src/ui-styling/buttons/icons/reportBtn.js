import React from "react";
import { BsFlag } from "react-icons/bs";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function ReportBtn({fn, additional_classes=''}) {
  return (
    <>
      <button 
        type="button"
        className={`btn wd-redBackground wd-greyText no-border ${additional_classes}`}
        onClick={fn} >
        <BsFlag size={25} />
      </button>
    </>
  );
}

export default ReportBtn;