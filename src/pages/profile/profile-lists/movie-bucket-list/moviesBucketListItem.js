import React from "react";
import MovieThumbnail from "../movieStockImg.jpg"

function MovieBucketListItem({ title, rating, summary }) {
    return (
        <li>
            <div className="row">
                <div className="col-2">
                    <img src={MovieThumbnail} height={100} />
                </div>
                <div className="col-10 wd-movie-list-info">
                    <h4>Title</h4>
                    <h6>Rating</h6>
                    <h6>Summary</h6>
                </div>
            </div>
            <hr />
        </li>
    )
};

export default MovieBucketListItem;