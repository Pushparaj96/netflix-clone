import React from 'react'
import Header from './Header';

const Login = () => {
  return (
    <div className='login-background h-screen relative'>
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <Header/>
         <div className='relative h-full flex justify-center items-center'>
            <div className='bg-white p-8 rounded-lg w-3/12'>
                    <div className='flex gap-1 items-center pb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <p className='text-2xl font-semibold text-gray-800'>
                    Sign In</p>
                    </div>
                <form>
                    <div className='flex flex-col items-center space-y-8'>
                    <input type='text' placeholder='Email address' className='w-full border-2 border-gray-900 outline-none rounded-md p-1'/>
                    <input type='password' placeholder='password ' className='w-full border-2 border-gray-900 outline-none rounded-md p-1'/>
                    <button className='bg-red-700 text-white rounded-lg py-1 px-4'>Sign In</button>
                    </div>

                    <p className='pt-6 text-base font-medium text-gray-800'>New to Netflix? <span className='hover:underline cursor-pointer'>Sign up here !</span></p>

                </form>
            </div>
         </div>
    </div>
  )
}

export default Login;