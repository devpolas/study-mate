import UserContext from "./CreateUserContext";
import api from "./../utils/api";
import { useState } from "react";

export default function UserContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const updateMe = async (object) => {
    setIsLoading(true);
    setIsError("");
    try {
      await api.post(`/users/updateMe`, { object });
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || error.message || "An error occurred.";
      setIsError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };
  const sendFriendRequest = async ({ requester, recipient }) => {
    setIsLoading(true);
    setIsError("");
    try {
      await api.post(`/friendships/send-request`, { requester, recipient });
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || error.message || "An error occurred.";
      setIsError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };
  const acceptFriendRequest = async ({ requester, recipient }) => {
    setIsLoading(true);
    setIsError("");
    try {
      await api.post(`/friendships/accept-request`, { requester, recipient });
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || error.message || "An error occurred.";
      setIsError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };
  const unfriend = async ({ requester, recipient }) => {
    setIsLoading(true);
    setIsError("");
    try {
      await api.post(`/friendships/unfriend`, { requester, recipient });
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || error.message || "An error occurred.";
      setIsError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };
  const value = {
    updateMe,
    sendFriendRequest,
    acceptFriendRequest,
    unfriend,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
  };
  return <UserContext value={value}>{children}</UserContext>;
}
