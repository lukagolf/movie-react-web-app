import React from "react";
import "./reviews.css"
import Rating from '@mui/material/Rating'
import SubmitReviewBtn from "../../../ui-styling/buttons/icons/submitReviewButton";

function AddReview() {
    return (
        <div>
            <h3>Add Review</h3>
            <form className="wd-add-review-form">
                <div class="mb-3">
                    <label for="reviewTitle" class="form-label">Title</label>
                    <input type="text" class="form-control" id="reviewTitle" aria-describedby="reviewTitle" />
                </div>
                <div class="mb-3">
                    <label for="reviewDescription" class="form-label">Rating</label><br />
                    <Rating
                        name="simple-controlled"
                        value={0}
                        size="large"
                    />
                </div>
                <div class="mb-3">
                    <label for="reviewDescription" class="form-label">Description</label>
                    <input type="text" class="form-control" id="reviewDescription" aria-describedby="reviewDescription" />
                </div>
                <SubmitReviewBtn />
            </form>
        </div>


    );

}
export default AddReview;