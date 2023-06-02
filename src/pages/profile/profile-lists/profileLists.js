import React from "react";
import CriticReviewList from "./critic-review-list/criticReviewList";
import MoviesBucketList from "./movie-bucket-list/moviesBucketList";
import MoviesWatchList from "./movies-watched-list/moviesWatchesList";
import BackBtn from "../../../ui-styling/buttons/icons/backBtn";

function ProfileLists() {
    return (
        <div className="wd-review-div">
            <div className="wd-review-content">

                <div className="col-2"></div>
                <div className="col-8">
                    <MoviesBucketList/>
                    <MoviesWatchList/>
                    <CriticReviewList/>
                </div>
                <div className="col-2"></div>
            </div>
            <BackBtn/>
        </div>
    );
}

export default ProfileLists;