import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";

// trash can with white border
function ExploreBtn() {
  return (
    <button className="rounded-pill px-4 wd-purpleBackground wd-borderNone wd-whiteText">
      <h3>Explore</h3>
    </button>
  );
}

export default ExploreBtn;