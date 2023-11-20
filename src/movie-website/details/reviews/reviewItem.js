import React from "react";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { deleteReviewThunk } from "../../services/reviews-thunks";
import { NavLink } from 'react-router-dom';
import DeleteBtn from "../../../ui-styling/buttons/icons/deleteBtn";

const ReviewItem = ({ review }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const deleteReviewHandler = (event, id) => {
    event.preventDefault(); // prevents the default action
    event.stopPropagation(); // stops the event from bubbling up
    dispatch(deleteReviewThunk(id));
  }

  const forceLogin = () => {
    alert("Create an account to proceed");
  };

  const reviewedByCurrentUser = review.critic_id === currentUser?.username;

  return (
    <div>
      {currentUser ? (
        <NavLink
          to={`/profile${reviewedByCurrentUser ? "" : "/" + review.critic_id}`}
          state={{ review }}
          className="list-group-item list-group-item-action flex-column align-items-start wd-movie-list-item"
        >
          <div>
            {currentUser && currentUser.roles[0] === "ADMIN" && (
              <DeleteBtn
                fn={(event) => deleteReviewHandler(event, review.rev_id)}
                className={"float-end"}
              />

            )}
            <h3>
              {review.critic_id} {reviewedByCurrentUser && " (You)"}
            </h3>

            <h4>{review.title}</h4>
            <Rating name="read-only" value={review.rating} readOnly />
            <h5>Description: {review.review_text}</h5>
          </div>
        </NavLink>
      ) : (
        <NavLink
          to={"/login"}
          state={{ review }}
          className="list-group-item list-group-item-action flex-column align-items-start wd-movie-list-item"
          onClick={forceLogin}
        >
          <div>
            <h3>{review.critic_id}</h3>
            <h4>{review.title}</h4>
            <Rating name="read-only" value={review.rating} readOnly />
            <h5>Description: {review.review_text}</h5>
          </div>
        </NavLink>
      )}
    </div>
  );
}
export default ReviewItem;