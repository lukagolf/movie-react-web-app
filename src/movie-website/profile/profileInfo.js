import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import "./index.css"
import "../../ui-styling/index.css"
import TagBtn from "../../ui-styling/buttons/text/tagBtn";
import { FaUserCircle } from "react-icons/fa";
import { removeUserFromLocalStorage, setUser, storeUserInLocalStorage } from "../reducers/auth-reducer";
import { profileThunk, logoutThunk, updateUserThunk, fetchProfileByUsernameThunk }
  from "../services/auth-thunks";
import FollowBtn from "../../ui-styling/buttons/text/followBtn";
import BlackTextBtn from "../../ui-styling/buttons/text/blackTextBtn";

function ProfileInfo() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const [selectedRole, setSelectedRole] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [followedCritics, setFollowedCritics] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();
  const isCurrentUserProfile = currentUser?.username === username;
  const isAnotherViewer = currentUser?.roles.includes("VIEWER");

  useEffect(() => {
    if (currentUser && currentUser.roles.includes('VIEWER')) {
      setSelectedRole('VIEWER');
    } else if (currentUser && currentUser.roles.includes('CRITIC')) {
      setSelectedRole('CRITIC');
    } else if (currentUser) {
      setSelectedRole(currentUser.roles[0]);
    }
  }, [currentUser]);


  const handleRoleSelection = async (role) => {
    const updatedUser = { ...currentUser, roles: [role] };
    dispatch(setUser(updatedUser));
    dispatch(storeUserInLocalStorage(updatedUser));
    setSelectedRole(role);
  };

  const save = () => {
    console.log(profile);
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
      const { payload } = await dispatch(fetchProfileByUsernameThunk(username));
      let { roles } = payload;

      // Check if roles is not an array and convert it to an array
      if (typeof roles === 'string') {
        roles = [roles];
      }

      setProfile({ ...payload, roles });
      setIsLoading(false);
    };
    getProfile();
  }, [username, dispatch]);

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
                }
              />
            </>
          )}

          <br />
          <br />
          <span>
            {profile.roles.map((role, index) => (
              <TagBtn
                key={index}
                text={role}
                fn={() => handleRoleSelection(role)}
                selected={selectedRole === role}
              />
            ))}
            {!isCurrentUserProfile && isAnotherViewer && (
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

export default ProfileInfo;
