import api from "./api";

export const getAllUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};
export const getMe = async () => {
  const response = await api.get("/me");
  return response.data;
};
