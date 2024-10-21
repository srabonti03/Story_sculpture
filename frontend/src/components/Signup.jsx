import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';

function Signup() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="relative flex h-screen items-center justify-center bg-black">
      <div 
        className="absolute inset-0 animated-bg" 
        style={{ 
          backgroundImage: 'url("./splash.jpg")', 
          filter: 'blur(15px) brightness(0.3)', 
          zIndex: 0 
        }} 
      />

      <div className="relative border-2 border-gray-700 shadow-lg p-8 rounded-lg bg-gray-800 bg-opacity-80 backdrop-blur-md max-w-md w-full z-10">
        <div className="relative">
          <button 
            className="absolute right-2 top-2 text-white"
            onClick={handleClose}
          >
            ✕
          </button>
        </div>
        <h3 className="font-bold text-2xl text-center mb-4 text-white">
          Create <span className='text-pink-500'>Your Account</span>
        </h3>

        <div className='mt-4'>
          <label className='block mb-1 text-sm font-medium text-gray-300'>Email</label>
          <input 
            type='email' 
            placeholder='Enter your Email' 
            className='input-field w-full p-2 border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 bg-gray-700 text-white'
          />
        </div>

        <div className='mt-4'>
          <label className='block mb-1 text-sm font-medium text-gray-300'>Password</label>
          <input 
            type='password' 
            placeholder='Create a password' 
            className='input-field w-full p-2 border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 bg-gray-700 text-white'
          />
        </div>

        <div className='mt-4'>
          <label className='block mb-1 text-sm font-medium text-gray-300'>Confirm Password</label>
          <input 
            type='password' 
            placeholder='Confirm your password' 
            className='input-field w-full p-2 border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 bg-gray-700 text-white'
          />
        </div>

        <div className='flex flex-col items-center mt-6'>
          <button className='bg-pink-500 text-white rounded-md px-5 py-2 hover:bg-pink-700 duration-200 w-full'>
            Sign Up
          </button>

          <p className='mt-2 text-sm text-center text-gray-400'>
            Already have an account? 
            <button className='underline text-blue-400 cursor-pointer ml-1 hover:text-blue-600 duration-200'
            onClick={() => document.getElementById("my_modal_3").showModal()}>
              Login
            </button>{" "}
            <Login/>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
