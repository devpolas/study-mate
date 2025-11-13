import { useContext } from "react";
import UserContext from "./CreateUserContext";

export default function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("You are use context outside the provider!");
  }
  return context;
}
