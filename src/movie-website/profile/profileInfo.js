import React, { useState, useEffect } from "react";
import "./index.css"
import "../../ui-styling/index.css"
import TagBtn from "../../ui-styling/buttons/icons/tagBtn";
import { FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
    from "../services/auth-thunks";

function ProfileInfo() {
/*     const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => { dispatch(updateUserThunk(profile)); };
    useEffect(() => {
        const { payload } = dispatch(profileThunk());
        setProfile(payload);
    }, []); */
    return (
        <div className="wd-profile-info-background wd-purpleBackground row">
            <div className="wd-left-col col-2">
            </div>
            <div className="wd-details-col col-5">
                <label>First Name</label>
                {/* <input type="text" value={profile.firstName}
                    onChange={(event) => {
                        const newProfile = {
                            ...profile, firstName: event.target.value,
                        };
                        setProfile(newProfile);
                    }} /> */} <br />
                <TagBtn text="Viewer" /><br /><br /><br />
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