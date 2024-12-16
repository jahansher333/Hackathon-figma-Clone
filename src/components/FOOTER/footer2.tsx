import React from "react";
// import Image from "next/image"
import { FaCcMastercard } from "react-icons/fa6";
import { FaPaypal } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcVisa } from "react-icons/fa6";
function FOOTER2() {
  return (
    <main className="w-full flex justify-around items-center border-y-[1px] border-[#E1E3E5] flex-col gap-[30px]">
      <div>
        <p className="text-[14px] font-normal font-poppins text-[#9A9cAA]">
          @ 2021 - Blogy - Designed & Develop by{" "}
          <span className="text-[14px] font-poppins font-normal text-[#272343]">
            Zakirsoft
          </span>
        </p>
      </div>

      <div className="flex">
        <FaCcMastercard className="w-[34px] h-[24px]" />;
        <FaPaypal className="w-[34px] h-[24px]" />
        <SiAmericanexpress className="w-[34px] h-[24px]" />
        <FaCcVisa className="w-[34px] h-[24px]" />
      </div>
    </main>
  );
}

export default FOOTER2;
