import MobileNav from "./MobileNav";
import NavAuth from "./NavAuth";
import NavLinks from "./NavLinks";
import NavUser from "./NavUser";
import Logo from "./ui/Logo";
import ThemeSwitch from "./ui/ThemeSwitch";

export default function Navbar() {
  const isAuth = true;
  return (
    <div className='py-4 flex flex-row justify-between shadow light:border light:border-primary-content px-4 h-20 glass-effect rounded relative z-1000'>
      <div className='flex flex-row gap-2'>
        <MobileNav />
        <div className='flex flex-row gap-4 items-center'>
          <Logo />
          <ThemeSwitch />
        </div>
      </div>
      <NavLinks />
      {isAuth ? <NavUser /> : <NavAuth />}
    </div>
  );
}
