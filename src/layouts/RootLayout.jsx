import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import useAuthContext from "../context/useAuthContext";

export default function RootLayout() {
  const navigation = useNavigation();
  const isPending = navigation.state === "loading";
  const { isLoading } = useAuthContext();

  return (
    <div className='px-4 sm:px-6 md:px-16'>
      <Navbar />
      <ToastContainer position='top-right' />
      <div className={`${isPending || isLoading ? "" : "min-h-[75vh] pb-12"}`}>
        {isPending ? (
          <div className='skeleton h-[75vh] w-full'></div>
        ) : (
          <Outlet />
        )}
      </div>

      <Footer />
    </div>
  );
}
