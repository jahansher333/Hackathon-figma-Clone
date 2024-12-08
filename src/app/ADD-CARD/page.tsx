import React from 'react'
import Image from "next/image";
import HEADER from "@/components/HEADER/header";
import NAVBAR from "@/components/NAVBAR/navbar";
import MENU from "@/components/NAVBARMENU/menu";
import FOOTER from "@/components/FOOTER/footer";
import FOOTER2 from "@/components/FOOTER/footer2";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaCartShopping } from "react-icons/fa6";

function page() {
  return (
    <div>
       {/* navbars */}
       <div>
        <HEADER />
        <NAVBAR />
        <MENU />
      </div>

      <div className='flex justify-center items-center gap-[120px] mt-[50px] '>
         <div>
         <Image
              src="/images/chair2.png"
              alt="chair"
              width={675}
              height={607}
            />
         </div>
        <div className='flex flex-col justify-center items-start gap-[100px]'>
         <div className='flex flex-col gap-[40px] border-b-[1px] border-[#D9D9D9] pb-[40px]'>
            <h2 className='w-[441px] text-[60px] font-bold font-inter leading-['>Library Stool Chair</h2>
            <Button className="w-[144px] h-[44px] bg-[#029FAE]  text-[#FFFFFF] rounded-[30px] text-[20px] font-[inter] font-semi-bold">$20.00 USD</Button>
         </div>

         <div className='pb-[100px] flex flex-col gap-[40px]'>
            <p className='w-[500px] text-[22px] font-inter font-normal leading-[33px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
           <div className='flex'>
            <Link href="./ADDTOCARD">
            <Button className="w-[212px] h-[63px] bg-[#029FAE]  text-[#FFFFFF] rounded-[8px] text-[20px] font-inter font-semi-bold"><span><FaCartShopping /></span>Add To cart</Button>
            </Link>
            </div>
         </div>
         </div>
      </div>

      <div className='flex flex-col gap-[30px] mt-[100px]'>
         <div className='flex justify-around items-center gap-[570px]'>
            <h2 className='text-[28px] font-inter font-bold leading-[33.89px]'>Featured Products</h2>
            <span className='text-[18px] font-inter font-bold leading-[21.78px] border-b-[1px] border-[#000000]'><Link href="/">View all</Link></span>
         </div>

         <div className='flex justify-center items-center gap-[20px] pl-[50px] pr-[50px]'>
            {/* div1 */}
         <div className="w-[270px] h-[306px] bg-[#FFFFFF]">
            <Image
              src="/images/card2.png"
              alt="chair"
              width={270}
              height={263}
            />
            
              <div className="flex justify-between mt-[10px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                <p className="text-[14px] font-inter font-bold leading-[16.94px]">$99</p>
              </div>
            </div>
          

           {/* div2 */}

           <div className="w-[263px] h-[306px] bg-[#FFFFFF]">
            <Image
              src="/images/chair1.png"
              alt="chair"
              width={263}
              height={263}
            />
            
            <div className="flex justify-between mt-[10px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                <p className="text-[14px] font-inter font-bold leading-[16.94px]">$99</p>
              </div>
           
          </div>

          {/* div3 */}

          <div className="w-[263px] h-[306px] bg-[#FFFFFF]">
            <Image
              src="/images/Image2.png"
              alt="chair"
              width={263}
              height={263}
            />
            
            <div className="flex justify-between mt-[10px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                <p className="text-[14px] font-inter font-bold leading-[16.94px]">$99</p>
              </div>
            
          </div>

          {/* div4 */}

          <div className="w-[263px] h-[306px] bg-[#FFFFFF]">
            <Image
              src="/images/chair3.png"
              alt="chair"
              width={263}
              height={270}
            />
           
           <div className="flex justify-between mt-[10px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                <p className="text-[14px] font-inter font-bold leading-[16.94px]">$99</p>
              </div>
           
          </div>

          {/* div5 */}

          <div className="w-[263px] h-[306px] bg-[#FFFFFF]">
            <Image
              src="/images/Image.png"
              alt="chair"
              width={263}
              height={263}
            />
            
            <div className="flex justify-between mt-[10px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#272343]">
                  Library Stool Chair
                </p>
                <p className="text-[14px] font-inter font-bold leading-[16.94px]">$99</p>
              </div>
            
          </div>
         </div>
         
         </div>

      <div className="border-none">
        <FOOTER />
        <FOOTER2 />
      </div>
    </div>
  )
}

export default page
