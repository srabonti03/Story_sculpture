import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="relative">
          <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg text-center">Welcome <span className='text-pink-500'>Back!</span></h3>

          <div className='mt-6'>
            <label className='block mb-1'>Email</label>
            <input {...register("email", { required: true })}
              type='email' 
              placeholder='Enter your Email' 
              className='input-field'
            />
            <br/>
            {errors.email && <span className='text-sm text-red-500'>*This field is required</span>}
          </div>

          <div className='mt-4'>
            <label className='block mb-1'>Password</label>
            <input {...register("password", { required: true })}
              type='password' 
              placeholder='Enter your password' 
              className='input-field'
            />
            <br/>
            {errors.password && <span className='text-sm text-red-500'>*This field is required</span>}
          </div>

          <div className='flex flex-col items-center mt-6'>
            <button className='bg-pink-500 text-white rounded-md px-5 py-2 hover:bg-pink-700 duration-200 w-full'>
              Login
            </button>
            <p className='mt-2 text-sm text-center'>
              Not registered? 
              <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
