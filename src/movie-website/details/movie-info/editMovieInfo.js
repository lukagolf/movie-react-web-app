import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findMovieByIDThunk, updateMovieThunk } from "../../services/movie-thunks";
import UpdateBtn from '../../../ui-styling/buttons/icons/submitReviewButton';

const EditMovieInfo = ({movie, toggleEditing}) => {
  const { status } = useSelector(state => state.movie)
  const [genreList, setGenreList] = useState(movie.genres?.length > 0 ? movie.genres : ['']);
  const [validDate, setValidDate] = useState(true);
  const [date, setDate] = useState(new Date(movie.release_date).toISOString().split('T')[0])
  const [photo, setPhoto] = useState(movie.photo_url)
  const [title, setTitle] = useState(movie.title)
  const [overview, setOverview] = useState(movie.summary)
  const [showError, setShowError] = useState(false)
  const dispatch = useDispatch()
  let submitted = false;

  const removeGenre = (index ) => {
    setGenreList(genreList.filter((g, i) => (i !== index || i === 0)))
  }

  const addGenre = () => {
    setGenreList([...genreList, '']);
  };

  const handleGenreChange = (index, value) => {
    const newGenres = [...genreList];
    newGenres[index] = value;
    setGenreList(newGenres);
  }

  const validateDate = () => {
    setValidDate(new Date(date) <= new Date())
    return new Date(date) <= new Date()
  }

  const emptyFields = () => {
    setShowError(title === '' || overview === '' || photo === '' || genreList.length === 0)
    return (title === '' || overview === '' || photo === '' || genreList.length === 0)
  }

  const handleUpdate = (event) => {
    event.preventDefault()
    submitted = true
    if (!validateDate()) {
      return
    }

    if (emptyFields()) {
      return
    }

    let genres = genreList.filter(genre => genre != '')
    genres = genres.filter((genre, index, self) => self.indexOf(genre) === index);
    const newMovie = {
      "movie_id": movie.movie_id,
      title,
      genres,
      overview,
      "release_date": date,
      "poster_path": photo
    }
    dispatch(updateMovieThunk(newMovie))
    toggleEditing();
  }

  if (submitted && status === 'failed') {
    alert("FAILED: Movie with that title and release date already exists")
  }

  return(
   <div>
    <div className="wd-video-details-background row">
        <div className="wd-details-row">
        <UpdateBtn className='position-absolute top-0 end-0 m-2' fn={event => handleUpdate(event)}/>
          <div className="row">
            <div className="col-sm-9 col-md-5">
            <div className="form-group">
              <label for="movie-title-input" className="ms-2 fs-5"> Title </label> <br/>
              <input id="movie-title-input" type="text" value={title} className="ms-2 form-control movie-details-input"
           onChange={(e) => setTitle(e.target.value)}/>
        </div>
              <br />
              <br />
              <h5>
                <div className="form-group">
                  <label for="movie-date-input" className="ms-2 fs-5"> Release Date </label> <br/>
                  <input id="movie-date-input" type="date" value={date} className="ms-2 form-control movie-details-input"
                  onChange={e => setDate(e.target.value)}/>
                  {
                    !validDate &&
                    <div className="text-danger ms-2"> Release date must be present or earlier </div>
                  }
        </div>
              </h5>
              <br />
              <h5>
              <div className="form-group">
                <label for="movie-overview-input" className="ms-2 fs-5"> Summary </label> <br/>
                <textarea id="movie-overview-input" value={overview} onChange={e => setOverview(e.target.value)} 
                          className="ms-2 form-control movie-details-input"/>
        </div>
              </h5>
              <br />
                  <h5>
                    <b> Genres: </b>
                    <div>
                      <div className="form-group ms-2">
                        {genreList.map((genre, index) => (
                          <div key={index}>
                            <input 
                              className="form-control movie-details-input w-75 d-inline-block" 
                              value={genre}
                              onChange={(e) => handleGenreChange(index, e.target.value)}
                            />
                            <button 
                              type="button" 
                              className="btn btn-danger d-inline-block" 
                              onClick={() => removeGenre(index)}
                            >
                              -
                            </button>
                          </div>
                        ))}
                                 <button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick={addGenre}
                          >
                            +
                          </button>

                      </div>
                    </div>
                  </h5>
                  <div className="form-group">
                    <label for="movie-photo-input" className="ms-2 fs-5"> Photo URL </label> <br/>
                    <input id="movie-photo-input" type="text" value={photo} className="ms-2 form-control movie-details-input"
                    onChange={(e) => setPhoto(e.target.value)}/>
                  </div>
                  {
                    showError &&
                    <div className="text-danger ms-2"> Fields cannot be empty. </div>
                  }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
export default EditMovieInfo;