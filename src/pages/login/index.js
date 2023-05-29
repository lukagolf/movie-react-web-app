import React from "react";
import MyNav from "../../common-components/nav";
import BackBar from "../../common-components/backBar";
import "../../ui-styling/index.css";
import "./index.css";
import BlackTextBtn from "../../ui-styling/buttons/text/blackTextBtn";

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
            <form id="loginForm" className="wd-padding">
              <label for="username">Username</label>
              <br />
              <input id="username" className="form-control" />
              <label for="password">Password</label>
              <br />
              <input id="password" className="form-control" />
              <br />
              <BlackTextBtn text={"Register"} />
            </form>
          </div>

          <div className="wd-vline col-6">
            <h4 className="text-center">Create Account</h4>
            <br />
            <form id="signUpForm" className="wd-padding">
              <label for="username">Username</label>
              <br />
              <input id="username" className="form-control" />
              <label for="password">Password</label>
              <br />
              <input id="password" className="form-control" />
              <label for="role">Role</label>
              <br />
              <select class="form-select">
                <option value="VIEWER" selected>
                  Viewer
                </option>
                <option value="CRITIC">Critic</option>
                <option value="ADMIN">Admin</option>
              </select>
              <label for="email">Email</label>
              <br />
              <input id="email" className="form-control" />
              <br />
              <BlackTextBtn text={"Register"} />
            </form>
          </div>
        </div>
      </div>
      <BackBar />
    </>
  );
}

export default Login;
