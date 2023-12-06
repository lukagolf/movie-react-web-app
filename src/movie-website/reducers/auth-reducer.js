import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, updateUserThunk, registerThunk,
         saveMovieThunk, unsaveMovieThunk } from "../services/auth-thunks";

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
        setUser: (state, action) => {
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
        [saveMovieThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload.payload;
        },
        [unsaveMovieThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload.payload;
        }
    },
});

export const { storeUserInLocalStorage, removeUserFromLocalStorage, setUser } = authSlice.actions;
export default authSlice.reducer;