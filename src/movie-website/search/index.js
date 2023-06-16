import React, {useState} from "react";
import MyNav from "../../common-components/nav";
import BackBar from "../../common-components/backBar";
import "../../ui-styling/index.css";
import "./index.css"
import SearchInput from "./searchInput";
import { useSelector } from "react-redux";
import SearchResult from "./searchResult";

function Search() {
  const {search} = useSelector((state) => state.search);
  const [results, setResults] = useState([]);

  const handleSearch = (results) => {
    setResults(results);
  };


  return (
    <>
      <MyNav
        options={{
          homePage: false,
          search: false,
          signIn: true,
          profile: false,
          signOut: false,
        }}
      />

      <SearchInput onSearch={handleSearch}/>
      <br />
      <hr />

      {search !== "" ? <SearchResult results={results}/> : ""}

      <BackBar />
    </>
  );
}

export default Search;