import React from "react";
import "./reviews.css"
import Rating from '@mui/material/Rating'
import SubmitReviewBtn from "../../../ui-styling/buttons/icons/submitReviewButton";

function AddReview() {
    return (
        <div>
            <h3>Add Review</h3>
            <form className="wd-add-review-form">
                <div className="mb-3">
                    <label for="reviewTitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="reviewTitle" aria-describedby="reviewTitle" />
                </div>
                <div className="mb-3">
                    <label for="reviewDescription" className="form-label">Rating</label><br />
                    <Rating
                        name="simple-controlled"
                        value={0}
                        size="large"
                    />
                </div>
                <div className="mb-3">
                    <label for="reviewDescription" className="form-label">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <SubmitReviewBtn />
            </form>
        </div>


    );
}

export default AddReview;