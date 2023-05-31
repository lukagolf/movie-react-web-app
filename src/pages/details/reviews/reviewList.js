import React from "react";
import "./reviews.css"
import reviewArray from "./reviews.json"
import ReviewItem from "./reviewItem";

function ReviewList() {
    return (
        <div className="wd-review-list-div">
            <ul className="list-group wd-review-list">
                <li >
                    <h3>User Reviews</h3><br />
                </li>
                {
                    reviewArray.map(review =>
                        <ReviewItem
                            key={review._id}
                            review={review} />
                    )
                }
            </ul>
        </div>
    );

}
export default ReviewList;