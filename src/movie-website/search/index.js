import React from "react";
import MyNav from "../../common-components/nav";
import BackBar from "../../common-components/backBar";
import "../../ui-styling/index.css";
import "./index.css"
import SearchInput from "./searchInput";
import { useSelector } from "react-redux";
import SearchResult from "./searchResult";

function Search() {
  const { search } = useSelector((state) => state.search);
  
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

      <SearchInput />
      <br />
      <hr />

      {search !== "" ? <SearchResult /> : ""}

      <BackBar />
    </>
  );
}

export default Search;