import axios from "axios";
import api from "./api";

export const getAllUsers = async () => {
  const response = await axios.get(
    "https://study-mate-api.vercel.app/api/v1/users"
  );
  return response.data;
};
export const getSingleUser = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};
export const getMe = async () => {
  const response = await api.get("/users/me");
  return response.data;
};
export const getAllFriend = async (id) => {
  const response = await api.get(`/friendships/all-friends/${id}`);
  return response.data;
};
export const getAllFriendRequest = async (id) => {
  const response = await api.get(`/friendships/all-requested-friends/${id}`);
  return response.data;
};
