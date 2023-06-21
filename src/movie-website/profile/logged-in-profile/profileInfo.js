import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { fetchProfileByUsernameThunk, logoutThunk, updateUserThunk } from "../../services/auth-thunks";
import { removeUserFromLocalStorage } from "../../reducers/auth-reducer";
import "../index.css"
import "../../../ui-styling/index.css"
import BlackTextBtn from "../../../ui-styling/buttons/text/blackTextBtn";
import { FaUserCircle } from "react-icons/fa";

function CurrentProfileInfo() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = currentUser?.username;

    useEffect(() => {
        const getProfile = async () => {
            const { payload } = await dispatch(fetchProfileByUsernameThunk(username));
            setProfile(payload);
            setIsLoading(false);
        }
        getProfile();
    }, [username])

    const save = () => {
        dispatch(updateUserThunk(profile));
    };

    const handleLogout = async () => {
        try {
            const actionResult = await dispatch(logoutThunk());
            if (logoutThunk.fulfilled.match(actionResult)) {
                dispatch(removeUserFromLocalStorage());
                navigate("/login");
            } else {
                throw new Error(actionResult.error.message);
            }
        }
        catch (e) {
            alert(e);
        }
    };
    if (isLoading) {
        return <div>Loading...</div>;
    }
    else {
        return (
            <div className="wd-profile-info-background row wd-padding">
                <div className="wd-details-col col-6">
                    <h2>
                        {profile.firstName} {profile.lastName} (You)
                    </h2>
                    <br />
                    <h4>@{profile.username}</h4>
                    <label className="pe-2">First Name</label>
                    <input
                        type="text"
                        value={profile.firstName}
                        onChange={(e) =>
                            setProfile({ ...profile, firstName: e.target.value })
                        }
                    />
                    <br />
                    <label className="pe-2 mb-2">Last Name</label>
                    <input
                        type="text"
                        value={profile.lastName}
                        onChange={(e) =>
                            setProfile({ ...profile, lastName: e.target.value })
                        } // Added this line
                    />
                    <br />
                    <br />
                    <BlackTextBtn text={"Sign Out"} fn={handleLogout} />
                    <BlackTextBtn text={"Save"} fn={save} />
                </div>
                <div className="wd-photo-col d-none d-md-block col-md-6">
                    <FaUserCircle size={300} />
                </div>
            </div>
        )
    }

}

export default CurrentProfileInfo;