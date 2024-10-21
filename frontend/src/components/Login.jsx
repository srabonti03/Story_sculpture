import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" className="relative">
            <button className="absolute right-2 top-2 text-white">✕</button>
          </form>
          <h3 className="font-bold text-lg text-center">Welcome <span className='text-pink-500'>Back!</span></h3>

          <div className='mt-6'>
            <label className='block mb-1'>Email</label>
            <input 
              type='email' 
              placeholder='Enter your Email' 
              className='input-field'
            />
          </div>

          <div className='mt-4'>
            <label className='block mb-1'>Password</label>
            <input 
              type='password' 
              placeholder='Enter your password' 
              className='input-field'
            />
          </div>

          <div className='flex flex-col items-center mt-6'>
            <button className='bg-pink-500 text-white rounded-md px-5 py-2 hover:bg-pink-700 duration-200 w-full'>
              Login
            </button>
            <p className='mt-2 text-sm text-center'>
              Not registered? 
              <Link to="/signup" className='underline text-blue-500 cursor-pointer ml-1 hover:text-blue-700 duration-200'>Sign up</Link>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
