import UserContext from "./CreateUserContext";
import axiosPrivate from "./../http/axiosPrivate";
import { useState } from "react";

export default function UserContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const updateMe = async (object) => {
    setIsLoading(true);
    setIsError("");
    try {
      await axiosPrivate.patch(`/users/updateMe`, object);
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
      await axiosPrivate.post(`/friendships/send-request`, {
        recipientId: recipient,
      });
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
      await axiosPrivate.post(`/friendships/accept-request`, {
        requesterId: recipient,
      });
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
      await axiosPrivate.post(`/friendships/unfriend`, {
        recipientId: recipient,
      });
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
  const deleteRequest = async (recipient) => {
    setIsLoading(true);
    setIsError("");
    try {
      await axiosPrivate.post(`/friendships/delete-request`, {
        recipientId: recipient,
      });
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
    deleteRequest,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
  };
  return <UserContext value={value}>{children}</UserContext>;
}
