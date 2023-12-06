import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./reviews-service";



export const findReviewsThunk = createAsyncThunk(
    "reviews/findReviews",
    async () => await service.findReviews()
);

export const findCriticReviewsThunk = createAsyncThunk(
    "reviews/findCriticReviews",
    async (criticUsername) => {
        return await service.findCriticReviews(criticUsername);
    }
);


export const findMovieReviewsThunk = createAsyncThunk(
    "reviews/findMovieReviews",
    async (mid) => await service.findMovieReviews(mid)
)

export const deleteReviewThunk = createAsyncThunk(
    'reviews/deleteReview',
    async (reviewId) => {
        await service.deleteReview(reviewId)
        return reviewId
    }
);

export const createReviewThunk = createAsyncThunk(
    'reviews/createReview',
    async (review) => {
        const newReview = await service.createReview(review)
        return newReview
    }
);

export const updateReviewThunk = createAsyncThunk(
    'reviews/updateReview',
    async ({newReview}, thunkApi) => {
        await service.updateReview(newReview)
        thunkApi.dispatch(findMovieReviewsThunk(newReview.movie_id))
    }
);