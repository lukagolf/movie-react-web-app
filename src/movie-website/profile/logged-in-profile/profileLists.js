import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CriticReviewList from "../profile-lists/critic-review-list/criticReviewList";
import MoviesBucketList from "../profile-lists/movie-bucket-list/moviesBucketList";
import FollowedCriticsList from "../profile-lists/followed-critics-list/followedCriticsList";
import AssignedReportsList from "../profile-lists/assigned-reports-list/assignedReportsList";
import BackBtn from "../../../ui-styling/buttons/icons/backBtn";
import "../index.css"
import { fetchProfileByUsernameThunk } from "../../services/auth-thunks";

function CurrentUserProfileLists() {
  const { currentUser } = useSelector((state) => state.user);
  let username = currentUser?.username;
  const [profileUser, setProfileUser] = useState([]);
  const dispatch = useDispatch()

  console.log("HELLO?")

  useEffect(() => {
    const loadProfileUser = async () => {
      const { payload } = await dispatch(fetchProfileByUsernameThunk(username));
      setProfileUser(payload);
    }
    loadProfileUser();
  }, [username])

  return (
    <div className="wd-review-div">
      <div className="wd-review-content">
        {currentUser && (
          <div className="wd-list">
            <div className="col-2"></div>
            <div className="col-8 wd-list-col">
              {profileUser && profileUser.roles && profileUser.roles.includes("Viewer")
                && (
                  <div>
                    <MoviesBucketList />
                  </div>
                )}
              {profileUser && profileUser.roles && profileUser.roles.includes("Critic") && (
                <div>
                  <CriticReviewList />
                </div>
              )}
            </div>
            <div className="col-2"></div>
            {currentUser.roles.includes("Admin") && (
                <div>
                  <AssignedReportsList />
                </div>
            )}
          </div>
        )}
      </div>
      <br />

      <BackBtn />
    </div>
  );
}

export default CurrentUserProfileLists;