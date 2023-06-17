import axios from 'axios';

const REVIEWS_API = 'http://localhost:4000/api/reviews';

export const createReview = async (review) => {
    console.log("My Review!!!", review);
    const response = await axios.post(REVIEWS_API, review)
    console.log(response);
    return response.data;
}

export const findReviews = async () => {
    const response = await axios.get(REVIEWS_API);
    const reviews = response.data;
    return reviews;
}

export const findCriticReviews = async (criticUsername) => {
    const response = await axios.get(`${REVIEWS_API}/${criticUsername}`)
    const reviews = response.data
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