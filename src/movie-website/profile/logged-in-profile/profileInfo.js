import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import "../index.css"
import "../../../ui-styling/index.css"
import TagBtn from "../../../ui-styling/buttons/text/tagBtn";
import { FaUserCircle } from "react-icons/fa";
import { removeUserFromLocalStorage, setUser, storeUserInLocalStorage } from "../../reducers/auth-reducer";
import { logoutThunk, updateUserThunk, fetchProfileByUsernameThunk }
    from "../../services/auth-thunks";
import FollowBtn from "../../../ui-styling/buttons/text/followBtn";
import BlackTextBtn from "../../../ui-styling/buttons/text/blackTextBtn";

function CurrentProfileInfo() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const [isLoading, setIsLoading] = useState(true);
    const [followedCritics, setFollowedCritics] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = currentUser?.username;
    const isCurrentUserProfile = currentUser && currentUser.username === username;
    const isAnotherViewer = currentUser && currentUser.roles ? currentUser.roles.includes("VIEWER") : false;

    const initSelectedRole = () => {
        if (currentUser?.roles?.includes('VIEWER')) {
            return 'VIEWER';
        } else if (currentUser?.roles?.includes('CRITIC')) {
            return 'CRITIC';
        } else {
            return currentUser?.roles?.[0];
        }
    };

    const [selectedRole, setSelectedRole] = useState(null);

    const [selectedButton, setSelectedButton] = useState(initSelectedRole());

    const handleRoleSelection = (role) => {
        const otherRoles = currentUser.roles.filter(r => r !== role);
        const updatedRoles = [role, ...otherRoles];
        const updatedUser = { ...currentUser, roles: updatedRoles };
        dispatch(setUser(updatedUser));
        dispatch(storeUserInLocalStorage(updatedUser));
        dispatch(updateUserThunk(updatedUser));
        setSelectedButton(role);
        setSelectedRole(role);  // set selectedRole state
        window.localStorage.setItem('selectedRole', role);  // set selectedRole in local storage here
    };

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

    const handleFollow = async () => {
        try {
            if (isAnotherViewer) {
                console.log(followedCritics.filter((critic) => critic._id === profile._id));
                if (followedCritics.filter(critic => critic._id === profile._id).length === 0) {
                    alert("Followed this critic");
                    const newFollowingList = followedCritics.concat(profile);
                    const updatedViewer = {
                        ...currentUser,
                        followedCritics: newFollowingList,
                    };
                    dispatch(updateUserThunk(updatedViewer));
                } else {
                    throw new Error("Already following this critic");
                }
            }
        } catch (e) {
            alert(e);
        }
    };

    useEffect(() => {
        const getProfile = async () => {
            const response = await dispatch(fetchProfileByUsernameThunk(username));
            console.log('response:', response); // Add this line

            let { payload } = response;

            // Check if payload exists
            if (payload) {
                let { roles } = payload;
                console.log("PROFILEINFO: got the payload, it's " + payload)
                // Check if roles is not an array and convert it to an array
                if (typeof roles === 'string') {
                    roles = [roles];
                }

                setProfile({ ...payload, roles });
                setIsLoading(false);

                // Get the selected role from the local storage
                const savedRole = window.localStorage.getItem('selectedRole');
                setSelectedRole(savedRole ? savedRole : initSelectedRole());
            }
        };
        getProfile();
    }, [username, dispatch, selectedRole]);
    console.log("PROFILE INFO: username is " + username)

    useEffect(() => {
        if (currentUser && isAnotherViewer) {
            setFollowedCritics(currentUser.followedCritics);
        }
    }, [currentUser, isAnotherViewer]);

    if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="wd-profile-info-background row wd-padding">
                <div className="wd-details-col col-6">
                    <h2>
                        {profile.firstName} {profile.lastName}
                        {isCurrentUserProfile && " (You)"}
                    </h2>
                    <br />
                    <h4>@{profile.username}</h4>
                    {isCurrentUserProfile && (
                        <>
                            <label className="pe-2" for="firstNameEdit">
                                First Name
                            </label>
                            <input
                                id="firstNameEdit"
                                type="text"
                                value={profile.firstName}
                                className="form-control w-75"
                                onChange={(e) =>
                                    setProfile({ ...profile, firstName: e.target.value })
                                }
                            />
                            <br />
                            <label className="pe-2 mb-2" for="lastNameEdit">
                                Last Name
                            </label>
                            <input
                                id="lastNameEdit"
                                type="text"
                                value={profile.lastName}
                                className="form-control w-75"
                                onChange={(e) =>
                                    setProfile({ ...profile, lastName: e.target.value })
                                }
                            />
                        </>
                    )}

                    <br />
                    <br />
                    <span>
                        {profile.roles && profile.roles.map((role, index) => (
                            <TagBtn
                                key={index}
                                text={role}
                                fn={isCurrentUserProfile ? () => handleRoleSelection(role) : null}
                                selected={selectedButton === role}
                            />
                        ))}
                        {currentUser && !isCurrentUserProfile && isAnotherViewer && (
                            <FollowBtn
                                text={"FOLLOW"}
                                followed={false}
                                fn={() => handleFollow()}
                            />
                        )}
                    </span>
                    <br />
                    <br />
                    {isCurrentUserProfile && (
                        <>
                            <BlackTextBtn text={"Sign Out"} fn={handleLogout} />
                            <BlackTextBtn text={"Save"} fn={save} />
                            <br />
                            <br />
                        </>
                    )}
                </div>
                <div className="wd-photo-col d-none d-md-block col-md-6">
                    <FaUserCircle size={300} />
                </div>
            </div>
        );
    }
}

export default CurrentProfileInfo;
