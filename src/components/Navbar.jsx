import MobileNav from "./MobileNav";
import NavAuth from "./NavAuth";
import NavLinks from "./NavLinks";
import Logo from "./ui/Logo";

export default function Navbar() {
  return (
    <div className='py-4 flex flex-row justify-between shadow px-4 h-20 glass-effect rounded'>
      <div className='flex flex-row gap-2'>
        <MobileNav />
        <Logo />
      </div>
      <NavLinks />
      <NavAuth />
    </div>
  );
}
