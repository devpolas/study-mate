import { Navigate, useLocation } from "react-router";
import { useEffect } from "react";

export default function ProtectRoute({ children }) {
  const location = useLocation();
  let token;
  useEffect(() => {
    token = localStorage.getItem("token");
  }, []);

  if (token || token !== null) {
    return children;
  }
  return <Navigate state={location?.pathname} to='/login' />;
}
