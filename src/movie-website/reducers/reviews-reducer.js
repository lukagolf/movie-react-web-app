import { createSlice } from "@reduxjs/toolkit";
import { updateReviewThunk, createReviewThunk, deleteReviewThunk, findReviewsThunk, findCriticReviewsThunk, findMovieReviewsThunk } from "../services/reviews-thunks";

const initialState = {
    reviews: [],
    loading: false
}


const currentUser = {
    "userName": "Joe",
    "handle": "@joe",
    "image": "joe-profile.jpg",
};

const templateReview = {
    ...currentUser,
    "title": "Pink Panther",
    "time": "0s",
    "reviewed": false,
    "reviews": 0,
}

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        likeReview(state, action) {
            const {rev_id, username} = action.payload
            const revIndex = state.reviews.findIndex(rev => rev.rev_id === rev_id)
            state.reviews[revIndex].likes.push(username)
        },
        unlikeReview(state, action) {
            const {rev_id, username} = action.payload
            const revIndex = state.reviews.findIndex(rev => rev.rev_id === rev_id)
            state.reviews[revIndex].likes = 
                state.reviews[revIndex].likes.filter(user => user !== username)
        },
        dislikeReview(state, action) {
            const {rev_id, username} = action.payload
            const revIndex = state.reviews.findIndex(rev => rev.rev_id === rev_id)
            state.reviews[revIndex].dislikes.push(username)
        },
        undislikeReview(state, action) {
            const {rev_id, username} = action.payload
            const revIndex = state.reviews.findIndex(rev => rev.rev_id === rev_id)
            state.reviews[revIndex].dislikes = 
                state.reviews[revIndex].dislikes.filter(user => user !== username)
        }
    },
    extraReducers: {
        [updateReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const reviewNdx = state.reviews.findIndex((r) => r._id === payload._id)
                state.reviews[reviewNdx] = { ...state.reviews[reviewNdx], ...payload }
            },
        [createReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews.unshift(payload)
                console.log("STATE.REVIEWS IS NOW " + JSON.stringify(state.reviews))
            },
        [deleteReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = state.reviews.filter(r => r._id !== payload)
            },
        [findReviewsThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findCriticReviewsThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findCriticReviewsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findCriticReviewsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findMovieReviewsThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findMovieReviewsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findMovieReviewsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
    },
});

export default reviewsSlice.reducer;
export const {
    dislikeReview,
    undislikeReview,
    likeReview,
    unlikeReview,
} = reviewsSlice.actions;