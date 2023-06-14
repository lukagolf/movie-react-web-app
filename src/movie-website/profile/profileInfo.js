import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./index.css"
import "../../ui-styling/index.css"
import TagBtn from "../../ui-styling/buttons/icons/tagBtn";
import { FaUserCircle } from "react-icons/fa";

import { profileThunk, logoutThunk, updateUserThunk }
    from "../services/auth-thunks";

function ProfileInfo() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => { console.log(profile); dispatch(updateUserThunk(profile)); };
    useEffect(() => {
        const getProfile = async () => {
            const { payload } = await dispatch(profileThunk());
            setProfile(payload);
        };
        getProfile();
    }, []);

    return (
        <div className="wd-profile-info-background wd-purpleBackground row">
            <div className="wd-left-col col-2">
            </div>
            <div className="wd-details-col col-5">
                <label className="pe-2">First Name</label>
                <input type="text" value={profile.firstName}
                    onChange={(event) => {
                        const newProfile = {
                            ...profile, firstName: event.target.value,
                        };
                        setProfile(newProfile);
                    }} />
                <br />
                <label className="pe-2 mb-2">Last Name</label>
                <input type="text" value={profile.lastName}
                    onChange={(event) => {
                        const newProfile = {
                            ...profile, lastName: event.target.value,
                        };
                        setProfile(newProfile);
                    }} />
                <br />
                <button
                    onClick={() => {
                        dispatch(logoutThunk());
                        navigate("/login");
                    }}>                   Logout</button>
                <button onClick={save}>Save  </button>
                <br /><br />

                <TagBtn text={profile.role} />

                <br /><br />
                <label className="pe-2">username</label>

                <input type="text" value={profile.username} readOnly />
                <br />
            </div>
            <div className="wd-photo-col col-4">
                <FaUserCircle size={300} />
            </div>
            <div className="wd-right-col col-1"></div>

        </div>
    )

}

export default ProfileInfo;