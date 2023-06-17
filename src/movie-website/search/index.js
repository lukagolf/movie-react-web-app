import React from "react";
import MyNav from "../../nav-components/nav";
import BackBar from "../../nav-components/backBar";
import "../../ui-styling/index.css";
import "./index.css"
import SearchInput from "./searchInput";
import { useSelector } from "react-redux";
import SearchResult from "./searchResult";

function Search() {
  const {search} = useSelector((state) => state.search);
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
          }}
        />
      ) : (
        <MyNav />
      )}

      <SearchInput />
      <br />
      <hr />

      {search !== "" ? <SearchResult /> : ""}

      <BackBar />
    </>
  );
}

export default Search;