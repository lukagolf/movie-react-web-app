import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, updateUserThunk, registerThunk,
         fetchProfileByUsernameThunk } from "../services/auth-thunks";

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
            const roles = rolesArray(state.currentUser.role1, state.currentUser.role2)
            state.currentUser = {...state.currentUser, roles}
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
            const roles = rolesArray(state.currentUser.role1, state.currentUser.role2)
            state.currentUser = {...state.currentUser, roles}
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
            const roles = rolesArray(state.currentUser.role1, state.currentUser.role2)
            state.currentUser = {...state.currentUser, roles}
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
            const roles = rolesArray(state.currentUser.role1, state.currentUser.role2)
            state.currentUser = {...state.currentUser, roles}
        },
        [fetchProfileByUsernameThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
    },
});

const rolesArray = (role1, role2) => {
    if (role2) {
        return [role1.toUpperCase(), role2.toUpperCase()]
    } else {
        return [role1.toUpperCase()]
    }
}

export const { storeUserInLocalStorage, removeUserFromLocalStorage, setUser } = authSlice.actions;
export default authSlice.reducer;