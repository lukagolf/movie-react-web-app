import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function BookmarkBtn() {
  return (
    <button className="square rounded-circle wd-purpleBackground wd-circleBtn wd-whiteText">
      <BsFillBookmarkFill size={25} />
    </button>
  );
}

export default BookmarkBtn;
