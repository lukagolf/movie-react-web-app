import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findCriticReviewsThunk } from "../../services/reviews-thunks";
import "./reviews.css"
import ReviewItem from "./reviewItem";

const ReviewList = () => {
    const { reviews, loading } = useSelector(state => state.reviews);
    const { currentUser } = useSelector((state) => state.user);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findCriticReviewsThunk(currentUser.username));
    }, [])
    return (
        <div className="wd-review-list-div">
            {/* <pre>{JSON.stringify(reviews, null, 2)}</pre> */}
            <ul className="list-group wd-review-list">
                {loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }

                <li >
                    <h3>Critic Reviews</h3><br />
                </li>
                {
                    reviews.map(review =>
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