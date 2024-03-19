'use client'

import React, { useState } from 'react';
import Header from '../_components/Header';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=' h-screen flex flex-col'>
      <Header />
      <div className='flex justify-center mt-14'>
         <div className="px-8 pb-24 pt-8 rounded-2xl border border-gray-300 w-1/3">
          <div className='text-center'>
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <h2 className="text-l mb-1">Welcome back to ECOMMERCE</h2>
            <h2 className="text-xs font-thin mb-5">the next gen business marketplace</h2>
          </div>

          <form>
            <div className="mb-4">
              <label htmlFor="Email" className="text-gray-700 text-xs mb-2">Email</label>
              <input placeholder='Enter' type="text" id="username" name="username" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black" />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="text-gray-700 text-xs mb-2">Password</label>
              <input placeholder='Enter' type={showPassword ? "text" : "password"} id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black" />
              <span onClick={togglePasswordVisibility} className=" text-xs absolute top-9 right-3 border-b border-black flex items-center cursor-pointer">
                {showPassword ? "Hide" : "Show"}
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"></div>
            </div>

            <button type="submit" className="w-full bg-black text-white text-xs py-4 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">LOGIN</button>
          </form>

          <div className=" h-0.5 opacity-20 bg-gray-700 mt-5"></div>

          <div className="text-center mt-4 font-light">

            <p className='text-xs'>Don't have an Account? <a href="#" className=" ml-2  hover:text-gray-700 text-black font-semibold">SIGN UP</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
