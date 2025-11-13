import { useState } from "react";
import AuthContext from "./Context";
import api from "./../utils/api";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { appAuth } from "./../features/firebase.config";

export default function AuthContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const googleAuthProvider = new GoogleAuthProvider();

  const signup = async (name, email, password, confirmPassword) => {
    setIsLoading(true);
    setIsError("");
    try {
      const response = await api.post("/users/signup", {
        name,
        email,
        password,
        confirmPassword,
      });
      localStorage.setItem("token", response.data?.token);
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || error.message || "An error occurred.";
      setIsError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };
  const login = async (email, password) => {
    setIsLoading(true);
    setIsError("");
    try {
      const response = await api.post("/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data?.token);
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || error.message || "An error occurred.";
      setIsError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setIsLoading(true);
    return signInWithPopup(appAuth, googleAuthProvider);
  };

  const socialLogin = async () => {
    setIsLoading(true);
    setIsError("");
    try {
      const credential = await signInWithGoogle();
      const idToken = await credential.user.getIdToken();
      const response = await api.post("/users/social-login", {
        googleAuthToken: idToken,
      });
      localStorage.setItem("token", response.data?.token);
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || error.message || "An error occurred.";
      setIsError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setIsError("");
    try {
      await api.post("/users/logout");
      localStorage.removeItem("token");
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || error.message || "An error occurred.";
      setIsError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    signup,
    socialLogin,
    login,
    logout,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
  };
  return <AuthContext value={value}>{children}</AuthContext>;
}
