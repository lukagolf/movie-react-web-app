import React from "react";
import MyNav from "../../common-components/nav";
import MovieListItem from "./movie-info";
import ReviewSection from "./reviews/reviewSection";

function Details() {
    return (
    <div>
        <MyNav />
        <MovieListItem/>
        <ReviewSection/>
    </div>
    );
}

export default Details;