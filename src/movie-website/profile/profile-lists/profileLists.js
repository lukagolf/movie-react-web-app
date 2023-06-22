import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileByUsernameThunk } from "../../services/auth-thunks";

import CriticReviewList from "./critic-review-list/criticReviewList";
import MoviesBucketList from "./movie-bucket-list/moviesBucketList";
import FollowedCriticsList from "./followed-critics-list/followedCriticsList";
import BackBtn from "../../../ui-styling/buttons/icons/backBtn";
import "../index.css"
import { useParams } from "react-router";

function ProfileLists() {
  const { currentUser } = useSelector((state) => state.user);
  let { username } = useParams();
  const [profileUser, setProfileUser] = useState([]);
  const dispatch = useDispatch();

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
          <div>
            <div className="col-2"></div>
            <div className="col-8 wd-list-col">
              {profileUser && profileUser.roles && profileUser.roles[0] == "VIEWER" && (
                <div>
                  <MoviesBucketList />
                  <FollowedCriticsList />
                </div>
              )}
              {profileUser && profileUser.roles && profileUser.roles[0] == "CRITIC" && (
                <div>
                  <CriticReviewList />
                </div>
              )}
            </div>
            <div className="col-2"></div>
          </div>
        )}
      </div>
      <br />
      <BackBtn />
    </div>
  );
}

export default ProfileLists;