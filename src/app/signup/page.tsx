import React, { useState } from 'react';
import Header from '../_components/Header';

const LoginPage = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <div className='flex justify-center mt-14'>
        <div className="px-8 pb-24 pt-8 rounded-2xl border border-gray-300 w-1/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">Create your account</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-700 text-xs mb-2">Name</label>
              <input placeholder='Enter' type="text" id="username" name="username" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black" />
            </div>
            <div className="mb-4">
              <label htmlFor="Email" className="text-gray-700 text-xs mb-2">Email</label>
              <input placeholder='Enter' type="text" id="username" name="username" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black" />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="text-gray-700 text-xs mb-2">Password</label>
              <input placeholder='Enter' type= 'password' id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black" />
            </div>
            <button type="submit" className="w-full bg-black text-white text-xs py-4 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">CREATE ACCOUNT</button>
          </form>
          <div className="text-center mt-4 font-light">
            <p className='text-xs'>HAVE AN ACCOUNT? <a href="#" className=" ml-2 text-black font-semibold hover:text-gray-700">LOGIN</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
