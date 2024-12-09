import React from "react";
import Image from "next/image";
function section3() {
  return (
    <main className="flex flex-col gap-[30px] sm_max:justify-center sm_max:items-center">
      <h1 className="text-[32px] font-inter font-bold leading-[36.8px] text-[#272343] ml-[290px] sm_max:ml-[0px] sm_max:text-center ">
        Featured Products
      </h1>
      <div className="flex justify-center items-center gap-[40px] sm_max:grid sm_max:grid-cols-2 sm_max:gap-x-[10px] sm_max:gap-y-[50px]">
        <div className="w-[312px] h-[377px] bg-[#FFFFFF] sm_max:w-[150px] sm_max:h-[167px]">
          <Image
            src="/images/chair1.png"
            alt="chair"
            width={312}
            height={312}
            className="sm_max:w-[150px] sm_max:h-[150px]"
          />
          <div className="flex justify-between mt-[10px]">
            <div className="flex flex-col gap-[7px] sm_max:gap-[2px]">
              <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#007580] sm_max:text-[10px]">
                Library Stool Chair
              </p>
              <p className="text-[18px] font-inter leading-[19.8px] sm_max:text-[12px]">$20</p>
            </div>
            <div className="w-[44px] h-[44px] bg-[#029FAE] flex justify-center items-center  rounded-[20%] sm_max:w-[24px] sm_max:h-[24px]">
              <Image
                src="/images/Buy 2.png"
                alt="chair"
                width={18.5}
                height={18.4}
                className="text-white sm_max:w-[10px] sm_max:h-[10px]"
              />
            </div>
          </div>
        </div>

        <div className="w-[312px] h-[377px] bg-[#FFFFFF] sm_max:w-[150px] sm_max:h-[167px]">
          <Image
            src="/images/chair2.png"
            alt="chair"
            width={312}
            height={312}
            className="sm_max:w-[150px] sm_max:h-[150px]"
          />
          <div className="flex justify-between mt-[10px]">
            <div className="flex flex-col gap-[7px] sm_max:gap-[2px]">
              <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#007580] sm_max:text-[10px]">
                Library Stool Chair
              </p>
              <p className="text-[18px] font-inter leading-[19.8px] sm_max:text-[12px]">$20</p>
            </div>
            <div className="w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]  sm_max:w-[24px] sm_max:h-[24px]">
              <Image
                src="/images/Buy 2.png"
                alt="chair"
                width={18.5}
                height={18.4}
                className="text-white sm_max:w-[10px] sm_max:h-[10px]"
              />
            </div>
          </div>
        </div>

        <div className="w-[312px] h-[377px] bg-[#FFFFFF] sm_max:w-[150px] sm_max:h-[167px]">
          <Image
            src="/images/chair3.png"
            alt="chair"
            width={312}
            height={312}
            className="sm_max:w-[150px] sm_max:h-[150px]"
          />
          <div className="flex justify-between mt-[10px]">
            <div className="flex flex-col gap-[7px] sm_max:gap-[2px]">
              <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#007580] sm_max:text-[10px]">
                Library Stool Chair
              </p>
              <p className="text-[18px] font-inter leading-[19.8px] sm_max:text-[12px]">$20</p>
            </div>
            <div className="w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]  sm_max:w-[24px] sm_max:h-[24px]">
              <Image
                src="/images/Buy 2.png"
                alt="chair"
                width={18.5}
                height={18.4}
                className="text-white sm_max:w-[10px] sm_max:h-[10px]"
              />
            </div>
          </div>
        </div>

        <div className="w-[312px] h-[377px] bg-[#FFFFFF] sm_max:w-[150px] sm_max:h-[167px]">
          <Image
            src="/images/chair4.png"
            alt="chair"
            width={312}
            height={312}
            className="sm_max:w-[150px] sm_max:h-[150px]"
          />
          <div className="flex justify-between mt-[10px]">
            <div className="flex flex-col gap-[7px] sm_max:gap-[2px]">
              <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#007580] sm_max:text-[10px]">
                Library Stool Chair
              </p>
              <p className="text-[18px] font-inter leading-[19.8px] sm_max:text-[12px]">$20</p>
            </div>
            <div className="w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]  sm_max:w-[24px] sm_max:h-[24px]">
              <Image
                src="/images/Buy 2.png"
                alt="chair"
                width={18.5}
                height={18.4}
                className="text-white sm_max:w-[10px] sm_max:h-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default section3;
