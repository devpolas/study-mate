import axios from "axios";

const api = axios.create({
  baseURL: "https://study-mate-api.vercel.app/api/v1",
  withCredentials: true,
});

// get access token from local storage
function getAccessToken() {
  return localStorage.getItem("token");
}

api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
