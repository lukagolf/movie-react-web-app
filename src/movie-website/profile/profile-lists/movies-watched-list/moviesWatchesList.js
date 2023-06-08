import React from "react";
import CriticReviewListItem from "../critic-review-list/criticReviewListItem";
import MovieWatchedListItem from "./moviesWatchedListItem";

function MoviesWatchList() {
    return (
        <div>
            <ul className="wd-profile-list">
                <li >
                    <h3>Movies You Have Seen</h3><br />
                </li>
                <MovieWatchedListItem />
                <MovieWatchedListItem />
                <MovieWatchedListItem />
            </ul>
        </div>
    );

}
export default MoviesWatchList;