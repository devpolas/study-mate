import axios from "axios";

// https://study-mate-api.vercel.app/api/v1

const axiosPublic = axios.create({
  baseURL: "https://study-mate-api.vercel.app/api/v1",
});

export default axiosPublic;
