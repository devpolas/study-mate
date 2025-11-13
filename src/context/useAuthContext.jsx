import { useContext } from "react";
import AuthContext from "./CreateAuthContext";

export default function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("You are use context outside the provider!");
  }
  return context;
}
