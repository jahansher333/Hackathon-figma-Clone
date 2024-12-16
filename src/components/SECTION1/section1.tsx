import React from 'react'
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

function SECTION1() {
  return (
    // <main>
    //     <div className='flex justify-center items-center gap-[100px] w-[1200px] h-[850px] bg-[#F0F2F3]  ml-[360px] rounded-b-[48px]'>
    //         <div>
    //             <p>Welcome to chairy</p>
    //             <h1>
    //                 Best Furniture
    //                 Collection for your
    //                 interior.
    //             </h1>

    //             <button>Shop Now<FaArrowRightLong /></button>
    //         </div>

    //         <div>
    //             <Image src="/images/Product Image.png" alt='chair' width={443} height={584}/> 
    //         </div>
    //     </div>
    // </main>

    <section className="bg-gray-50 w-full max-w-screen-sm h-full flex   m-auto  rounded-b-[48px] ">
      <div className="flex flex-col md:flex-row items-center  w-[170px] max-w-7xl mx-auto mt-[30px]">
        {/* Text Section */}
        <div className="text-left flex flex-col gap-[15px] ">
          <h3 className="text-[14px] font-normal text-gray-500 uppercase tracking-wide">
            Welcome to Chairy
          </h3>
          <h1 className="w-[307px] text-[40px] font-bold text-gray-800  leading-[66px]">
            Best Furniture Collection  For Your Interior.
          </h1>
          <div>
          <button className="mt-6 px-6 py-3 text-white bg-teal-500 hover:bg-teal-600 rounded-lg flex items-center">
            Shop Now
            <span className="ml-2 text-lg"><FaArrowRightLong /></span>
          </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 md:ml-8 sm_max:mt-0 mb-[30px]">
          <Image
            src="/images/Product Image.png" // Replace with your image path
            alt="Furniture Chair"
            width={634}
            height={684}
            className="rounded-xl "
          />
        </div>
      </div>
    </section>
  )
}

export default SECTION1
