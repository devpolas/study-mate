import axios from "axios";
import axiosPrivate from "../http/axiosPrivate";

export const getAllUsers = async () => {
  const response = await axios.get(
    "https://study-mate-api.vercel.app/api/v1/users"
  );
  return response.data;
};

export const getAllFriend = async (id) => {
  const response = await axiosPrivate.get(`/friendships/all-friends/${id}`);
  return response.data;
};
export const getAllFriendRequest = async (id) => {
  const response = await axiosPrivate.get(
    `/friendships/all-requested-friends/${id}`
  );
  return response.data;
};
