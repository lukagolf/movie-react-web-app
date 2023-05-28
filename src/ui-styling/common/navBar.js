import React from "react";
import SignInBtn from "../buttons/text/signInBtn";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchBtn from "../buttons/icons/searchBtn";
import ProfileBtn from "../buttons/icons/profileBtn";
import SignOutBtn from "../buttons/text/signOutBtn";

const NavBar = ({
  options = { homePage: false, search: true, signIn: true, profile: false, signOut: false},
}) => {
  return (
    <div className="container">
      {options.homePage ? (
        <h2 className="d-inline wd-whiteText">CineScope</h2>
      ) : (
        <h2 className="d-inline wd-purpleText">CineScope</h2>
      )}

      {options.signIn ? <SignInBtn className="float-end" /> : ""}
      {options.profile ? <ProfileBtn className="float-end" /> : ""}
      {options.signOut ? <SignOutBtn className="float-end" /> : ""}
      {options.search ? <SearchBtn className="float-end" /> : ""}
    </div>
  );
};
export default NavBar;
