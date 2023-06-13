import React, { useState } from "react";
import "../../ui-styling/index.css";
import "./index.css";
import BlackTextBtn from "../../ui-styling/buttons/text/blackTextBtn";
import Banner from "./banner";
import roleArray from "./roles.json";
import { useDispatch } from "react-redux";
import { updateUser } from "../../reducers/userReducer";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
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
        email: email,
        role: password,
      })
    );
  };

  const validEmail = () => {
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email !== "" && email.match(format);
  };

  return (
    <>
      <h4 className="text-center">Create Account</h4>
      <br />
      {/* <form id="signUpForm" className="wd-margin"> */}
      <div
        id="signUpForm"
        className="wd-margin"
        onChange={() => setDisplayBanner(false)}
      >
        <label for="usernameRegister" className="mt-2">
          Username
        </label>
        <br />
        <input
          id="usernameRegister"
          type="text"
          className="form-control"
          onChange={(event) => setUsername(event.target.value)}
        />
        <label for="passwordRegister" className="mt-2">
          Password
        </label>
        <br />
        <input
          id="passwordRegister"
          type="password"
          className="form-control"
          onChange={(event) => setPassword(event.target.value)}
        />
        <label for="emailRegister" className="mt-2">
          Email
        </label>
        <br />
        <input
          id="emailRegister"
          type="password"
          className="form-control"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="mt-2">Role</label>
        <br />
        <select
          class="form-select"
          onChange={(event) => {
            setRole(event.target.value);
          }}
        >
          {roleArray.map((role) => {
            return (
              <option value={role.value} key={role.value}>
                {role.label}
              </option>
            );
          })}
        </select>
        <br />
        <BlackTextBtn text={"Register"} fn={submitBtn} />
        {/* </form> */}
      </div>
      <br />
      {displayBanner ? (
        <Banner success={username && password && validEmail && role} />
      ) : (
        ""
      )}
    </>
  );
}

export default Register;