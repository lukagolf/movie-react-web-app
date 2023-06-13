import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import MovieWebsite from "./movie-website";
import userReducer from "../src/reducers/userReducer";
import searchReducer from "../src/reducers/searchReducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: { user: userReducer, search: searchReducer },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/movie-website/home" />} />
          <Route path="/*" element={<MovieWebsite />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
