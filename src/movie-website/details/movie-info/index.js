import React, { useEffect, useState } from "react";
import axios from "axios";
import "./details.css";
import "../../../ui-styling/index.css";
import SavedBtn from "../../../ui-styling/buttons/icons/savedBtn";
import { useParams } from "react-router-dom";
import { createSavedMovieThunk, deleteSavedMovieThunk } from "../../services/saved-movies-thunks";
import { useDispatch } from "react-redux";

const MovieListItem = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=ffdfb660a1488ae7f304368f73e0e7ec`
            );
            setMovie(response.data);
        };
        fetchMovie();
    }, [id]);

    /* KATHERINE KNOWS WHAT IS THE PROBLEM HERE AND IT SHOULD BE HANDLED */
    // const [savingMovie, setSavingMovie] = useState(false);
    // const handleSaveBtn = () => {
    //     console.log("INIT", savingMovie);
    //     alert("button has been clicked");
    //     setSavingMovie(!savingMovie);
    // }
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     if (savingMovie) {
    //         console.log(savingMovie);
    //         dispatch(createSavedMovieThunk(movie));
    //     } else {
    //         console.log(savingMovie);
    //         dispatch(deleteSavedMovieThunk(movie.mid));
    //     }

    // }, [savingMovie]);

    // Check if movie exists
    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="wd-video-details-background row">
                <div className="d-none d-lg-flex row">
                    <div className="wd-left-col col-1">
                        <SavedBtn /* fn={handleSaveBtn} */ />
                    </div>
                    <div className="wd-details-col col-5">
                        <div className="wd-title-text">{movie.original_title}</div>
                        <br />
                        <div><b>Rating:</b> {movie.vote_average}</div>
                        <br />
                        <div><b>Release date:</b> {movie.release_date}</div>
                        <br />
                        <div><b>Summary:</b> {movie.overview}</div>
                    </div>
                    <div className="wd-photo-col col-5">
                        <img src={"https://image.tmdb.org/t/p/w440_and_h660_face/" + movie.poster_path} alt="Movie Poster" />
                    </div>
                    <div className="wd-right-col col-1"></div>
                </div>
            </div>
        </div>
    );
};
export default MovieListItem;