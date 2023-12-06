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
    const sortedReviews = [...reviews].sort((rev1, rev2) => 
        (rev2.likes.length - rev2.dislikes.length) -
        (rev1.likes.length - rev1.dislikes.length)
    )
    const dispatch = useDispatch();
    // might need to add dependency array
    useEffect(() => {
        // const loadMovieReviews = async () => {
            // const { payload } = await dispatch(findMovieReviewsThunk(id));
            // setMovieReviews(payload);
        // }
        // loadMovieReviews();
        console.log("REDISPATCHING")
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
                    reviews && sortedReviews.map((review) =>
                        <ReviewItem
                            key={review.rev_id}
                            review={review} />
                    )
                }
            </ul>
        </div>
    );
}
export default ReviewList;