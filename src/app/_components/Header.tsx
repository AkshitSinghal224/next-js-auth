import Link from "next/link";
import React from "react";
import { CiShoppingCart, CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className=" flex  h-32 w-screen flex-col">
      <div className="flex w-screen justify-end gap-x-5 pr-10 pt-5 text-xs font-thin">
        <h6>Help</h6>
        <h6>Order & Return</h6>
        <h6>Hi, Johe</h6>
      </div>
      <div className="flex h-16 w-screen items-center justify-between pl-10">
        <Link href={"/login"}>
          <h3 className=" text-2xl font-bold">ECOMMERCE</h3>
        </Link>
        <div className="flex gap-x-5 pr-12 ">
          <h6>Categories</h6>
          <h6>Sales</h6>
          <h6>Clearance</h6>
          <h6>New stock</h6>
          <h6>Trending</h6>
        </div>
        <div className="flex gap-x-5 pr-10">
          <CiSearch className=" size-6" />
          <CiShoppingCart className=" size-6" />
        </div>
      </div>
      <div className=" flex h-10 w-screen items-center justify-center gap-x-4 bg-gray-300">
        <h6>{"<"}</h6>
        <h6>Get 10% off on business sign up</h6>
        <h6>{">"}</h6>
      </div>
    </div>
  );
};

export default Header;
