import React from "react";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { deleteReviewThunk } from "../../services/reviews-thunks";
import { NavLink } from 'react-router-dom';
import DeleteBtn from "../../../ui-styling/buttons/icons/deleteBtn";

const ReviewItem = ({ review }) => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const deleteReviewHandler = (id) => {
        dispatch(deleteReviewThunk(id));
    }
    return (
      <li>
        {currentUser && currentUser.role === "ADMIN" && (
          <DeleteBtn
            fn={() => deleteReviewHandler(review._id)}
            className={"float-end"}
          />
        )}
        {currentUser ? (
          <NavLink to={`/profile/${review.username}`}>
            <h3>{review.username}</h3>
          </NavLink>
        ) : (
          <h3>{review.username}</h3>
        )}

        <h4>{review.title}</h4>
        <Rating name="read-only" value={review.rating} readOnly />
        <h5>Description: {review.description}</h5>
        <br />
        <hr />
      </li>
    );
}
export default ReviewItem;