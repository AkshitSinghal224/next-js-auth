'use client'

import React, { useState } from 'react';
import Header from '../_components/Header';

const LoginPage = () => {
  const [verificationCode, setVerificationCode] = useState('');

  // Function to handle changes in input fields
  const handleChange = (index, event) => {
    const value = event.target.value;
    setVerificationCode(prevCode => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });
  };

  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <div className='flex justify-center mt-14'>
        <div className="px-8 pb-24 pt-8 rounded-2xl border border-gray-300 w-2/5">
          <div className='text-center mb-12'>
            <h2 className="text-2xl font-semibold mb-4">Verify your email</h2>
            <h2 className="text-l mb-1">Enter the 8 digit code you have received on</h2>
            <h2 className="text-xs font-semibold mb-5">swa***@gmail.com</h2> {/*  email */}
          </div>
          <form>
            <label htmlFor="name" className="text-gray-700 mb-2">Code</label>
            <div className="mb-16 flex justify-between ">
              {Array.from({ length: 8 }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  value={verificationCode[index] || ''}
                  onChange={(event) => handleChange(index, event)}
                    maxLength={1}
                  className="py-4 w-14 border border-gray-300 rounded-md text-center focus:outline-none focus:border-black"
                />
              ))}
            </div>
            <button type="submit" className="w-full bg-black text-white text-xs py-4 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">VERIFY</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
