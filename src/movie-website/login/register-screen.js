import React, { useState } from "react";
import "../../ui-styling/index.css";
import "./index.css";
import BlackTextBtn from "../../ui-styling/buttons/text/blackTextBtn";
import Banner from "./banner";
import roleArray from "./roles.json";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";
import { setUser } from "../reducers/auth-reducer";
import { storeUserInLocalStorage } from "../reducers/auth-reducer";

function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [displayBanner, setDisplayBanner] = useState(false);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async () => {
        setDisplayBanner(true);
        try {
            const actionResult = await dispatch(registerThunk({ username, password, firstName, lastName, email, role }));
            if (registerThunk.fulfilled.match(actionResult)) {
                setSuccess(true);
                dispatch(setUser(actionResult.payload));
                dispatch(storeUserInLocalStorage(actionResult.payload));
                navigate(`/profile/${username}`);
              } else {
                setSuccess(false);
                throw new Error(actionResult.error.message);
            }
        } catch (e) {
            alert(e);
        }
    };

    return (
        <>
            <div className="wd-vline col-6">
                <h4 className="text-center">Create Account</h4>
                <br />
                <div id="signUpForm" className="wd-margin"
                    onChange={() => setDisplayBanner(false)}>
                    <label for="usernameRegister" className="mt-2">
                        Username
                    </label>
                    <br />
                    <input className="form-control" id="usernameRegister" type="text" value={username}
                        onChange={(event) => setUsername(event.target.value)} />
                    <label for="passwordRegister" className="mt-2">
                        Password
                    </label>
                    <br />
                    <input className="form-control" id="passwordRegister" type="password" value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                    <label for="firstNameRegister" className="mt-2">
                        First Name
                    </label>
                    <br />
                    <input
                        id="firstNameRegister"
                        type="text"
                        className="form-control"
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                    <label for="lastNameRegister" className="mt-2">
                        Last Name
                    </label>
                    <br />
                    <input
                        id="lastNameRegister"
                        type="text"
                        className="form-control"
                        onChange={(event) => setLastName(event.target.value)}
                    />
                    <label for="emailRegister" className="mt-2">
                        Email
                    </label>
                    <br />
                    <input
                        id="emailRegister"
                        type="email"
                        className="form-control"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label for="role" className="mt-2">
                        Role
                    </label>
                    <br />
                    <select id="role" className="form-select" onChange={(event) => {
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
                    <BlackTextBtn text={"Register"} fn={handleRegister} />
                </div>
                <br />
                {displayBanner ? (
                    <Banner success={success} />
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

export default RegisterScreen;
