import React from "react";
import CriticReviewListItem from "./criticReviewListItem";
import "../../index.css"
import NextBtn from "../../../../ui-styling/buttons/icons/nextBtn";

function CriticReviewList() {
    return (
        <div>
            <ul className="wd-profile-list list-group">
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
                <CriticReviewListItem />
            </ul>
            <div className="wd-list-results">
                <label className="float-end">100 results</label>
                <br />
                <NextBtn />
                <br />
                <br />
                <label className="float-end">1 of 10 pages</label>
            </div>

        </div>
    );

}
export default CriticReviewList;