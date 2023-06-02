import React from "react";
import MyNav from "../../common-components/nav";
import MovieListItem from "./movie-info";
import ReviewList from "./reviews/reviewList";
import AddReview from "./reviews/addReview";
import BackBtn from "../../ui-styling/buttons/icons/backBtn";
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