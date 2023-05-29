import React from "react";
import "../ui-styling/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchBtn from "../ui-styling/buttons/icons/searchBtn";
import ProfileBtn from "../ui-styling/buttons/icons/profileBtn";
import SignInBtn from "../ui-styling/buttons/text/signInBtn";
import SignOutBtn from "../ui-styling/buttons/text/signOutBtn";

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
