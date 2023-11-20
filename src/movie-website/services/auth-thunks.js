import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        const user = await authService.login(credentials);
        console.log("response from the login service", user)
        return user;
    }
);

export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
        const response = await authService.profile();
        console.log("PROFILE THUNK")
        return response.data;
    });

export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        console.log("LOGOUT THUNK")
        return await authService.logout();
    });

export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        console.log("UPDATE USER THUNK")
        await authService.updateUser(user);
        return user;
    });

export const registerThunk = createAsyncThunk(
    "user/register", async (credentials) => {
        console.log("REGISTER THUNK")
        const user = await authService.register(credentials);
        return user;
    }
);

export const fetchProfileByUsernameThunk = createAsyncThunk(
    "auth/fetchProfileByUsername",
    async (username) => {
        console.log("AUTH THUNK: Getting by username")
        const response = await authService.getProfileByUsername(username)
        console.log("WE GOT " + JSON.stringify(response.data))
        return response.data;
    }
);