/* For getting movies from tMDB to add to our DB
 * Not official website functionality
 */

import React, {useState} from "react";
import MyNav from "../nav-components/nav";
import BackBar from "../nav-components/backBar";
import "../ui-styling/index.css";
import "../movie-website/search/index.css"
import { useSelector, useDispatch } from "react-redux";
import { getGenresThunk } from "../movie-website/services/search-thunks";
import SearchInput from '../movie-website/search/searchInput'
import SearchResult from './search-result'

const AddMovie = () => {
  const {search} = useSelector((state) => state.search);
  const [results, setResults] = useState([]);

  const handleSearch = (results) => {
    setResults(results);
  };
  const {currentUser} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  dispatch(getGenresThunk());

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
          }}
        />
      ) : (
        <MyNav />
      )}

      <SearchInput path='tmdb'/>
      <br />
      <hr />

      {search !== "" ? <SearchResult results={results}/> : ""}

      <BackBar />
    </>
  );
}
export default AddMovie;