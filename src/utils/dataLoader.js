import api from "./api";

export const getAllUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};
export const getMe = async () => {
  const response = await api.get("/me");
  return response.data;
};

export const sendFriendRequest = async (requester, recipient) => {
  const response = await api.post("/friendship/send-request", {
    requester,
    recipient,
  });
  return response.data;
};

export const acceptFriendRequest = async (requester, recipient) => {
  const response = await api.post("/friendship/accept-request", {
    requester,
    recipient,
  });
  return response.data;
};
