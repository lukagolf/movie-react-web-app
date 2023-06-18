import React from "react";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { deleteReviewThunk } from "../../services/reviews-thunks";
import { NavLink } from 'react-router-dom'; // Import NavLink
import DeleteBtn from "../../../ui-styling/buttons/icons/deleteBtn";

const ReviewItem = ({ review }) => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const deleteReviewHandler = (id) => {
        dispatch(deleteReviewThunk(id));
    }
    return (
        <li>
            {currentUser && currentUser.role === 'ADMIN' && (
                <DeleteBtn
                    fn={() => deleteReviewHandler(review._id)}
                    className={"float-end"}
                />
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