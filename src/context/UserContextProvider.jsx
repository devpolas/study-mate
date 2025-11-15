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
      await api.patch(`/users/updateMe`, object);
      return true;
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || error.message || "An error occurred.";
      setIsError(errorMsg);
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  const sendFriendRequest = async (recipient) => {
    setIsLoading(true);
    setIsError("");
    try {
      await api.post(`/friendships/send-request`, { recipientId: recipient });
      return true;
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || error.message || "An error occurred.";
      setIsError(errorMsg);
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  const acceptFriendRequest = async (recipient) => {
    setIsLoading(true);
    setIsError("");
    try {
      await api.post(`/friendships/accept-request`, { recipient: recipient });
      return true;
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || error.message || "An error occurred.";
      setIsError(errorMsg);
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  const unfriend = async (recipient) => {
    setIsLoading(true);
    setIsError("");
    try {
      await api.post(`/friendships/unfriend`, { recipientId: recipient });
      return true;
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || error.message || "An error occurred.";
      setIsError(errorMsg);
      return false;
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
