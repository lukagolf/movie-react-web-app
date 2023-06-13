import { Routes, Route, Navigate } from "react-router";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import reviewsReducer from "./reducers/reviews-reducer";
import Profile from "./profile/index";
import Search from "./search/index";
import Home from "./home/index";
import Details from "./details/index";
import Login from "./login/index";
const store = configureStore({
    reducer: {
        /* who: whoReducer, */ reviews: reviewsReducer,
        /* user: authReducer */
    },
});


function MovieWebsite() {
    return (
        <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/profile/*" element={<Profile />} />
                    <Route path="/details" element={<Details />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
        </Provider>
    );
}

export default MovieWebsite;