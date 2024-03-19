"use client";
import React, { useState, useRef } from "react";
import Header from "../_components/Header";

const LoginPage: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState<string[]>(
    Array.from({ length: 8 }, () => ""),
  );
  const inputRefs = useRef<HTMLInputElement[]>(
    Array.from({ length: 8 }, () => document.createElement("input")),
  );

  // Function to handle changes in input fields
  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    if (value.length <= 1) {
      setVerificationCode((prevCode) => {
        const newCode = [...prevCode];
        newCode[index] = value;
        return newCode;
      });
      // Move focus to the next input field if a digit is entered
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="mt-14 flex justify-center">
        <div className="w-2/5 rounded-2xl border border-gray-300 px-8 pb-24 pt-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold">Verify your email</h2>
            <h2 className="text-l mb-1">
              Enter the 8 digit code you have received on
            </h2>
            <h2 className="mb-5 text-xs font-semibold">swa***@gmail.com</h2>{" "}
            {/*  email */}
          </div>
          <form>
            <label htmlFor="name" className="mb-2 text-gray-700">
              Code
            </label>
            <div className="mb-16 flex justify-between ">
              {Array.from({ length: 8 }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  value={verificationCode[index]}
                  onChange={(event) => handleChange(index, event)}
                  maxLength={1}
                  className="w-16 rounded-md border border-gray-300 py-4 text-center focus:border-black focus:outline-none"
                  ref={(el) =>
                    (inputRefs.current[index] = el as HTMLInputElement)
                  }
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-black px-4 py-4 text-xs text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            >
              VERIFY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
