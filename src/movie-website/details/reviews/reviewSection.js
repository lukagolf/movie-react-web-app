import React from "react";
import { useSelector } from "react-redux";
import ReviewList from "./reviewList";
import AddReview from "./addReview";
import BackBtn from "../../../ui-styling/buttons/icons/backBtn";
import "./reviews.css"

function ReviewSection() {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <div className="wd-review-div">
            <div className="wd-review-content">

                <div className="col-2"></div>
                <div className="col-8">
                    <ReviewList />
                    <br/>
                    {currentUser && currentUser.roles[0] === 'Critic' && <AddReview />}
                </div>
                <div className="col-2"></div>
            </div>
            <BackBtn />
        </div>
    );
}

export default ReviewSection;