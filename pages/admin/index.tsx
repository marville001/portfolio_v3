import Link from 'next/link'
import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FaSpinner } from 'react-icons/fa'
import { useRouter } from 'next/router'
import ContainerBlock from '../../components/ContainerBlock'
import { useAuth } from '../../contexts/auth.context'

type Inputs = {
  username: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const authContext = useAuth()
  const router = useRouter()

  const handleLogin: SubmitHandler<Inputs> = (data) => {
    authContext.loginUser(data.username, data.password)
  }

  // console.log(authContext);

  useEffect(()=>{
    if(authContext.user?.uid){
      router.push("/admin/home")
    }
  }, [authContext.user])
  

  return (
    <ContainerBlock
      title="Martin - Software Developer - REACT,NEXT,NODE..."
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
        <div className="mx-2 w-full rounded-md bg-slate-100 px-5 py-5 shadow-xl sm:mx-5 sm:w-[500px]">
          <form onSubmit={handleSubmit(handleLogin)} className="w-full">
            <h2 className="text-center text-xl font-bold">Admin Login</h2>
            {authContext.loginError && (
              <div className="mt-4 rounded-md bg-red-100 p-2 text-center">
                {authContext.loginError}
              </div>
            )}

            <div className="mt-4">
              <label htmlFor="username">Username</label>
              <input
                placeholder="Enter your username"
                type="text"
                id="username"
                className={`mt-1 w-full rounded-sm p-2 shadow-sm focus:outline-none focus:ring-1 ${
                  errors.username && 'ring-1 ring-red-400'
                }`}
                {...register('username', { required: true })}
              />
              {errors.username && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4">
              <label htmlFor="password">Password</label>
              <input
                placeholder="Enter your password"
                type="password"
                id="password"
                className={`mt-1 w-full rounded-sm p-2 shadow-sm focus:outline-none focus:ring-1 ${
                  errors.password && 'ring-1 ring-red-400'
                }`}
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>

            <button
              disabled={authContext.loadingLogin}
              className=" mt-4 flex w-full justify-center rounded-sm border border-primary bg-primary py-1
              px-6 text-lg text-white hover:opacity-75 disabled:cursor-not-allowed disabled:bg-opacity-75
              "
            >
              {authContext.loadingLogin ? (
                <FaSpinner className="animate-spin" />
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </div>
    </ContainerBlock>
  )
}

export default Login
