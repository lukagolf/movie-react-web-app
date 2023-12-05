import { createSlice } from "@reduxjs/toolkit";
import { findAdminReportsThunk } from "../services/reports-thunks";

const initialState = {
  reports: [],
  loading: false,
  error: null
};

const reportSlice = createSlice({
    name: "reports",
    initialState,
    reducers: {},
    extraReducers: {
        [findAdminReportsThunk.pending]: (state) => {
            state.loading = true;
            state.reports = [];
        },
        [findAdminReportsThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            console.log("REPORTS IS " + JSON.stringify(payload))
            state.reports = payload;
        },
        [findAdminReportsThunk.rejected]: (state, action) => {
            state.loading = false;
            state.reports = [];
            state.error = action.error;
        }
    }
});

export default reportSlice.reducer;