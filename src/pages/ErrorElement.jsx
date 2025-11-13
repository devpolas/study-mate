import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function ErrorElement() {
  return (
    <div className='px-4 sm:px-6 md:px-16'>
      <Navbar />
      <div className='min-h-[75vh] pb-12'>
        <div className='h-[70vh] flex flex-col justify-center items-center text-center'>
          <h1 className='text-5xl sm:text-7xl md:text-9xl font-bold text-error mb-4'>
            404
          </h1>
          <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-2'>
            Oops! Page not found
          </h2>
          <p className='mb-6 text-gray-600'>
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to='/' className='btn btn-primary'>
            Go Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
