import React, { useEffect, useState } from "react";
import CriticReviewListItem from "./criticReviewListItem";
import "../../index.css"
import { findCriticReviewsThunk } from "../../../services/reviews-thunks";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

function CriticReviewList() {
    const [criticReviews, setCriticReviews] = useState([]);
    const [movieReviewed, setMovieReviewed] = useState([]);

    let {username } = useParams();
    const dispatch = useDispatch();
    useEffect( () => {
        const loadCriticReviews = async () => {
            const {payload} = await dispatch(findCriticReviewsThunk(username));
            setCriticReviews(payload);
        }
        loadCriticReviews();
    });
    return (
        <div>
            <ul className="wd-profile-list list-group">
                <li >
                    <h3>Your Reviews</h3><br />
                </li>
                {
                    criticReviews.map(review =>
                        <CriticReviewListItem
                            key={review._id}
                            title={review.title}
                            rating={review.rating}
                            description={review.description}
                            movieId={review.movieId} />
                    )
                }
            </ul>
        </div>
    );

}
export default CriticReviewList;
