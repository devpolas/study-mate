import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className='px-4 sm:px-6 md:px-16 lg:px-24'>
      <Outlet />
    </div>
  );
}
