import React from "react";
import { BsPencil } from "react-icons/bs";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";
// redirects to previous parent page
function EditBtn({fn, additional_classes=''}) {
  return (
    <>
      <button 
        type="button"
        className={`btn wd-whiteBackground wd-greyText no-border ${additional_classes}`}
        onClick={fn} >
        <BsPencil size={25} />
      </button>
    </>
  );
}
export default EditBtn;