import React from "react";
import ReviewList from "./reviewList";
import AddReview from "./addReview";
import BackBtn from "../../../ui-styling/buttons/icons/backBtn";
import "./reviews.css"

function ReviewSection() {
    return (
        <div className="wd-review-div">
            <div className="wd-review-content">

                <div className="col-2"></div>
                <div className="col-8">
                    <ReviewList />
                    <AddReview />
                </div>
                <div className="col-2"></div>
            </div>
            <BackBtn/>
        </div>
    );
}

export default ReviewSection;