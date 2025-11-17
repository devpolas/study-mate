import { Navigate, Outlet, useLocation } from "react-router";
import useAuthContext from "../context/useAuthContext";

export default function ProtectRoute() {
  const location = useLocation();
  const { token, isLoading } = useAuthContext();

  // Loading state - wait for auth check
  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <span className='loading loading-spinner text-primary text-3xl'></span>
      </div>
    );
  }

  if (token) {
    return <Outlet />;
  }

  return <Navigate to='/login' state={{ from: location.pathname }} replace />;
}
