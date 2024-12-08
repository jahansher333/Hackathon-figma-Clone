import React from 'react'
import Image from "next/image";
import HEADER from "@/components/HEADER/header";
import NAVBAR from "@/components/NAVBAR/navbar";
import MENU from "@/components/NAVBARMENU/menu";
import FOOTER from "@/components/FOOTER/footer";
import FOOTER2 from "@/components/FOOTER/footer2";
function page() {
  return (
    <div>
       <div>
          {/* navbars */}
          <HEADER />
        <NAVBAR />
        <MENU />
       </div>

       <div>
            <div className='flex justify-center items-center gap-[20px]'>
                <div className="w-[672px] h-[478px] bg-[#007580]  ">
                    <p className='text-[32px] font-bold leading-[38.73px]'>About Us - Comforty</p>
                    <p className='w-[495px] text-[18px] font-normal leading-[21.78px] '>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
                    <button className='w-[179px] h-[59px] border-[1px] border-[#F9F9F9] bg-[#F9F9F9] opacity-15'>View collection</button>
               </div>

               <div>
                <Image src="/images/Image Block.png" alt="chair" width={619} height={478} className="" />

               </div>
            </div>

            <div>
                <h1>What makes our Brand Different</h1>
                <div>
                <Image src="/images/Delivery.png" alt="chair" width={619} height={478} className="" />
                <p>Next day as standard</p>
                <p>Order before 3pm and get your order the next day as standard</p>
                </div>

                <div>
                <Image src="/images/Delivery.png" alt="chair" width={619} height={478} className="" />
                <p>Made by true artisans</p>
                <p>Handmade crafted goods made with real passion and craftmanship</p>
                </div>

                <div>
                <Image src="/images/Delivery.png" alt="chair" width={619} height={478} className="" />
                <p>Unbeatable prices</p>
                <p>For our materials and quality you won’t find better prices anywhere</p>
                </div>

                <div>
                <Image src="/images/Delivery.png" alt="chair" width={619} height={478} className="" />
                <p>Recycled packaging</p>
                <p>We use 100% recycled to ensure our footprint is more manageable</p>
                </div>
            </div>
            <div>
                <p>Our Popular Products</p>
            
            <div>
            <Image src="/images/Large.png" alt="chair" width={619} height={478} className="" />
            <Image src="/images/Parent.png" alt="chair" width={619} height={478} className="" />
            <Image src="/images/Parent1.png" alt="chair" width={619} height={478} className="" />
            </div>
            </div>
       </div>

       <div>
       <FOOTER />
       <FOOTER2 />
       </div>
    </div>
  )
}

export default page
