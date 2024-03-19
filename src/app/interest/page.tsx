"use client";

import React from "react";
import Header from "../_components/Header";

const LoginPage = () => {
  return (
    <div className=" flex h-screen flex-col">
      <Header />
      <div className="mt-14 flex justify-center">
        <div className="w-1/3 rounded-2xl border border-gray-300 px-8 pb-24 pt-8">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-semibold">
              Please mark your interests!
            </h2>
            <h2 className="mb-5 text-sm font-light">
              the next gen business marketplace
            </h2>
          </div>
          <h2 className="mb-5 font-normal">My saved interests!</h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
