import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import "./index.css"
import "../../ui-styling/index.css"
import TagBtn from "../../ui-styling/buttons/icons/tagBtn";
import { FaUserCircle } from "react-icons/fa";

import { profileThunk, logoutThunk, updateUserThunk, fetchProfileByUsernameThunk, removeUserFromLocalStorage }
    from "../services/auth-thunks";

function ProfileInfo() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { username } = useParams(); // Get the username from the URL
    const isCurrentUserProfile = currentUser?.username === username; // Check if it's the currentUser's profile

    const save = () => {
        console.log(profile);
        dispatch(updateUserThunk(profile));
    };

    useEffect(() => {
        const getProfile = async () => {
            // Fetch the profile based on the username in the URL
            const { payload } = await dispatch(fetchProfileByUsernameThunk(username));
            setProfile(payload);
            setIsLoading(false);
        };
        getProfile();
    }, [username]); // Recompute when the username changes

    if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="wd-profile-info-background wd-purpleBackground row">
                <div className="wd-left-col col-2"></div>
                <div className="wd-details-col col-5">
                    <label className="pe-2">First Name</label>
                    <input
                        type="text"
                        value={profile.firstName}
                        readOnly={!isCurrentUserProfile}
                        onChange={e => setProfile({ ...profile, firstName: e.target.value })} // Added this line
                    />
                    <br />
                    <label className="pe-2 mb-2">Last Name</label>
                    <input
                        type="text"
                        value={profile.lastName}
                        readOnly={!isCurrentUserProfile}
                        onChange={e => setProfile({ ...profile, lastName: e.target.value })} // Added this line
                    />
                    <br />
                    {isCurrentUserProfile && (
                        <>
                            <button onClick={() => {
                                dispatch(logoutThunk());
                                localStorage.removeItem('user'); // Remove user from local storage
                                navigate("/login");
                            }}>Logout</button>
                            <button onClick={save}>Save</button>
                            <br /><br />
                        </>
                    )}
                    <TagBtn text={profile.role} />
                    <br /><br />
                    <label className="pe-2">Username</label>
                    <input type="text" value={profile.username} readOnly />
                    <br />
                </div>
                <div className="wd-photo-col col-4">
                    <FaUserCircle size={300} />
                </div>
                <div className="wd-right-col col-1"></div>
            </div>
        );
    }
}

export default ProfileInfo;
