import React from "react";
import { AiFillCaretUp, AiOutlineCaretUp } from "react-icons/ai";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function LikeBtn({ fn, liked }) {
  return (
    <>
      <button className={`square rounded-circle wd-purpleBorder wd-circleBorderBtn ${liked ? `wd-blackBackground` :  `wd-whiteBackground`} 
                          wd-purpleText wd-blackText wd-marginLeft10`}
              onClick={fn}>
        {liked ? <AiFillCaretUp size={20} /> : <AiOutlineCaretUp size={25}/>}
      </button>
    </>
  );
}

export default LikeBtn;
