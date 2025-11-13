import { createContext } from "react";

const AuthContext = createContext({
  signup: () => {},
  socialLogin: () => {},
  login: () => {},
  logout: () => {},
  isLoading: false,
  setIsLoading: () => {},
  isError: "",
  setIsError: () => {},
  token: "",
});

export default AuthContext;
