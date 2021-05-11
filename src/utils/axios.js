import axios from "axios";

const axiosInstance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5001/onlinedeal-ac1d9/us-central1/api",
});

export default axiosInstance;
