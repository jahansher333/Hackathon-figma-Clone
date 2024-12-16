import React from "react";
import Image from "next/image";
function SCEION5() {
  return (
    <div className="flex flex-col mt-[200px] justify-center items-center gap-[20px] ">
       <div className=" relative   top-[40px] right-[180px] ">
        <p className="rotate-[-90deg] w-[648px]   font-inter font-normal  uppercase text-[#272343] text-[10px] ">
          Explore new and popular styles
        </p>
        </div>
      <div className="flex justify-center items-center">
        <div className="hidden relative top-[20px] bottom-[200px] right-[180px]">
        <p className="rotate-[-90deg]   font-inter font-normal  uppercase text-[#272343]   text-[10px] ">
          Explore new and popular styles
        </p>
        </div>
        <Image
          src={"/images/item-category 1.png"}
          alt="chair"
          width={200}
          height={300}
          className="justify-center items-center"
        />
      </div>

      <div className="grid grid-cols-2 gap-[20px] mt-[50px]  justify-center items-center">
        <Image src={"/images/card.png"} alt="chair" width={150} height={150} />
        <Image src={"/images/card1.png"} alt="chair" width={150} height={150} />
        <Image src={"/images/card2.png"} alt="chair" width={150} height={150} />
        <Image src={"/images/card3.png"} alt="chair" width={150} height={150} />
      </div>
    </div>
  );
}

export default SCEION5;
