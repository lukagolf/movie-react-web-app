import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import MovieWebsite from "./movie-website";
import authReducer from "./movie-website/reducers/auth-reducer";
import reviewsReducer from "./movie-website/reducers/reviews-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    user: authReducer
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/*" element={<MovieWebsite />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
