"use client";

import React from "react";
import { IoCheckmark } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import Link from "next/link";

function Header() {
  return (
    <main>
      <div className="flex justify-center items-center bg-[#272343] w-full h-[45px] text-[#FFFFFF] gap-[100px] ">
        <div className="flex gap-[8px] justify-center">
          <span className="w-[10.67px] h-[7.33px]">
            <IoCheckmark />
          </span>
        <p className="text-[12px] font-normal font-inter">
            Free shipping on all orders over $50
          </p>
        </div>

        <div className="flex gap-[24px] justify-center">
          <div className="flex gap-[6px] border-none">
            <select
              name="eng"
              id="eng"
              className="text-[14px] font-normal font-inter border-none bg-[#272343]"
            >
              <option
                value="eng"
                className="text-[13px] font-normal font-inter"
              >
                Eng
              </option>
            </select>
          </div>
          <Link href="/QUESTION">
            <p className="text-[13px] font-normal font-inter hidden sm:block">Faqs</p>
          </Link>
            <div className="hidden sm:block">
              <Link href="/CONTACTPAGE">
                <p className="flex gap-[6px] justify-center items-center text-[13px] font-normal font-inter">
                  <BsExclamationCircle className="w-[13.33px] h-[13.33px]" />
                  Need Help
                </p>
              </Link>
            </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
