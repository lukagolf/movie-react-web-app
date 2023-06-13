import { createSlice } from "@reduxjs/toolkit";

// user information before login
const initialState = {
  signedIn : false,
  id: "",
  username: "",
  password: "",
  email: "",
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateUser: (state, action) => {
      state.signedIn = false;
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    removeUser: (state, action) => {
      state.signedIn = false;
      state.id = "";
      state.username = "";
      state.password = "";
      state.email = "";
      state.role = "";
    },
  },
});

export default userSlice.reducer;
export const { updateUser, removeUser } = userSlice.actions;