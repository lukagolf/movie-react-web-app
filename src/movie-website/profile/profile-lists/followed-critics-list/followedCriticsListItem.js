import React from "react";
import "../../index.css";
import {Link} from "react-router-dom";
import {FaUserCircle} from "react-icons/fa";

function FollowedCriticsListItem({critic}) {
    return (
      <Link
        to={{ pathname: `/profile/${critic.username}` }}
        className="list-group-item list-group-item-action flex-column align-items-start wd-movie-list-item"
      >
        <div className="row p-3 wd-movie-list-row">
          <div className="col-3 wd-movie-list-image d-none d-lg-block">
            <FaUserCircle size={50} className="float-left mr-3" />
          </div>
          <div className="col-9 wd-movie-list-info d-none d-lg-block">
            <h5>@{critic.username}</h5>
            <h4>
              {critic.firstName} {critic.lastName}
            </h4>
          </div>
           <div className="d-lg-none col-12">
            <FaUserCircle size={50} className="float-left mr-3" />
            <h5>@{critic.username}</h5>
            <h4>
              {critic.firstName} {critic.lastName}
            </h4>
           </div>
        </div>
      </Link>
    );
};

export default FollowedCriticsListItem;