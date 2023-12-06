import React from "react";
import { AiFillCaretDown, AiOutlineCaretDown } from "react-icons/ai";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function DislikeBtn({ fn, disliked }) {
  return (
    <>
      <button className={`square rounded-circle wd-purpleBorder wd-circleBorderBtn ${disliked ? `wd-blackBackground` :  `wd-whiteBackground`} 
                          wd-purpleText wd-blackText wd-marginLeft10`}
              onClick={fn}>
        {disliked ? <AiFillCaretDown size={25} /> : <AiOutlineCaretDown size={25}/>}
      </button>
    </>
  );
}

export default DislikeBtn;
