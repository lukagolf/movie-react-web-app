import React, { useEffect, useState } from "react";
import "../../index.css"
import Rating from '@mui/material/Rating';
import axios from "axios";
import { Link } from 'react-router-dom';


function CriticReviewListItem({ title, rating, description, movieId, photo, movie_title }) {
    const [movieReviewed, setMovieReviewed] = useState([]);

    return (
        <Link to={{ pathname: `/details/${movieId}` }}
            className="list-group-item list-group-item-action flex-column align-items-start wd-movie-list-item"
        >
            <div className="row p-3 wd-movie-list-row">
                <div className="col-3 wd-movie-list-image d-none d-lg-block">
                    <img src={photo}
                        className="float-left mr-3"
                    />
                </div>
                <div className="col-9 wd-movie-list-info d-none d-lg-block">
                    <h3>{movie_title}</h3><br />
                    <h4> {title}</h4>
                    <div>
                        <Rating name="read-only" value={rating} readOnly />
                        <br />
                        {description}
                    </div>
                </div>
                <div className="d-lg-none col-12">
                    <img src={photo}
                        className="float-left mr-3 wd-md-screen-size-img"
                    />
                    <h3>{movie_title}</h3><br />
                    <h4> {title}</h4>
                    <div>
                        <Rating name="read-only" value={rating} readOnly />
                        <br />
                        {description}
                    </div>
                </div>
            </div>
        </Link>
    )
};

export default CriticReviewListItem;
