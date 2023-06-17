import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, updateUserThunk, registerThunk } from "../services/auth-thunks";

const authSlice = createSlice({
    name: "auth",
    initialState: { currentUser: null },
    reducers: {
        storeUserInLocalStorage: (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.currentUser = action.payload;
        },
        removeUserFromLocalStorage: (state) => {
            localStorage.removeItem('user');
            state.currentUser = null;
        },
        setUser: (state, action) => {  // <== Add this
            state.currentUser = action.payload;
        },
    },
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
    },
});

export const { storeUserInLocalStorage, removeUserFromLocalStorage, setUser } = authSlice.actions;
export default authSlice.reducer;