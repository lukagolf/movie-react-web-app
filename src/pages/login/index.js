import React from "react";
import MyNav from "../../common-components/nav";
import BackBar from "../../common-components/backBar";
import "../../ui-styling/index.css";
import "./index.css";
import SignUp from "./signUp";
import Register from "./register";

function Login() {

  return (
    <>
      <MyNav
        options={{
          homePage: false,
          search: true,
          signIn: false,
          profile: false,
          signOut: false,
        }}
      />
      <div className="container wd-fullHeight">
        <h3 className="wd-pinkText text-center">Welcome!</h3>
        <br />
        <br />
        <div className="row ">
          <div className="col-6">
            <SignUp />
          </div>

          <div className="wd-vline col-6">
            <Register />
          </div>
        </div>
      </div>
      <BackBar />
    </>
  );
}

export default Login;
