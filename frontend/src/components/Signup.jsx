import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

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

      <div className="flex h-screen items-center justify-center">
        <div className="w-full max-w-md p-6">
          <div className="modal-box w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Close button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <div className="">
                <h3 className="font-bold text-2xl text-center mb-6 text-white">
                  Create <span className="text-pink-500">Your Account</span>
                </h3>

                <div className="mt-4 space-y-2">

                  {/* Name Input Field */}
                  <div className="mt-4">
                    <label className="block mb-1 text-sm font-medium text-gray-300">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your fullname"
                      className="input-field w-full p-2 border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 bg-gray-700 text-white"
                      {...register("fullname", { required: true })}
                    />
                    {errors.fullname && (
                      <span className="text-sm text-red-500">This field is required</span>
                    )}
                  </div>

                  {/* Email Input Field */}
                  <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium text-gray-300">Email</label>
                    <input  
                      {...register("email", { required: true })}
                      type="email" 
                      placeholder="Enter your Email" 
                      className="input-field w-full p-2 border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 bg-gray-700 text-white"
                    />
                    {errors.email && <span className="text-sm text-red-500">Email is required</span>}
                  </div>

                  {/* Password Input Field */}
                  <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium text-gray-300">Password</label>
                    <input  
                      {...register("password", { required: true })}
                      type="password" 
                      placeholder="Create a password" 
                      className="input-field w-full p-2 border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 bg-gray-700 text-white"
                    />
                    {errors.password && <span className="text-sm text-red-500">Password is required</span>}
                  </div>

                  {/* Confirm Password Input Field */}
                  <div className="mb-6">
                    <label className="block mb-1 text-sm font-medium text-gray-300">Confirm Password</label>
                    <input  
                      {...register("confirmPassword", { required: true })}
                      type="password" 
                      placeholder="Confirm your password" 
                      className="input-field w-full p-2 border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 bg-gray-700 text-white"
                    />
                    {errors.confirmPassword && <span className="text-sm text-red-500">Confirm Password is required</span>}
                  </div>

                  <div className="flex justify-center mt-4">
                    <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
                      Signup
                    </button>
                  </div>

                  <p className="text-sm text-center mt-6 text-white">
                    Already have an account?{" "}
                    <button
                      className="underline text-blue-500 cursor-pointer"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Login
                    </button>{" "}
                  </p>

                  <Login />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
