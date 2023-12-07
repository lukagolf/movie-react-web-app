import React, { useState, useEffect } from "react";
import "../../ui-styling/index.css";
import "./index.css";
import BlackTextBtn from "../../ui-styling/buttons/text/blackTextBtn";
import Banner from "./banner";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";
import { setUser, storeUserInLocalStorage } from "../reducers/auth-reducer";
import Multiselect from 'multiselect-react-dropdown';

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
    const [previousRole, setPreviousRole] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async () => {
        setDisplayBanner(true);
        if (username === '' || password === '' || firstName === '' || lastName === '' || email === '' || role.length === 0) {
            alert("Please fill out all fields.");
            return;
        }
        try {
            const roles = role.map(r => r.value);
            const actionResult = await dispatch(registerThunk({ username, password, firstName, lastName, email, roles }));
            if (registerThunk.fulfilled.match(actionResult)) {
                setSuccess(true);
                dispatch(setUser(actionResult.payload));
                dispatch(storeUserInLocalStorage(actionResult.payload));
                navigate(`/profile`);
            } else {
                setSuccess(false);
                if (!success) {
                    alert("Username or email address is already taken.")
                }
            }
        } catch (e) {
            alert(e);
        }
    };



    const onSelect = (selectedList, selectedItem) => {
        setPreviousRole(role);
        setRole([...selectedList]);
    }

    const onRemove = (selectedList, removedItem) => {
        setPreviousRole(role);
        setRole([...selectedList]);
    }

    useEffect(() => {
        if (role.length > 2 ||
            (role.find(item => item.value === 'VIEWER') && role.find(item => item.value === 'CRITIC')) ||
            (role.find(item => item.value === 'ADMIN') && role.find(item => item.value === 'CRITIC')))  {
            alert('Viewer and Admin are the only compatible roles');
            setRole(previousRole);
        }
    }, [role, previousRole]);

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
                    <Multiselect
                        options={allRoles}
                        isObject={true}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="label"
                        id="role"
                        placeholder="Pick your role(s)"
                        selectedValues={role}
                    />
                    <br />
                    <BlackTextBtn text="Register" fn={handleRegister} />
{/* 
                    <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select Role
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" value='Admin'>Admin</a>
                        <a className="dropdown-item" value='Viewer'>Viewer </a>
                        <a className="dropdown-item" value='Critic'>Critic </a>
                    </div>
                    </div> */}
                    <br />
                    <br />
                    <br />
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
