import axios from "axios";

const api = axios.create({
  baseURL: "https://study-mate-api.vercel.app/api/v1",
  withCredentials: true,
});

// get access token from local storage
function getAccessToken() {
  const token = localStorage.getItem("token");
  return token;
}

api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
