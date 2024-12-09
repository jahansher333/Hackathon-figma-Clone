import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
function MENU() {
  return (
    <main>
      <div className="flex justify-around items-center w-screen h-[74px] bg-[#FFFFFF] gap-[150px] border-b-[1px] border-[#E1E3E5] sm_max:justify-around sm_max:items-center sm_max:gap-[50px]">
        <div className="hidden sm_max:block">
          <li className="hidden sm_max:block">
            <FaBars />
           </li>
        </div>
        
        <div className="flex gap-[32px] justify-center items-center list-none sm_max:hidden">
           <li className="hidden sm_max:block">
           <FaBars />
           </li>
          
          <li className="text-[14px] font-medium font-inter leading-[15.4px] hover:text-[#007580] active:text-[#007580]  focus:text-[#007580]">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[14px] font-medium font-inter leading-[15.4px] hover:text-[#007580] active:text-[#007580]  focus:text-[#007580]">
            <Link href="">Shop</Link>
          </li>
          <li className="text-[14px] font-medium font-inter leading-[15.4px] hover:text-[#007580] active:text-[#007580]  focus:text-[#007580]">
            <Link href="./Products">Product</Link>
          </li>
          <li className="text-[14px] font-medium font-inter leading-[15.4px] hover:text-[#007580] active:text-[#007580]  focus:text-[#007580]">
            <Link href="/">Pages</Link>
          </li>
          <li className="text-[14px] font-medium font-inter leading-[15.4px] hover:text-[#007580] active:text-[#007580]  focus:text-[#007580]">
            <Link href="./ABOUT">About</Link>
          </li>
        </div>

        <div className="flex justify-center items-center gap-[8px] pl-[45px]">
          <span className="text-[14px] font-normal font-inter leading-[15.4px]">
            Contact:
          </span>
          <span className="text-[14px] font-medium font-inter leading-[15.4px]">
            (808) 555-0111
          </span>
        </div>
      </div>
    </main>
  );
}

export default MENU;
