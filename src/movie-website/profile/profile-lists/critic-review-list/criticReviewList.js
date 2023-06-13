import React from "react";
import CriticReviewListItem from "./criticReviewListItem";

function CriticReviewList() {
    return (
        <div>
            <ul className="wd-profile-list">
                <li >
                    <h3>Your Reviews</h3><br />
                </li>
                {/* {
                    reviewArray.map(review =>
                        <ReviewItem
                            key={review._id}
                            review={review} />
                    )
                } */}
                <CriticReviewListItem/>
                
            </ul>
        </div>
    );

}
export default CriticReviewList;