import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://study-mate-api.vercel.app/api/v1",
});

export default axiosPublic;
