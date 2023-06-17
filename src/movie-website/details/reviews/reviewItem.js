import React from "react";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { deleteReviewThunk } from "../../services/reviews-thunks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'; // Import NavLink

const ReviewItem = ({ review }) => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);

    const deleteReviewHandler = (id) => {
        dispatch(deleteReviewThunk(id));
    }

    return (
        <li>
            {currentUser && currentUser.role === 'ADMIN' && (
                <button className="bi bi-x-lg float-end"
                    onClick={() => deleteReviewHandler(review._id)}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            )}
            <NavLink to={`/profile/${review.username}`}><h3>{review.username}</h3></NavLink> {/* Make the username a link to their profile */}
            <h4>{review.title}</h4>
            <Rating name="read-only" value={review.rating} readOnly />
            <p>Description: {review.description}</p><br />
            <hr />
        </li>
    )
}

export default ReviewItem;
