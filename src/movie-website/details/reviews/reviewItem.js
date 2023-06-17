import React from "react";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { deleteReviewThunk } from "../../services/reviews-thunks";
import DeleteBtn from "../../../ui-styling/buttons/icons/deleteBtn";
import { NavLink } from 'react-router-dom'; // Import NavLink

const ReviewItem = ({ review }) => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);

    const deleteReviewHandler = (id) => {
        dispatch(deleteReviewThunk(id));
    }

    return (
        <li>
            <button className="bi bi-x-lg float-end" 
                    onClick={() => deleteReviewHandler(review._id)}><FontAwesomeIcon icon={faXmark} /></button>
            <a href="#"><h3>{review.criticId}</h3></a> 
            <h4>{review.title}</h4>
            <Rating name="read-only" value={review.rating} readOnly />
            <p>Description: {review.description}</p><br/>
            <hr />
        </li>
    )
}

export default ReviewItem;
