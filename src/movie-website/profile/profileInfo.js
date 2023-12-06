import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import "./index.css"
import "../../ui-styling/index.css"
import TagBtn from "../../ui-styling/buttons/text/tagBtn";
import { FaUserCircle } from "react-icons/fa";
import { removeUserFromLocalStorage, setUser, storeUserInLocalStorage } from "../reducers/auth-reducer";
import { logoutThunk, updateUserThunk, fetchProfileByUsernameThunk }
  from "../services/auth-thunks";
import UserList from "./profile-lists/user-list/user-list";
import FollowBtn from "../../ui-styling/buttons/text/followBtn";
import BlackTextBtn from "../../ui-styling/buttons/text/blackTextBtn";
import { addFollowThunk, getFollowedCriticsThunk, unfollowThunk, getFollowersThunk } from "../services/follows-thunks";
import { current } from "@reduxjs/toolkit";

function ProfileInfo({ isCurUser }) {
  let { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const [isLoading, setIsLoading] = useState(true);
  const [followedCritics, setFollowedCritics] = useState([]);
  const [viewUsersList, setViewUsersList] = useState(false);
  const [usersList, setUsersList] = useState([])
  const [followingViewers, setFollowingViewers] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { username } = useParams();

  const [isFollowing, setIsFollowing] = useState(false)


  if (isCurUser) {
    username = currentUser?.username;
  }


  const isCurrentUserProfile = currentUser?.username === username;
  const isAnotherViewer = currentUser?.roles?.includes("Viewer");
  const isCriticProfile = profile?.roles?.includes("Critic");
  const isViewerProfile = profile?.roles?.includes("Viewer");


  const initSelectedRole = () => {
      console.log("INIT: CURRENT USER IS " + JSON.stringify(currentUser))
      return currentUser?.roles?.[0];
  };

  const [selectedRole, setSelectedRole] = useState(null);

  const [selectedButton, setSelectedButton] = useState('');

  if (currentUser && selectedButton === '') {
    setSelectedButton(initSelectedRole())
  }

  const handleRoleSelection = (role) => {
    const otherRoles = currentUser.roles.filter(r => r !== role);
    const updatedRoles = [role, ...otherRoles];
    // this part is sus
    const updatedUser = { ...currentUser, roles: updatedRoles };
    dispatch(setUser(updatedUser));
    dispatch(storeUserInLocalStorage(updatedUser));
    dispatch(updateUserThunk(updatedUser));
    setSelectedButton(role);
    setSelectedRole(role);  // set selectedRole state
    window.localStorage.setItem('selectedRole', role);  // set selectedRole in local storage here
  };

  const save = () => {
    console.log("PROFILE: " + JSON.stringify(profile))
      if (profile.firstname === '' || profile.lastname === '' || profile.email === '') {
        alert("Cannot save profile with empty fields")
        return
    }
    dispatch(updateUserThunk(profile));
    alert("Information saved")
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
    } catch (e) {
      alert(e);
    }
  };

  const handleFollow = async () => {
      if (followedCritics.includes(profile.username)) {
        alert("Already following this critic")
        return
      }
      dispatch(addFollowThunk({"viewer": currentUser.username, "critic": username}));
      setFollowedCritics([...followedCritics, profile.username])
      setFollowingViewers([...followingViewers, currentUser.username])
      alert("Followed this critic");
      setIsFollowing(true)
  };

  const handleUnFollow = async () => {
    dispatch(unfollowThunk({"viewer": currentUser.username, "critic": username}));
    setFollowedCritics(followedCritics.filter(critic => critic !== username));
    setFollowingViewers(followingViewers.filter(viewer => viewer !== currentUser.username))
    alert("Unfollowed this critic");
    console.log("Followed critics is now " + JSON.stringify(followedCritics))
    setIsFollowing(false)
  };

  
  useEffect(() => {
    if (followedCritics) {
      console.log("Checking to see if followedCritics includes " + username)
      setIsFollowing(followedCritics.includes(username))
    }
  }, [followedCritics])


  useEffect(() => {
    const getProfile = async () => {
      const { payload } = await dispatch(fetchProfileByUsernameThunk(username));
      console.log("PRF. INFO: Payload was " + payload)
      // Check if roles is not an array and convert it to an array
      if (payload) {
        let { roles } = payload;
        if (typeof roles === "string") {
          roles = [roles];
        }


        setProfile({ ...payload, roles });
        setIsLoading(false);

        // Get the selected role from the local storage
        const savedRole = window.localStorage.getItem("selectedRole");
        setSelectedRole(savedRole ? savedRole : initSelectedRole());
      }
    };
    getProfile();
  }, [username, dispatch, selectedRole]);
  console.log("PROFILEINFO: current user is " + currentUser)

  useEffect(() => {
    const getFollows = async () => {
      if (currentUser && isAnotherViewer) {
        const result = await dispatch(getFollowedCriticsThunk(currentUser.username))
        console.log("RESULT IS " + JSON.stringify(result))
        if (getFollowedCriticsThunk.fulfilled.match(result)) {
          const { payload } = result
          console.log("Payload is " + JSON.stringify(payload))
          if (payload) {
            setFollowedCritics(payload);
          } 
        }
      } 
    }
    getFollows()
  }, [currentUser, isAnotherViewer]);

  useEffect(() => {
    const getFollowers = async () => {
      if (profile && isCriticProfile) {
        const { payload } = await dispatch(getFollowersThunk(profile.username))
        // followingViewers = payload
        setFollowingViewers(payload)
        console.log("FollowingViewers is " + JSON.stringify(followingViewers))
      }
    }
    getFollowers()
  }, [profile])

  const handleViewFollowers = () => {
    setUsersList(followingViewers)
    console.log("users list is now " + JSON.stringify(usersList))
    toggleViewUsersList()
  }

  const handleViewFollowedCritics = () => {
    setUsersList(followedCritics)
    toggleViewUsersList()
  }

  const toggleViewUsersList = () => {
    setViewUsersList(!viewUsersList)
  } 

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (profile) {
    return (
      <div className="wd-profile-info-background row wd-padding">
        {
          viewUsersList &&
          <UserList visible={viewUsersList}
                    toggleVisible={toggleViewUsersList}
                    userList={usersList}
                    header={usersList === followedCritics ? 'Followed Critics' : 'Followers'}/>
        }
        <div className="wd-details-col col-sm-12 col-md-8 col-xl-7">
          <h2>
            {profile.firstname} {profile.lastname}
            {isCurrentUserProfile && " (You)"}
          </h2>
          <br/>
          <h4>@{profile.username}</h4>
          { isCriticProfile &&
           <div onClick={handleViewFollowers}
                className="text-underline-hover">
                {followingViewers.length} Follower{followingViewers.length === 1 ? '' : 's'}
            </div>
          }
          {
            isViewerProfile &&
            <div onClick={handleViewFollowedCritics}
                 className="text-underline-hover">
                  Following {followedCritics.length} Critic{followedCritics.length === 1 ? '' : 's'}
            </div>
          }
          {isCurrentUserProfile && (
            <>
              <br />
              <h5>{profile.email}</h5>
              <br />
              <label className="pe-2" for="firstNameEdit">
                First Name
              </label>
              <input
                id="firstNameEdit"
                type="text"
                value={profile.firstname}
                className="form-control w-75"
                onChange={(e) =>
                  setProfile({ ...profile, firstname: e.target.value })
                }
              />
              <br />
              <label className="pe-2 mb-2" for="lastNameEdit">
                Last Name
              </label>
              <input
                id="lastNameEdit"
                type="text"
                value={profile.lastname}
                className="form-control w-75"
                onChange={(e) =>
                  setProfile({ ...profile, lastname: e.target.value })
                }
              />
              <br />
              <label className="pe-2 mb-2" for="emailEdit">
                Email
              </label>
              <input
                id="emailEdit"
                type="text"
                value={profile.email}
                className="form-control w-75"
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
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
                fn={
                  isCurrentUserProfile ? () => handleRoleSelection(role) : null
                }
                selected={selectedButton === role}
              />
            ))}
            {currentUser && !isCurrentUserProfile && isCriticProfile && (
              <>
                {!isFollowing ? (
                  <FollowBtn
                    text={"FOLLOW"}
                    isFollowed={false}
                    fn={() => handleFollow()}
                  />
                ) : (
                  <FollowBtn
                    text={"UNFOLLOW"}
                    isFollowed={true}
                    fn={() => handleUnFollow()}
                  />
                )}
              </>
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
        <div className="wd-photo-col d-none d-md-block col-md-3 d-xl-none">
          <FaUserCircle size={200} />
        </div>
        <div className="wd-photo-col d-none d-xl-block col-xl-5">
          <FaUserCircle size={300} />
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
