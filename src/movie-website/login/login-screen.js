import React, { useState } from "react";
import "../../ui-styling/index.css";
import "./index.css";
import BlackTextBtn from "../../ui-styling/buttons/text/blackTextBtn";
import Banner from "./banner";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";

function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await dispatch(loginThunk({ username, password }));
            navigate("/movie-website/profile");
        } catch (e) {
            alert(e);
        }
    };
    return (
        <>
                <div className="col-6">
                    <h4 className="text-center">Sign In</h4>
                    <br />
                    <form id="loginForm" className="wd-margin">
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
                        <br />
                        <BlackTextBtn text={"Sign In"} onClick={handleLogin} />
                    </form>
                    <br />
                    <Banner success={true} />
                    <Banner success={false} />
                </div>
        </>
    );
}

export default LoginScreen;
