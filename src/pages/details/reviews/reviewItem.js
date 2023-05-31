import React from "react";
import Rating from "@mui/material/Rating"

const ReviewItem = (
    {
        review = {
            criticId: "user123",
            title: "Best Movie ever",
            rating: 5,
            description: "description"
        }
    }
) => {
    return (
        <li>
            <a href="#"><h3>{review.criticId}</h3></a> 
            <h4>{review.title}</h4>
            <Rating name="read-only" value={review.rating} readOnly />
            <p>Description: {review.description}</p><br/>
            <hr />
        </li>
    )
}

export default ReviewItem;