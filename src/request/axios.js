import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://nxtdev1api.azurewebsites.net",
  timeout: 10000,
  headers: {
    Authorization:
      "Bearer 4F1E52F1CB506CC6B0EAF30CAF77E14DBB0DF5A93F8F3015635A0C047D5B2804-1",
    "Content-Type": "Application/json",
  },
});
