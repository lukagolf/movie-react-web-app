import React, { useState } from "react";
import "../../ui-styling/index.css";
import "./index.css";
import BlackTextBtn from "../../ui-styling/buttons/text/blackTextBtn";
import Banner from "./banner";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";

function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                <form id="signUpForm" className="wd-margin">
                    <label for="username" className="mt-2">
                        Username
                    </label>
                    <br />
                    <input className="form-control" id="username" type="text" value={username}
                        onChange={(event) => setUsername(event.target.value)} />
                    <label for="password" className="mt-2">
                        Password
                    </label>
                    <br />
                    <input className="form-control" id="password" type="password" value={password}
                        onChange={(event) => setPassword(event.target.value)} />
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
                    <BlackTextBtn text={"Register"} onClick={handleRegister} />
                </form>
                <br />
                <Banner success={true} />
                <Banner success={false} />
            </div>
        </>
    );
}

export default RegisterScreen;
