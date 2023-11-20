import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findMovieReviewsThunk } from "../../services/reviews-thunks";
import "./reviews.css"
import ReviewItem from "./reviewItem";
import { useParams } from "react-router";
const ReviewList = () => {
    // const [movieReviews, setMovieReviews] = useState([]);
    const { reviews } = useSelector(state => state.reviews)
    let { id } = useParams();

    const dispatch = useDispatch();
    // might need to add dependency array
    useEffect(() => {
        // const loadMovieReviews = async () => {
            // const { payload } = await dispatch(findMovieReviewsThunk(id));
            // setMovieReviews(payload);
        // }
        // loadMovieReviews();
        dispatch(findMovieReviewsThunk(id));
    }, [dispatch, id])
    console.log("REVIEW LIST: MOVIE REVIEWS ARE " + JSON.stringify(reviews))

    return (
        <div className="wd-review-list-div">
            <ul className="list-group wd-review-list">
                <li >
                    <h3>Critic Reviews</h3><br />
                </li>
                {
                    reviews && reviews.map((review) =>
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