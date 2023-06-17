import React, { useEffect } from "react";
import "./details.css"
import testPhoto from "./flower.jpg"
import "../../../ui-styling/index.css"
import SavedBtn from "../../../ui-styling/buttons/icons/savedBtn";
import TagBtn from "../../../ui-styling/buttons/icons/tagBtn";
import { useState } from "react";
import {
  createSavedMovieThunk,
  deleteSavedMovieThunk,
} from "../../services/saved-movies-thunks";
import { useDispatch } from "react-redux";
const MovieListItem = ({
    movie = {
        mid: 1,
        title: 'Title',
        genres: 'Drama, Romance',
        rating: 9.3,
        numWatchers: 6800,
        year: 1990,
        cast: 'person1, person2',
        director: 'Christopher Nolan',
        summary: 'Every website has a story, and your visitors want to hear yours. This space is a great opportunity to give a full background on who you are and what your site has to offer. Double click on the text box to start editing your content and make sure to add all the relevant details you want site visitors to know.',
        img: ''
    }
    }) =>
    {
      const [savingMovie, setSavingMovie] = useState(false);
      const handleSaveBtn = () => {
        console.log("INIT",savingMovie);
        alert("button has been clicked");
        setSavingMovie(!savingMovie);
      }
       const dispatch = useDispatch();
       useEffect(() => {
         if (savingMovie) {
           console.log(savingMovie);
           dispatch(createSavedMovieThunk(movie));
         } else {
           console.log(savingMovie);
           dispatch(deleteSavedMovieThunk(movie.mid));
         }
       }, [savingMovie]);
    return (
      <div>
        <div className="wd-video-details-background row">
          <div className="d-none d-lg-flex row">
            <div className="wd-left-col col-1">
              <SavedBtn fn={() => handleSaveBtn()} />
            </div>
            <div className="wd-details-col col-5">
              <div className="wd-title-text">{movie.title}</div>
              <form>
                {movie.genres.split(",").map((genre, index) => (
                  <TagBtn key={index} text={genre} />
                ))}
              </form>
              <br />
              <div>
                <b>Rating:</b> {movie.rating}/10
              </div>
              <div>
                <b>Number of Watchers:</b> {movie.numWatchers}
              </div>
              <br />
              <div>
                <b>Year:</b> {movie.year}
              </div>
              <div>
                <b>Cast:</b> {movie.cast}
              </div>
              <div>
                <b>Director:</b> {movie.director}
              </div>
              <br />
              <div>
                <b>Summary:</b> {movie.summary}
              </div>
            </div>
            <div className="wd-photo-col col-5">
              <img src={testPhoto} alt="Movie Poster" />
            </div>
            <div className="wd-right-col col-1"></div>
          </div>
          <div className="d-lg-none">
            <div className="col-1"></div>
            <div className="wd-details-col col-10">
              <SavedBtn fn={() => handleSaveBtn()} />
              <div className="wd-title-text">{movie.title}</div>
              <form>
                {movie.genres.split(",").map((genre, index) => (
                  <TagBtn key={index} text={genre} />
                ))}
              </form>
              <br />
              <div>
                <b>Rating:</b> {movie.rating}/10
              </div>
              <div>
                <b>Number of Watchers:</b> {movie.numWatchers}
              </div>
              <br />
              <div>
                <b>Year:</b> {movie.year}
              </div>
              <div>
                <b>Cast:</b> {movie.cast}
              </div>
              <div>
                <b>Director:</b> {movie.director}
              </div>
              <br />
              <div>
                <b>Summary:</b> {movie.summary}
              </div>
              <div className="wd-photo-col wd-photo-small-screen">
                <img src={testPhoto} alt="Movie Poster" height={24} />
              </div>
            </div>
            <div className="wd-right-col col-1"></div>
          </div>
        </div>
      </div>
    );
};

export default MovieListItem;