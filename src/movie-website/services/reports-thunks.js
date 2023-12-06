import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./reports-service";
import { create } from "@mui/material/styles/createTransitions";


export const createReportThunk = createAsyncThunk(
  "reports/createReport",
  async (report) => {
      return await service.createReport(report);
  }
);

export const findAdminReportsThunk = createAsyncThunk(
  "reports/findAdminReports",
  async (adminUsername) => {
    return await service.findAdminReports(adminUsername);
  }
)

export const resolveReportThunk = createAsyncThunk(
  "reports/resolveReport",
  async (rep_id) => {
    console.log("resolving report")
     await service.resolveReport(rep_id)
  }
)