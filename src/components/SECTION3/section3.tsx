import React from "react";
import Image from "next/image";
function section3() {
  return (
    <main className="flex flex-col gap-[40px] justify-center items-center">
      <h1 className="text-[32px] font-inter font-bold leading-[36.8px] text-[#272343]   text-center ">
        Featured Products
      </h1>
      <div className="grid grid-cols-2 justify-center items-center gap-[40px]">
        <div className="bg-[#FFFFFF] w-[150px] h-[167px]">
          <Image
            src="/images/chair1.png"
            alt="chair"
            width={150}
            height={150}
            className=""
          />
          <div className="flex justify-between mt-[10px]">
            <div className="flex flex-col gap-[2px]">
              <p className="font-inter font-normal leading-[20.8px] text-[#007580] text-[10px]">
                Library Stool Chair
              </p>
              <p className=" font-inter leading-[19.8px] text-[12px]">$20</p>
            </div>
            <div className="bg-[#029FAE] flex justify-center items-center  rounded-[20%] w-[24px] h-[24px]">
              <Image
                src="/images/Buy 2.png"
                alt="chair"
                width={10}
                height={10}
                className="text-white"
              />
            </div>
          </div>
        </div>

        <div className=" bg-[#FFFFFF] w-[150px] h-[167px]">
          <Image
            src="/images/chair2.png"
            alt="chair"
            width={150}
            height={150}
            className=""
          />
          <div className="flex justify-between mt-[10px]">
            <div className="flex flex-col gap-[2px]">
              <p className=" font-inter font-normal leading-[20.8px] text-[#007580] text-[10px]">
                Library Stool Chair
              </p>
              <p className=" font-inter leading-[19.8px] text-[12px]">$20</p>
            </div>
            <div className=" bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]  w-[24px] h-[24px]">
              <Image
                src="/images/Buy 2.png"
                alt="chair"
                width={10}
                height={10}
                className="text-white"
              />
            </div>
          </div>
        </div>

        <div className=" bg-[#FFFFFF] w-[150px] h-[167px]">
          <Image
            src="/images/chair3.png"
            alt="chair"
            width={150}
            height={150}
            className=""
          />
          <div className="flex justify-between mt-[10px]">
            <div className="flex flex-col gap-[2px]">
              <p className=" font-inter font-normal leading-[20.8px] text-[#007580] text-[10px]">
                Library Stool Chair
              </p>
              <p className=" font-inter leading-[19.8px] text-[12px]">$20</p>
            </div>
            <div className=" bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]  w-[24px] h-[24px]">
              <Image
                src="/images/Buy 2.png"
                alt="chair"
                width={10}
                height={10}
                className="text-white "
              />
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFF] w-[150px] h-[167px]">
          <Image
            src="/images/chair4.png"
            alt="chair"
            width={150}
            height={150}
            className=""
          />
          <div className="flex justify-between mt-[10px]">
            <div className="flex flex-col gap-[2px]">
              <p className=" font-inter font-normal leading-[20.8px] text-[#007580] text-[10px]">
                Library Stool Chair
              </p>
              <p className=" font-inter leading-[19.8px] text-[12px]">$20</p>
            </div>
            <div className=" bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]  w-[24px] :h-[24px]">
              <Image
                src="/images/Buy 2.png"
                alt="chair"
                width={10}
                height={10}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default section3;
