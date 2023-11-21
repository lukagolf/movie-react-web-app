import axios from 'axios';

const REVIEWS_API = 'http://localhost:4000/api/reviews';

export const createReview = async (review) => {
    const response = await axios.post(REVIEWS_API, review)
    return response.data;
}

export const findReviews = async () => {
    const response = await axios.get(REVIEWS_API);
    const reviews = response.data;
    return reviews;
}

export const findCriticReviews = async (criticUsername) => {
    const response = await axios.get(`${REVIEWS_API}/findCriticReviews/${criticUsername}`);
    const reviews = response.data;
    return reviews;
}


export const findMovieReviews = async (mid) => {
    const response = await axios.get(`${REVIEWS_API}/findMovieReviews/${mid}`)
    const reviews = response.data;
    return reviews;
}

export const deleteReview = async (rid) => {
    const response = await axios.delete(`${REVIEWS_API}/${rid}`)
    return response.data
}

export const updateReview = async (review) => {
    const response = await axios.put(`${REVIEWS_API}/${review._id}`, review);
    return review;
}

export const toggleLike = async (alreadyLiked, rev_id, username) => {
    const likes = alreadyLiked ? 'unlike' : 'like'
    const response = 
        await axios.put(`${REVIEWS_API}/${likes}/${rev_id}/${username}`)
    return response;
}

export const toggleDislike = async (alreadyDisliked, rev_id, username) => {
    const dislikes = alreadyDisliked ? 'undislike' : 'dislike'
    const response = 
        await axios.put(`${REVIEWS_API}/${dislikes}/${rev_id}/${username}`)
    return response;
}