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
import FollowBtn from "../../ui-styling/buttons/text/followBtn";
import BlackTextBtn from "../../ui-styling/buttons/text/blackTextBtn";
import { addFollowThunk, getFollowedCriticsThunk, unfollowThunk, getFollowersThunk } from "../services/follows-thunks";

function ProfileInfo({ isCurUser }) {
  let { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const [isLoading, setIsLoading] = useState(true);
  const [followedCritics, setFollowedCritics] = useState([]);
  let followingViewers = [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { username } = useParams();

  const [isFollowing, setIsFollowing] = useState(false)


  if (isCurUser) {
    username = currentUser?.username;
  }

  const isCurrentUserProfile = currentUser?.username === username;
  const isAnotherViewer = currentUser?.roles?.includes("Viewer");


  const initSelectedRole = () => {
    if (currentUser?.roles?.includes('Viewer')) {
      return 'Viewer';
    } else if (currentUser?.roles?.includes('Critic')) {
      return 'Critic';
    } else {
      return currentUser?.roles?.[0];
    }
  };

  const [selectedRole, setSelectedRole] = useState(null);

  const [selectedButton, setSelectedButton] = useState(initSelectedRole());

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
    } catch (e) {
      alert(e);
    }
  };

  const handleFollow = async () => {
    // try {
    //   if (isAnotherViewer) {
    //     console.log(
    //       followedCritics.filter((critic) => critic._id === profile._id)
    //     );
    //     if (
    //       followedCritics.filter((critic) => critic._id === profile._id)
    //         .length === 0
    //     ) {
      if (followedCritics.includes(profile.username)) {
        alert("Already following this critic")
        return
      }
      console.log("Going to add follow with user: " + currentUser.username)
      console.log("And critic: " + username)
      dispatch(addFollowThunk({"viewer": currentUser.username, "critic": username}));
      console.log("Going to shift " + profile.username)
      setFollowedCritics([...followedCritics, profile.username])
      console.log("followedCritics is now " + JSON.stringify(followedCritics))
      alert("Followed this critic");
      setIsFollowing(true)
      
    //     } else {
    //       throw new Error("Already following this critic");
    //     }
        
    //   }
        
    // } catch (e) {
    //   alert(e);
    // }
  };

  const handleUnFollow = async () => {
    // const newFollowingList = followedCritics.filter(
    //   (critic) => critic._id !== profile._id
    // );
    // const updatedViewer = {
    //   ...currentUser,
    //   followedCritics: newFollowingList,
    // };
    dispatch(unfollowThunk({"viewer": currentUser.username, "critic": username}));
    setFollowedCritics(followedCritics.filter(critic => critic !== username));
    alert("Unfollowed this critic");
    console.log("Followed critics is now " + JSON.stringify(followedCritics))
    setIsFollowing(false)
  };

  
  useEffect(() => {
    if (followedCritics) {
      console.log("FUCKING FOLLOWED CRITICS IS " + JSON.stringify(followedCritics))
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
      if (profile && profile.roles.includes('Critic')) {
        followingViewers = await dispatch(getFollowersThunk(profile.username))
      }
    }
    getFollowers()
  }, [profile])

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (profile) {
    return (
      <div className="wd-profile-info-background row wd-padding">
        <div className="wd-details-col col-sm-12 col-md-8 col-xl-7">
          <h2>
            {profile.firstname} {profile.lastname}
            {isCurrentUserProfile && " (You)"}
          </h2>
          <br />
          <h4>@{profile.username}</h4>
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
                  setProfile({ ...profile, frstname: e.target.value })
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
            {currentUser && !isCurrentUserProfile && profile?.roles.includes("Critic") && (
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
