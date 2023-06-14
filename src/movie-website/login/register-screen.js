import React, { useState } from "react";
import "../../ui-styling/index.css";
import "./index.css";
import BlackTextBtn from "../../ui-styling/buttons/text/blackTextBtn";
import Banner from "./banner";
import roleArray from "./roles.json";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";

function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [displayBanner, setDisplayBanner] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validEmail = () => {
        let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return email !== "" && email.match(format);
    };

    const handleRegister = async () => {
        setDisplayBanner(true);
        try {
            await dispatch(registerThunk({ username, password, firstName, lastName, email, role }));
            navigate("/profile");
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
                    <label htmlFor="usernameRegister" className="mt-2">
                        Username
                    </label>
                    <br />
                    <input className="form-control" id="usernameRegister" type="text" value={username}
                        onChange={(event) => setUsername(event.target.value)} />
                    <label htmlFor="passwordRegister" className="mt-2">
                        Password
                    </label>
                    <br />
                    <input className="form-control" id="passwordRegister" type="password" value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                    <label htmlFor="firstNameRegister" className="mt-2">
                        First Name
                    </label>
                    <br />
                    <input
                        id="firstNameRegister"
                        type="text"
                        className="form-control"
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                    <label htmlFor="lastNameRegister" className="mt-2">
                        Last Name
                    </label>
                    <br />
                    <input
                        id="lastNameRegister"
                        type="text"
                        className="form-control"
                        onChange={(event) => setLastName(event.target.value)}
                    />
                    <label htmlFor="emailRegister" className="mt-2">
                        Email
                    </label>
                    <br />
                    <input
                        id="emailRegister"
                        type="email"
                        className="form-control"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label htmlFor="role" className="mt-2">
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
                    <Banner success={username && password && validEmail && role} />
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

export default RegisterScreen;
