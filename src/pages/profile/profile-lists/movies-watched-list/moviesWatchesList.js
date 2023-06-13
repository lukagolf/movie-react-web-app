import React from "react";
import MovieWatchedListItem from "./moviesWatchedListItem";
import NextBtn from "../../../../ui-styling/buttons/icons/nextBtn";

function MoviesWatchList() {
    return (
        <div>
            <ul className="wd-profile-list list-group">
                <li >
                    <h3>Movies You Have Seen</h3><br />
                </li>
                <MovieWatchedListItem />
                <MovieWatchedListItem />
                <MovieWatchedListItem />
            </ul>

            <div className="wd-list-results">
                <label className="float-end">100 results</label>
                <br />
                <NextBtn />
                <br />
                <br />
                <label className="float-end">1 of 10 pages</label>
            </div>
        </div>
    );

}
export default MoviesWatchList;