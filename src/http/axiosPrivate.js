import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: "https://study-mate-api.vercel.app/api/v1",
});

axiosPrivate.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosPrivate;
