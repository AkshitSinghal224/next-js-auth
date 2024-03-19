import React from 'react'
import { CiShoppingCart, CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className=' h-32  flex flex-col w-screen'>
        <div className='flex justify-end gap-x-5 w-screen pr-10 pt-5 font-thin text-xs'>
            <h6>Help</h6>
            <h6>Order & Return</h6>
            <h6>Hi, Johe</h6>
        </div>
         <div className='flex w-screen justify-between items-center h-16 pl-10'>
            <h3 className=' text-2xl font-bold'>ECOMMERCE</h3>
            <div className='flex gap-x-5 pr-12 '>
                <h6>Categories</h6>
                <h6>Sales</h6>
                <h6>Clearance</h6>
                <h6>New stock</h6>
                <h6>Trending</h6>
            </div>
            <div className='flex gap-x-5 pr-10'>
                <CiSearch className=' size-6' />
                <CiShoppingCart className=' size-6'/>
            </div>
        </div>
        <div className=' bg-gray-300 w-screen h-10 flex justify-center gap-x-4 items-center'>
            <h6>{'<'}</h6>
            <h6>Get 10% off on business sign up</h6>
            <h6>{'>'}</h6>
        </div>
    </div>
  )
}

export default Header