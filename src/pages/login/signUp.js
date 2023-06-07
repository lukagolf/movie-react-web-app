import React, { useState } from "react";
import "../../ui-styling/index.css";
import "./index.css";
import BlackTextBtn from "../../ui-styling/buttons/text/blackTextBtn";
import Banner from "./banner";
import { useDispatch } from "react-redux";
import { updateUser } from "../../reducers/userReducer";

function SignUp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [displayBanner, setDisplayBanner] = useState(false);

  const dispatch = useDispatch();

  // display banner and store username and password in state
  const submitBtn = () => {
    setDisplayBanner(true);
    dispatch(
      updateUser({
        signedIn: true,
        id: "",
        username: username,
        password: password,
        email: "",
        role: "",
      })
    );
  };

  return (
    <>
      <h4 className="text-center">Sign In</h4>
      <br />
      {/* <form id="loginForm" className="wd-margin"> */}
      <div id="loginForm" className="wd-margin" onChange={() => setDisplayBanner(false)}>
        <label for="usernameLogin" className="mt-2">
          Username
        </label>
        <br />
        <input
          id="usernameLogin"
          className="form-control"
          // value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label for="passwordLogin" className="mt-2">
          Password
        </label>
        <br />
        <input
          id="passwordLogin"
          className="form-control"
          // value
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <BlackTextBtn text={"Sign In"} fn={submitBtn} />
      </div>
      {/* </form> */}
      <br />
      {displayBanner ? <Banner success={username && password} /> : ""}
    </>
  );
}

export default SignUp;