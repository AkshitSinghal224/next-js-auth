"use client";

import React, { useState } from "react";
import Header from "../_components/Header";
import Link from "next/link";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" flex h-screen flex-col">
      <Header />
      <div className="mt-14 flex justify-center">
        <div className="w-1/3 rounded-2xl border border-gray-300 px-8 pb-24 pt-8">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-semibold">Login</h2>
            <h2 className="text-l mb-1">Welcome back to ECOMMERCE</h2>
            <h2 className="mb-5 text-xs font-thin">
              the next gen business marketplace
            </h2>
          </div>

          <form>
            <div className="mb-4">
              <label htmlFor="Email" className="mb-2 text-xs text-gray-700">
                Email
              </label>
              <input
                placeholder="Enter"
                type="text"
                id="username"
                name="username"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-black focus:outline-none"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="mb-2 text-xs text-gray-700">
                Password
              </label>
              <input
                placeholder="Enter"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-black focus:outline-none"
              />
              <span
                onClick={togglePasswordVisibility}
                className=" absolute right-3 top-9 flex cursor-pointer items-center border-b border-black text-xs"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"></div>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-black px-4 py-4 text-xs text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            >
              LOGIN
            </button>
          </form>

          <div className=" mt-5 h-0.5 bg-gray-700 opacity-20"></div>

          <div className="mt-4 text-center font-light">
            <p className="text-xs">
              Don't have an Account?{" "}
              <Link href="/signup"
                className="ml-2 font-semibold text-black hover:text-gray-700">
                  SIGN UP
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
