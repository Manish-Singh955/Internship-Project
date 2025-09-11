// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // adjust if your backend URL differs
  withCredentials: true,                // IMPORTANT: send cookies
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;