import { createAsyncThunk } from "@reduxjs/toolkit";
import { dislikeReview, likeReview, unlikeReview, undislikeReview } 
    from "../reducers/reviews-reducer";
import * as service from "./reviews-service"

/* liked =    true if the user had already liked the review previously, 
 *            and now they're unliking it
 * disliked = true -if the user had the review disliked when they pressed like,
 *            meaning we now have to undo the dislike
 */
export const likeReviewThunk = createAsyncThunk(
    'reviews/toggleLike',
    async({ liked, disliked, rev_id, username }, thunkAPI) => {
        console.log("like thunk with liked " + liked + " and disliked " + disliked)
        console.log("and username " + username + " and rev_id " + rev_id)
        if (!liked) {
            thunkAPI.dispatch(likeReview({ rev_id, username }))
        } else {
            thunkAPI.dispatch(unlikeReview({ rev_id, username }))
        }
        if (disliked) {
            thunkAPI.dispatch(dislikeReviewThunk({ disliked, rev_id, username }))
        }
        return service.toggleLike(liked, rev_id, username)
    }
)

export const dislikeReviewThunk = createAsyncThunk(
    'reviews/toggleDislike',
    async({ disliked, liked, rev_id, username }, thunkAPI) => {
        if (!disliked) {
            thunkAPI.dispatch(dislikeReview({ rev_id, username }))
        } else {
            thunkAPI.dispatch(undislikeReview({ rev_id, username }))
        }
        if (liked) {
            thunkAPI.dispatch(likeReviewThunk({ liked, rev_id, username }))
        }
        return service.toggleDislike(disliked, rev_id, username)
    }
)
