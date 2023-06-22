import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReviewThunk } from "../../services/reviews-thunks";
import "./reviews.css";
import Rating from '@mui/material/Rating';
import SubmitReviewBtn from "../../../ui-styling/buttons/icons/submitReviewButton";
import { useParams } from "react-router";

const AddReview = () => {
    const { currentUser } = useSelector((state) => state.user);
    const { id } = useParams();

    let [title, setTitle] = useState('');
    let [rating, setRating] = useState(0);
    let [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const reviewClickHandler = async() => {
        const newReview = {
            movieId: id,
            username: currentUser.username,
            title: title,
            rating: rating,
            description: description
        };
        try {
            await dispatch(createReviewThunk(newReview)).unwrap();
        } catch (e) {
            alert("Unable to create review: missing required fields");
        }

        setTitle("");
        setRating(0);
        setDescription("");
    };
    return (
      <div>
        <h3>Add Review</h3>
        <form className="wd-add-review-form p-3 bg-light rounded">
          <div className="mb-3">
            <label for="reviewTitle" className="form-label">
              <h5>Title</h5>
            </label>
            <input
              type="text"
              className="form-control"
              id="reviewTitle"
              aria-describedby="reviewTitle"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label for="reviewRating" className="form-label">
              <h5>Rating</h5>
            </label>
            <br />
            <Rating
              id="reviewRating"
              name="simple-controlled"
              value={rating}
              size="large"
              onChange={(event, newValue) => setRating(newValue)}
            />
          </div>
          <div className="mb-3">
            <label for="reviewDescription" className="form-label">
              <h5>Description</h5>
            </label>
            <textarea
              className="form-control"
              id="reviewDescription"
              rows="3"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <SubmitReviewBtn fn={reviewClickHandler} />
        </form>
      </div>
    );
}

export default AddReview;