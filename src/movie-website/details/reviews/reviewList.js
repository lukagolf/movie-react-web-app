import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findReviewsThunk } from "../../services/reviews-thunks";
import "./reviews.css"
import reviewArray from "./reviews.json"
import ReviewItem from "./reviewItem";

const ReviewList = () => {
    const { reviews, loading } = useSelector(state => state.reviews)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewsThunk())
    }, [])
    return (
        <div className="wd-review-list-div">
            <ul className="list-group wd-review-list">
                {loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }

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