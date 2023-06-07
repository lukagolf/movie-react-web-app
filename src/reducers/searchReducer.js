import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    actor: "",
    director: "",
    year: "",
    genre: ""
};

const searchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        updateSearch: (state, action) => {
            state.search = action.payload.search;
            state.actor = action.payload.actor;
            state.director = action.payload.director;
            state.year = action.payload.year;
            state.genre = action.payload.genre;
        }
    }
});

export default searchSlice.reducer;
export const {updateSearch} = searchSlice.actions;