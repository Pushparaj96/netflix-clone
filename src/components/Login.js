import React from 'react'
import Header from './Header';

const Login = () => {
  return (
    <div className='login-background h-screen relative'>
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <Header/>
         <div className='relative h-full flex justify-center items-center'>
            <div className='bg-white p-8 rounded-lg w-3/12'>
                <form>
                    <h2 className='text-2xl font-semibold text-gray-800 pb-5'>Sign In</h2>

                    <div className='flex flex-col items-center space-y-8'>
                    <input type='text' placeholder='Email address' className='w-full border-2 border-gray-900 outline-none rounded-md p-1'/>
                    <input type='password' placeholder='password ' className='w-full border-2 border-gray-900 outline-none rounded-md p-1'/>
                    <button className='bg-red-700 text-white rounded-lg py-1 px-4'>Sign In</button>
                    </div>

                    <p className='py-6 text-base font-medium text-gray-800'>New to Netflix? <span className='hover:underline cursor-pointer'>Sign up here !</span></p>

                </form>
            </div>
         </div>
    </div>
  )
}

export default Login;