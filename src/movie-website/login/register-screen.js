import React, { useState } from "react";
import "../../ui-styling/index.css";
import "./index.css";
import BlackTextBtn from "../../ui-styling/buttons/text/blackTextBtn";
import Banner from "./banner";
import { updateUser } from "../reducers/user-reducer";
import roleArray from "./roles.json";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";

function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [displayBanner, setDisplayBanner] = useState(false);

    const navigate = useNavigate();
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

    const handleRegister = async () => {
        try {
            await dispatch(registerThunk({ username, password }));
            navigate("/tuiter/profile");
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
                    <label for="role" className="mt-2">
                        Role
                    </label>
                    <br />
                    <select class="form-select" onChange={(event) => {
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
                    <BlackTextBtn text={"Register"} onClick={handleRegister} fn={submitBtn} />
                </div>
                <br />
                {displayBanner ? (
                    <Banner success={username && password && validEmail && role} />
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

export default RegisterScreen;
