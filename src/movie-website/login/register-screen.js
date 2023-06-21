import React, { useState } from "react";
import "../../ui-styling/index.css";
import "./index.css";
import BlackTextBtn from "../../ui-styling/buttons/text/blackTextBtn";
import Banner from "./banner";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";
import { setUser, storeUserInLocalStorage } from "../reducers/auth-reducer";

const allRoles = [
    { value: 'ADMIN', label: 'Admin' },
    { value: 'CRITIC', label: 'Critic' },
    { value: 'VIEWER', label: 'Viewer' },
];

function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState([]);
    const [displayBanner, setDisplayBanner] = useState(false);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async () => {
        console.log('Register button clicked');
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

    const handleRoleChange = (event) => {
        if (role.includes(event.target.value)) {
            setRole(role.filter(r => r !== event.target.value));
        } else {
            if (event.target.value === 'CRITIC' && role.includes('VIEWER')) {
                alert('You cannot select both VIEWER and CRITIC roles!');
                return;
            }
            if (event.target.value === 'VIEWER' && role.includes('CRITIC')) {
                alert('You cannot select both VIEWER and CRITIC roles!');
                return;
            }
            setRole([...role, event.target.value]);
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
                    {/* <br />
                    {allRoles.map((roleOption) => {
                        return (
                            <div key={roleOption.value}>
                                <input type="checkbox" id={roleOption.value} value={roleOption.value} onChange={handleRoleChange} checked={role.includes(roleOption.value)} />
                                <label htmlFor={roleOption.value}>{roleOption.label}</label>
                            </div>
                        );
                    })}
                    <br /> */}
                    <BlackTextBtn text="Register" fn={handleRegister} />
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
