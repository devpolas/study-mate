import { Navigate, Outlet, useLocation } from "react-router";
import useAuthContext from "../context/useAuthContext";

export default function PublicRoute() {
  const location = useLocation();
  const { token, isLoading } = useAuthContext();

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <span className='loading loading-spinner text-primary text-3xl'></span>
      </div>
    );
  }

  if (token !== null) {
    return <Navigate to={location.state?.from || "/"} replace />;
  }

  return <Outlet />;
}
