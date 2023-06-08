import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import MovieWebsite from "./movie-website";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/movie-website/home" />} />
          <Route path="/*" element={<MovieWebsite />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
