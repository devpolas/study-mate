import { GiBookAura } from "react-icons/gi";
export default function Logo() {
  return (
    <div className='min-w-24 max-w-32'>
      <div className='flex flex-col justify-center items-center border border-secondary-content p-1 rounded-md'>
        <GiBookAura className='text-5xl' />
        <p className='text-sm'>STUDY MATE</p>
      </div>
    </div>
  );
}
