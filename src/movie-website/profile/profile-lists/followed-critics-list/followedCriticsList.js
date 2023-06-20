import React, {useEffect} from "react";
import "../../index.css";
import FollowedCriticsListItem from "./followedCriticsListItem";
import { useSelector } from "react-redux";

function FollowedCriticsList() {
    const {currentUser} = useSelector(state => state.user);
    const followedCritics = currentUser?.followedCritics;
    return (
      <>
        <ul className="wd-profile-list list-group">
          <li>
            <h3>Followed Critics</h3>
            <br />
          </li>
          {followedCritics.map((critic) => (
            <FollowedCriticsListItem critic={critic}/>
          ))}
        </ul>
      </>
    );
}

export default FollowedCriticsList;