import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createReviewThunk } from "../../services/reviews-thunks";
import "./reviews.css"
import Rating from '@mui/material/Rating'
import SubmitReviewBtn from "../../../ui-styling/buttons/icons/submitReviewButton";
import { useSelector } from "react-redux";
import { profileThunk } from "../../services/auth-thunks";


const AddReview = () => {
    // const { currentUser } = useSelector((state) => state.user);
    // const [profile, setProfile] = useState(currentUser);
    // useEffect(() => {
    //     const getProfile = async () => {
    //         const { payload } = await dispatch(profileThunk());
    //         setProfile(payload);
    //     };
    //     getProfile();
    // }, []);

    let [title, setTitle] = useState('');
    let [rating, setRating] = useState(0);
    let [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const reviewClickHandler = () => {
        console.log('Button clicked!'); 
        const newReview = {
            movieId: "615f9f3b8b3b3f0b3c0c9b1e", // This will come from the database
            username: "Luka",
            title: title,
            rating: rating,
            description: description
        }
        dispatch(createReviewThunk(newReview));
        setTitle("");
        setRating(0);
        setDescription("");
    }
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
