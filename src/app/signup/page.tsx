import React, { useState } from "react";
import Header from "../_components/Header";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="mt-14 flex justify-center">
        <div className="w-1/3 rounded-2xl border border-gray-300 px-8 pb-24 pt-8">
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Create your account
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="mb-2 text-xs text-gray-700">
                Name
              </label>
              <input
                placeholder="Enter"
                type="text"
                id="username"
                name="username"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-black focus:outline-none"
              />
            </div>
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
                type="password"
                id="password"
                name="password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-black focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-black px-4 py-4 text-xs text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            >
              CREATE ACCOUNT
            </button>
          </form>
          <div className="mt-4 text-center font-light">
            <p className="text-xs">
              HAVE AN ACCOUNT?{" "}
              <Link href={'/login'}
                className=" ml-2 font-semibold text-black hover:text-gray-700"
              >
                LOGIN
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
