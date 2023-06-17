import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReviewThunk } from "../../services/reviews-thunks";
import "./reviews.css";
import Rating from '@mui/material/Rating';
import SubmitReviewBtn from "../../../ui-styling/buttons/icons/submitReviewButton";

const AddReview = () => {
    const { currentUser } = useSelector((state) => state.user); // Get the currentUser from Redux state

    let [title, setTitle] = useState('');
    let [rating, setRating] = useState(0);
    let [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const reviewClickHandler = () => {
        console.log('Button clicked!');
        const newReview = {
            movieId: "615f9f3b8b3b3f0b3c0c9b1e", // This will come from the database
            username: currentUser.username, // Use the currentUser's username
            title: title,
            rating: rating,
            description: description
        };
        dispatch(createReviewThunk(newReview));
        setTitle("");
        setRating(0);
        setDescription("");
    };
    return (
        <div>
            <h3>Add Review</h3>
            <form className="wd-add-review-form">
                <div className="mb-3">
                    <label htmlFor="reviewTitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="reviewTitle" aria-describedby="reviewTitle"
                        onChange={(event) => setTitle(event.target.value)}>
                    </input>
                </div>
                <div className="mb-3">
                    <label htmlFor="reviewRating" className="form-label">Rating</label><br />
                    <Rating
                        id="reviewRating"
                        name="simple-controlled"
                        value={rating}
                        size="large"
                        onChange={(event, newValue) => setRating(newValue)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="reviewDescription" className="form-label">Description</label>
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
