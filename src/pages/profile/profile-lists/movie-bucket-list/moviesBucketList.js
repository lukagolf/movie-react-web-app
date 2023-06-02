import React from "react";
import "../../index.css"
import MovieBucketListItem from "./moviesBucketListItem";

function MoviesBucketList() {
    return (
        <div>
            <ul className="wd-profile-list">
                <li >
                    <h3>Movies On Bucket List</h3><br />
                </li>
                <MovieBucketListItem />
            </ul>
        </div>
    );

}
export default MoviesBucketList;