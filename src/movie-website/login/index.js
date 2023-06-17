import React, { useState } from "react";
import MyNav from "../../nav-components/nav";
import BackBar from "../../nav-components/backBar";
import "../../ui-styling/index.css";
import "./index.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";
import LoginScreen from "./login-screen";
import RegisterScreen from "./register-screen";

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
      <div className="container">
        <h3 className="wd-pinkText text-center">Welcome!</h3>
        <br />
        <br />
        <div className="row ">
          <LoginScreen /> <RegisterScreen />
        </div>
      </div>
      <BackBar className={"fixed-bottom"} />
    </>
  );
}

export default Login;
