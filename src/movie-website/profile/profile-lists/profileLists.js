import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileByUsernameThunk } from "../../services/auth-thunks";
import AssignedReportsList from "./assigned-reports-list/assignedReportsList";
import CriticReviewList from "./critic-review-list/criticReviewList";
import MoviesBucketList from "./movie-bucket-list/moviesBucketList";
import BackBtn from "../../../ui-styling/buttons/icons/backBtn";
import "../index.css"
import { useParams } from "react-router";

function ProfileLists() {
  const { currentUser } = useSelector((state) => state.user);
  let { username } = useParams();
  const isCurUser = currentUser && currentUser.username === username

  if (isCurUser) {
    username = currentUser?.username;
  }
  const [profileUser, setProfileUser] = useState(null);
  const dispatch = useDispatch();

  console.log("HELLO?")

  useEffect(() => {
    const loadProfileUser = async () => {
      const { payload } = await dispatch(fetchProfileByUsernameThunk(username));
      setProfileUser(payload);
    }
    loadProfileUser();
  }, [username, dispatch]);

  return (
    <div className="wd-review-div">
      <div className="wd-review-content">
        {currentUser && (
          <div>
            <div className="col-2"></div>
            <div className="col-8 wd-list-col">
              {profileUser && profileUser.roles && profileUser.roles[0] === "Viewer" && (
                <div>
                  <MoviesBucketList />
                </div>
              )}
              {profileUser && profileUser.roles && profileUser.roles[0] ==="Critic" && (
                <div>
                  <CriticReviewList />
                </div>
              )}
            </div>
            <div className="col-2"></div>
            {isCurUser && currentUser.roles[0] === "Admin" && (
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

export default ProfileLists;
