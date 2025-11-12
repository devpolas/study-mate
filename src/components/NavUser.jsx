import { Link } from "react-router";

export default function NavUser() {
  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex={0} role='button'>
        <img
          className='w-12 h-12 mr-4 rounded-full border border-primary cursor-pointer'
          src='https://i.ibb.co.com/nT9TXxz/Polas-CB.jpg'
          alt='Profile Picture'
        />
      </div>
      <ul
        tabIndex='-1'
        className='dropdown-content menu bg-base-100 rounded-md z-1 w-52 p-4 shadow-sm flex justify-center items-center gap-4'
      >
        <Link
          to={"/profile"}
          className='text-green-600 text-sm font-semibold hover:underline'
        >
          My Profile
        </Link>

        <button className='btn btn-error btn-outline btn-sm'>Logout</button>
      </ul>
    </div>
  );
}
