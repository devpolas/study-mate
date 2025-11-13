import { Navigate, useLocation } from "react-router";

export default function ProtectRoute({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
}
