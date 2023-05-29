import React from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

// trash can with white border
function AdminBtn() {
    return (
      <button className="rounded-pill px-4 wd-purpleBackground wd-borderNone wd-whiteText">
        <h3>Admin Tools</h3>
      </button>
    );
}

export default AdminBtn;