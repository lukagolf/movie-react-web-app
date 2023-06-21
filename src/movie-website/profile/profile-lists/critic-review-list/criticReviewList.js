import React, { useEffect, useState } from "react";
import CriticReviewListItem from "./criticReviewListItem";
import "../../index.css"
import { findCriticReviewsThunk } from "../../../services/reviews-thunks";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

function CriticReviewList() {
    const { currentUser } = useSelector((state) => state.user);
    const [criticReviews, setCriticReviews] = useState([]);
    let {username} = useParams();
    const dispatch = useDispatch();

    let criticUsername = username ? username : currentUser?.username;

    console.log(criticUsername);

    useEffect(() => {
        const loadCriticReviews = async () => {
            try {
                const actionResult = await dispatch(findCriticReviewsThunk(criticUsername));
                if (actionResult.type.endsWith('fulfilled')) {
                    setCriticReviews(actionResult.payload);
                } else {
                    console.error('Failed to load critic reviews:', actionResult);
                }
            } catch (error) {
                console.error('Error loading critic reviews:', error);
            }
        }
        loadCriticReviews();
    }, [username, dispatch]);


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
