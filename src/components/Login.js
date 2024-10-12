import React from 'react'
import Header from './Header';
import { useState , useRef } from 'react';
import { LoginValidate } from '../utils/validation';

const Login = () => {

const [isSignin,setIsSignin] = useState(true);
const [formType,setFormType] = useState("Sign In");
const email = useRef(null);
const password = useRef(null);
const [errMsg,setErrMsg] = useState(null)


const toggleForm = () => {
  setIsSignin(!isSignin);
  (isSignin ? setFormType("Sign Up") : setFormType("Sign In") );
}

const handleLoginClick = () => {
  const msg = LoginValidate(email.current.value,password.current.value);
  setErrMsg(msg);
}

  return (
    <div className='login-background h-screen relative'>
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <Header/>
         <div className='relative mt-8'>
            <div className='bg-black text-white bg-opacity-65 p-8 rounded-xl w-7/12  md:w-5/12 lg:w-3/12 form-container mx-auto right-0 left-0'>
                    <div className='flex gap-1 items-center pb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <p className='text-2xl font-semibold'>
                    {formType}</p>
                    </div>
                <form className='p-4' onSubmit={(e)=>e.preventDefault()}>
                    <div className='flex flex-col items-center space-y-6'>
                    {!isSignin && 
                    <input type="text" placeholder='Name' className='w-full p-1 bg-gray-800 border-2 border-gray-700 rounded-md'/>
                    }
                    <input ref={email} type='text' placeholder='Email address' className='mt-2 w-full rounded-md p-1 bg-gray-800 border-2 border-gray-700'/>
                    <input ref={password} type='password' placeholder='Password ' className='w-full  rounded-md p-1 bg-gray-800 border-2 border-gray-700'/>
                    {errMsg && 
                    <p className='text-base text-red-700 font-semibold'>{errMsg}</p>
                    }
                    <button onClick={handleLoginClick} className='bg-red-700 text-white rounded-lg py-1.5 px-6 font-semibold text-[18px] hover:bg-white hover:text-red-800 transform transition-all duration-200 hover:scale-103'>{formType}</button>
                    </div>
                    <p className='pt-6 text-[17px] font-medium'>{isSignin ? "New to Netflix?" : "Have an Account?"} <span className='hover:underline cursor-pointer' onClick={toggleForm}>{isSignin ? "Sign up here !" : "Sign in here !!"}</span></p>

                </form>
            </div>
         </div>
    </div>
  )
}

export default Login;