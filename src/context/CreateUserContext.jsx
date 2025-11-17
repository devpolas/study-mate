import { createContext } from "react";

const UserContext = createContext({
  updateMe: () => {},
  sendFriendRequest: () => {},
  acceptFriendRequest: () => {},
  unfriend: () => {},
  deleteRequest: () => {},
  isLoading: false,
  setIsLoading: () => {},
  isError: "",
  setIsError: () => {},
});

export default UserContext;
