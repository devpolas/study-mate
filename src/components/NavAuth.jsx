import { Link } from "react-router";

export default function NavAuth() {
  return (
    <div>
      <div className='flex flex-row gap-2'>
        <Link to='/login' className='btn btn-outline btn-info'>
          Login
        </Link>
        <Link
          to='/signup'
          className='btn btn-outline btn-primary hidden lg:flex'
        >
          Signup
        </Link>
      </div>
    </div>
  );
}
