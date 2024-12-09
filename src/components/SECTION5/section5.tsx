import React from "react";
import Image from "next/image";
function SCEION5() {
  return (
    <div className="flex mt-[200px] justify-center items-center gap-[20px] sm_max:flex-col sm_max:justify-center sm_max:items-center">
       <div className="hidden sm_max:block">
        <p className="rotate-[-90deg] w-[648px]  text-[34px] font-inter font-normal  uppercase text-[#272343] relative right-[360px] top-[350px]  sm_max:text-[20px] sm_max:top-[40px] sm_max:right-[180px] ">
          Explore new and popular styles
        </p>
        </div>
      <div className="sm_max:flex sm_max:justify-center sm_max:items-center">
        <div className="sm_max:hidden">
        <p className="rotate-[-90deg] w-[648px]  text-[34px] font-inter font-normal  uppercase text-[#272343] relative right-[360px] top-[350px]  sm_max:text-[20px] sm_max:top-0 sm_max:right-[100px] ">
          Explore new and popular styles
        </p>
        </div>
        <Image
          src={"/images/item-category 1.png"}
          alt="chair"
          width={648}
          height={648}
          className="sm_max:w-[300px] sm_max:h-[300px] sm_max:justify-center sm_max:items-center"
        />
      </div>

      <div className="grid grid-cols-2 gap-[20px] mt-[50px] sm_max:grid-rows-2 sm_max:justify-center sm_max:items-center">
        <Image src={"/images/card.png"} alt="chair" width={312} height={312} className="sm_max:w-[150px] sm_max:[h-150px]"/>
        <Image src={"/images/card1.png"} alt="chair" width={312} height={312} className="sm_max:w-[150px] sm_max:[h-150px]"/>
        <Image src={"/images/card2.png"} alt="chair" width={312} height={312} className="sm_max:w-[150px] sm_max:[h-150px]"/>
        <Image src={"/images/card3.png"} alt="chair" width={312} height={312} className="sm_max:w-[150px] sm_max:[h-150px]"/>
      </div>
    </div>
  );
}

export default SCEION5;
