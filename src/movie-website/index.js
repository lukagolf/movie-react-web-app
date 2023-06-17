import { Routes, Route, Navigate } from "react-router";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import reviewsReducer from "./reducers/reviews-reducer";
import authReducer from "./reducers/auth-reducer";
import searchReducer from "./reducers/search-reducer";
import Profile from "./profile/index";
import Search from "./search/index";
import Home from "./home/index";
import Details from "./details/index";
import Login from "./login/index";
import newMoviesReducer from "./reducers/new-movies-reducer";
import movieVideoReducer from "./reducers/movie-video-reducer";
import savedMoviesReducer from "./reducers/saved-movie-reducer";

import ScrollToTop from "./scroll-to-top";
const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    user: authReducer,
    search: searchReducer,
    newMovies: newMoviesReducer,
    video: movieVideoReducer,
    savedMovies: savedMoviesReducer
  },
});


function MovieWebsite() {
    return (
        <Provider store={store}>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/profile/:username" element={<Profile />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Provider>
    );
}

export default MovieWebsite;