import { useLoaderData } from "react-router";
import MateIntro from "./../components/MateIntro";

export default function FindPartnerPage() {
  const allUsers = useLoaderData();
  const data = allUsers?.data?.users;
  return (
    <div className=' pt-8'>
      <div className='flex justify-center items-center sm:justify-around flex-col sm:flex-row'>
        <label className='input'>
          <svg
            className='h-[1em] opacity-50'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <g
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='2.5'
              fill='none'
              stroke='currentColor'
            >
              <circle cx='11' cy='11' r='8'></circle>
              <path d='m21 21-4.3-4.3'></path>
            </g>
          </svg>
          <input type='search' required placeholder='Search' />
        </label>

        <form className='flex flex-row gap-1 ml-2 sm:ml-0 mt-4 sm:mt-0'>
          <input
            className='btn'
            type='checkbox'
            name='frameworks'
            aria-label='Svelte'
          />
          <input
            className='btn'
            type='checkbox'
            name='frameworks'
            aria-label='Vue'
          />
          <input
            className='btn'
            type='checkbox'
            name='frameworks'
            aria-label='React'
          />
          <input className='btn btn-square' type='reset' value='×' />
        </form>
      </div>
      <div className='divider'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2'>
        {data.map((mate) => (
          <MateIntro {...mate} />
        ))}
      </div>
    </div>
  );
}
