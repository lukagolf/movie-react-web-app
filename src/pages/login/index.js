import React from "react";
import MyNav from "../../common-components/nav";
import BackBar from "../../common-components/backBar";
import "../../ui-styling/index.css";
import "./index.css";
import BlackTextBtn from "../../ui-styling/buttons/text/blackTextBtn";
import Banner from "./banner";

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
          <div className="col-6">
            <h4 className="text-center">Sign In</h4>
            <br />
            <form id="loginForm" className="wd-margin">
              <label for="username" className="mt-2">
                Username
              </label>
              <br />
              <input id="username" className="form-control" />
              <label for="password" className="mt-2">
                Password
              </label>
              <br />
              <input id="password" className="form-control" />
              <br />
              <BlackTextBtn text={"Sign In"} />
            </form>
            <br />
            <Banner success={true} />
            <Banner success={false} />
          </div>

          <div className="wd-vline col-6">
            <h4 className="text-center">Create Account</h4>
            <br />
            <form id="signUpForm" className="wd-margin">
              <label for="username" className="mt-2">
                Username
              </label>
              <br />
              <input id="username" type="text" className="form-control" />
              <label for="password" className="mt-2">
                Password
              </label>
              <br />
              <input id="password" type="password" className="form-control" />
              <label for="role" className="mt-2">
                Role
              </label>
              <br />
              <select class="form-select">
                <option value="VIEWER" selected>
                  Viewer
                </option>
                <option value="CRITIC">Critic</option>
                <option value="ADMIN">Admin</option>
              </select>
              <label for="email" className="mt-2">
                Email
              </label>
              <br />
              <input id="email" type="email" className="form-control" />
              <br />
              <BlackTextBtn text={"Register"} />
            </form>
            <br />
            <Banner success={true} />
            <Banner success={false} />
          </div>
        </div>
      </div>
      <BackBar className={"fixed-bottom"} />
    </>
  );
}

export default Login;
