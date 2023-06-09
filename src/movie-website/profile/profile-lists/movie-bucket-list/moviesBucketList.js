import React from "react";
import "../../index.css"
import MovieBucketListItem from "./moviesBucketListItem";
import NextBtn from "../../../../ui-styling/buttons/icons/nextBtn";

function MoviesBucketList() {
    return (
        <div>
            <ul className="wd-profile-list list-group">
                <li >
                    <h3>Movies On Bucket List</h3><br />
                </li>
                <MovieBucketListItem />
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
export default MoviesBucketList;

