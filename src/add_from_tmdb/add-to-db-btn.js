import React from 'react'
import { addMovieThunk } from "../movie-website/services/search-thunks";
import { useDispatch, useSelector } from "react-redux";
const PHOTO_URL = 'https://image.tmdb.org/t/p/w440_and_h660_face';


const AddToDBButton = ({movie}) => {
  const dispatch = useDispatch();
  movie.poster_path = `${PHOTO_URL}/${movie.poster_path}`
  const onAddMovie = () => dispatch(addMovieThunk(movie))
  // let { status } = useSelector(state => state.search)

  return (
    <>
      <button type="button" className="btn btn-success" onClick={onAddMovie}>Add Movie</button>
    </>
  );
}
export default AddToDBButton;