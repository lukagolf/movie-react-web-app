import React, {useState} from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MyNav from "../../nav-components/nav";
import "../../ui-styling/index.css";
import WhiteTextBtn from "../../ui-styling/buttons/text/whiteTextBtn";
import { useSelector } from "react-redux";
import { addMovieThunk } from "../services/search-thunks";

function AddMovie() {
  const { status } = useSelector(state => state.movie)
  const [genreList, setGenreList] = useState(['']);
  const [validDate, setValidDate] = useState(true);
  const [submitted, setSubmitted] = useState(false)
  const [date, setDate] = useState('')
  const [photo, setPhoto] = useState('')
  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')
  const [showError, setShowError] = useState(false)
  const dispatch = useDispatch()

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


  const handleSubmit = (event) => {
    setShowError(false)
    setValidDate(true)
    setSubmitted(false)
    event.preventDefault();
    if (new Date(date) > new Date()) {
      setValidDate(false)
      return
    }
    if (title === '' || overview === '' || photo === '' || genreList.length === 0) {
      setShowError(true)
      return
    }

    let genres = genreList.filter(genre => genre != '')
    genres = genres.filter((genre, index, self) => self.indexOf(genre) === index);
    const newMovie = {
      title,
      genres,
      overview,
      "release_date": date,
      "poster_path": photo
    }
    dispatch(addMovieThunk(newMovie))
    setSubmitted(true)
    setOverview('')
    setPhoto('')
    setDate('')
    setTitle('')
  }

  // if the fields are empty, failed status is not from a previous 
  // attempt on this page


  const {currentUser} = useSelector((state) => state.user);

  return (
    <>
      {currentUser ? (
        <MyNav
          options={{
            homePage: false,
            search: false,
            signIn: false,
            profile: true,
            signOut: true,
            adminAdd: true
          }}
        />
      ) : (
        <MyNav />
      )}

      <br />
      <hr />

      <h1 className="text-center"> Add a Movie To the Website </h1>
      <form className="mb-3">
        <div className="form-group">
          <label for="movie-title-input" className="ms-2 fs-5"> Title </label> <br/>
          <input id="movie-title-input" type="text" value={title} className="ms-2 form-control w-25"
           onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <br/>
        <div className="form-group">
          <label for="movie-photo-input" className="ms-2 fs-5"> Photo URL </label> <br/>
          <input id="movie-photo-input" type="text" value={photo} className="ms-2 form-control w-25"
          onChange={(e) => setPhoto(e.target.value)}/>
        </div>
        <br/>
        <div className="form-group">
          <label for="movie-date-input" className="ms-2 fs-5"> Release Date </label> <br/>
          <input id="movie-date-input" type="date" value={date} className="ms-2 form-control w-25"
          onChange={e => setDate(e.target.value)}/>
          {
            !validDate &&
            <div className="text-danger ms-2"> Release date must be present or earlier </div>
          }
        </div>
        <br/>
        <div className="form-group">
          <label for="movie-overview-input" className="ms-2 fs-5"> Summary </label> <br/>
          <textarea id="movie-overview-input" value={overview} onChange={e => setOverview(e.target.value)} 
          className="ms-2 form-control w-50 h-25"/>
        </div>
        <br/>
        <div className="form-group ms-2">
        {
          genreList.map((genre, index) => (
            <div key={index}>
              <input 
                className="form-control w-75 d-inline" 
                value={genre}
                placeholder="Add genre..."
                onChange={(e) => handleGenreChange(index, e.target.value)}
              />  <button 
              type="button" 
              className="btn btn-danger" 
              onClick={() => removeGenre(index)}
            >  - </button>
            </div>
        ))}
         <button 
          type="button" 
          className="btn btn-primary" 
          onClick={addGenre}
        >
          +
        </button>
        </div> <br/>
        {
          showError &&
          <div className="text-danger ms-2"> Fields cannot be empty. </div>
        }
        <WhiteTextBtn text="Submit" fn={event => handleSubmit(event)}/>
        {
          status === 'succeeded' && submitted && 
            <div className='text-success'> Successfully Added </div>
        }
        {
          status === 'failed' && submitted && 
            <div className='text-danger'> FAILED: movie with that title and release date 
                                          already exists </div>
        }
      </form>
    </>
  );
}

export default AddMovie;