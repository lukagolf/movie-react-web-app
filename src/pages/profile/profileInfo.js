import React from "react";
import "./index.css"
import "../../ui-styling/index.css"
import TagBtn from "../../ui-styling/buttons/icons/tagBtn";
import { FaUserCircle } from "react-icons/fa";

function ProfileInfo() {
    return (
        <div className="wd-profile-info-background wd-purpleBackground row">
            <div className="wd-left-col col-2">
            </div>
            <div className="wd-details-col col-5">
                <h3>Full name (you)</h3><br/>
                <TagBtn text="Viewer"/><br/><br/><br/>
                <h5>username</h5>
                <h5>password</h5>

            </div>
            <div className="wd-photo-col col-4">
            <FaUserCircle size={300} />
            </div>
            <div className="wd-right-col col-1"></div>

        </div>
    )

}

export default ProfileInfo;