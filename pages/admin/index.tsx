import Link from 'next/link'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

import ContainerBlock from '../../components/ContainerBlock'

type Inputs = {
  username: string,
  password: string,
};

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  
  const handleLogin: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  
  return (
    <ContainerBlock
      title="Martin Mwangi - Software Developer - REACT,NEXT,NODE..."
      description="I've been developing websites for more than 2 years straight. Get in touch with me to know more."
      showInterest={false}
    >
      <div
        className="
    flex
    min-h-[80vh]
    w-full
    items-center
    justify-center
    bg-white
    p-5
  "
      >
        <div className="mx-2 sm:mx-5 rounded-md w-full sm:w-[500px] bg-slate-100 px-5 py-5 shadow-xl">
          <form onSubmit={handleSubmit(handleLogin)} className="w-full">
            <h2 className='font-bold text-xl text-center'>Admin Login</h2>

            <div className='mt-4'>
              <label htmlFor="username">Username</label>
              <input 
                placeholder='Enter your username' 
                type="text" 
                id="username" 
                className={`w-full p-2 rounded-sm shadow-sm mt-1 focus:ring-1 focus:outline-none ${errors.username && "ring-1 ring-red-400"}`}
                {...register("username", { required: true })}
              />
              {errors.username && <span className='text-sm text-red-600'>This field is required</span>}
            </div>

            <div className='mt-4'>
              <label htmlFor="password">Password</label>
              <input
                placeholder='Enter your password'
                type="password"
                id="password"
                className={`w-full p-2 rounded-sm shadow-sm mt-1 focus:ring-1 focus:outline-none ${errors.password && "ring-1 ring-red-400"}`}
                {...register("password", { required: true })}
              />
              {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
            </div>

            <button
            className=" mt-4 w-full border border-primary rounded-sm bg-primary py-1 px-6 text-lg
              text-white hover:opacity-75
              "
          >
            Login
          </button>
          </form>
        </div>
      </div>
    </ContainerBlock>
  )
}

export default Login
