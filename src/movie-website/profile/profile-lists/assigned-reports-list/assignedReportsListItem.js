import React, { useEffect, useState } from "react";
import "../../index.css"
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import formatDateTime from "../../../../util/formatDateTime";
import ResolveBtn from "../../../../ui-styling/buttons/icons/resolveBtn";
import WhiteTextBtn from "../../../../ui-styling/buttons/text/whiteTextBtn";
import { findAdminReportsThunk } from "../../../services/reports-thunks";
import { resolveReportThunk } from "../../../services/reports-thunks";
import { deleteReviewThunk } from "../../../services/reviews-thunks";
import { deleteUserThunk } from "../../../services/auth-thunks";

const AssignedReportsListItem = ({
    adminUsername, 
    rep_id,
    rev_id,
    category, 
    date_submitted, 
    submitter_id, 
    critic_id, 
    report_text, 
    movie_id, 
    review_text,
    is_resolved,
     }) => {
    
    const dispatch = useDispatch()
    const [removed, setRemoved] = useState(false)
    const handleDismiss = () => {
      dispatch(resolveReportThunk(rep_id))
      dispatch(findAdminReportsThunk(adminUsername))
    }

    const handleDeleteCritic = async () => {
      dispatch(deleteUserThunk(critic_id))
      setRemoved(true)
    }

    const handleDeleteReview = async () => {
      dispatch(deleteReviewThunk(rev_id))
      setRemoved(true)
    }

    if (removed) {
      return (
        <></>
      )
    }

    return (
      <>
         <div className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <Link to={{ pathname: `/details/${movie_id}` }} className="text-decoration-none text-black">
            <div className="row p-3 wd-movie-list-row">
                </div>
                {!is_resolved && <div className="text-danger fs-5 mt-0"> Needs Review</div>}
                {is_resolved && <div className="text-success fs-5 mt-0"> Resolved</div>}
                <h3><Link to={{ pathname: `/profile/${submitter_id}` }} className="text-decoration-none">@{submitter_id}</Link> Reported 
                <Link to={{ pathname: `/profile/${critic_id}` }} className="text-decoration-none"> @{critic_id}</Link></h3>
                <div className=" d-none d-lg-block">
                    <div className="fs-5"> Category: <span className="fw-bold">{category.toUpperCase()}</span> </div>
                    { report_text !== '' &&
                      <div> "{report_text}"</div>
                    }
                    <div>
                        <br />
                    </div>
                <div className="fs-5"> Review text: 
                  <div className="fw-bold">"{review_text.length > 100 ? `${review_text.slice(0, 100)}...` : review_text}"</div>
                </div>
                Posted: {formatDateTime(date_submitted)}
                </div>
                </Link>
            { !is_resolved &&
              <div className="d-flex flex-column">
                <br/>
                <WhiteTextBtn text="Dismiss" fn={handleDismiss}/>
                <br/>
                <WhiteTextBtn text="Delete Review" fn={handleDeleteReview}/>
                <br/>
                <WhiteTextBtn text="Delete Critic Account" fn={handleDeleteCritic}/>
              </div>
            }
            </div>
        </>
    )
};

export default AssignedReportsListItem;
