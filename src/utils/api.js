import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: "https://study-mate-api.vercel.app/api/v1",
  withCredentials: true, // include cookies for refresh token
});

// Get access token from local storage
function getAccessToken() {
  return localStorage.getItem("token");
}

// Request interceptor to attach token
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle 401 and refresh token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!error.response) return Promise.reject(error);

    // If 401 and request not retried
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.removeItem("token");
      return Promise.reject(error);
    }
  }
);

export default api;
