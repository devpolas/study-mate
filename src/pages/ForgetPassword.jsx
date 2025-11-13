import { Link, useLocation } from "react-router";

export default function ForgetPassword() {
  const location = useLocation();
  return (
    <div className='flex flex-col justify-center items-center min-h-[70vh]'>
      <div>
        <fieldset className='fieldset bg-base-200 border-base-300 shadow-md rounded-box w-xs border p-4'>
          <legend className='fieldset-legend w-full text-lg'>
            Forget Password
          </legend>

          <label htmlFor='email' className='label text-sm'>
            Email
          </label>
          <input
            defaultValue={location?.state}
            required
            name='email'
            type='email'
            className='input text-sm'
            placeholder='Email'
          />
          <div className='flex flex-row justify-between'>
            <Link
              to={-1}
              className='btn btn-md btn-outline btn-error mt-2 text-sm'
            >
              Cancel
            </Link>
            <Link
              target='_blank'
              to='https://mail.google.com/'
              className='btn btn-md btn-primary btn-outline mt-2 text-sm'
            >
              Forget
            </Link>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
