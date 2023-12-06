import axios from 'axios';
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const REPORTS_API = `${SERVER_API_URL}/reports`;

export const createReport = async (report) => {
    const response = await axios.post(REPORTS_API, report);
    return response.data;
}

export const findAdminReports = async (adminUsername) => {
    const response = await axios.get(`${REPORTS_API}/${adminUsername}`);
    return response.data;
}

export const resolveReport = async (rep_id) => {
  const response = await axios.put(`${REPORTS_API}/resolve/${rep_id}`)
  return response.data
}