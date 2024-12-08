// Cart.js
import React from 'react';
import Image from "next/image"
import HEADER from "@/components/HEADER/header";
import NAVBAR from "@/components/NAVBAR/navbar";
import MENU from "@/components/NAVBARMENU/menu";
import FOOTER from "@/components/FOOTER/footer";
import FOOTER2 from "@/components/FOOTER/footer2";
import { FaRegHeart } from "react-icons/fa6"

const Cart = () => {
  

  return (
    <div>
      <div>
           {/* navbars */}
       <div>
        <HEADER />
        <NAVBAR />
        <MENU />
      </div>
      </div>
     <div className='flex justify-center items-center mt-[100px] gap-[30px]'>
     <div>
      <div className='flex gap-[24px] border-b-[1px] border-[#E5E5E5] '>
         <div>
            <Image src="/images/chair3.png" alt='chair' width={150} height={150}/>
         </div>
         <div className='flex gap-[400px] w-[800px] h-[211px]'>
         <div className='flex flex-col gap-[24px] '>
            <p className='text-[16px] font-inter font-normal leading-[20.8px] text-[#272343]'>Library Stool Chair</p>

            <div className='flex flex-col'>
              <div>
              <p className='text-[15px] font-inter font-normal leading-[28px] text-[#757575]'>Ashen Slate/Cobalt Bliss</p>
              </div>
              <div className='flex gap-[20px]'>
              <p className='text-[15px] font-inter font-normal leading-[28px] text-[#757575]'>Size <span className='text-[14px] font-inter font-normal  leading-[16.94px] text-[#757575]'>L</span></p> 
              <p className='text-[15px] font-inter font-normal leading-[28px] text-[#757575]'>Quantity <span className='text-[14px] font-inter font-normal  leading-[16.94px] text-[#757575]'>1</span></p>
              </div>
            </div>

            <div className='flex gap-[29px]'>
            <FaRegHeart className='w-[24px] h-[24px]'/> 
            <Image src="/images/Frame.png" alt='delete' width={24} height={24} />
            </div>
         </div>
         <p className='text-[15px] font-inter font-normal leading-[28px] text-[#757575] '>MRP: $99</p>
         </div>
      </div>

      <div className='flex gap-[24px]  border-b-[1px] border-[#E5E5E5] mt-[30px]'>
         <div>
            <Image src="/images/Image.png" alt='chair' width={150} height={150}/>
         </div>
         <div className='flex gap-[400px] w-[963px] h-[211px]'>
         <div className='flex flex-col gap-[24px] '>
            <p className='text-[16px] font-inter font-normal leading-[20.8px] text-[#272343]'>Library Stool Chair</p>

            <div className='flex flex-col'>
              <div>
              <p className='text-[15px] font-inter font-normal leading-[28px] text-[#757575]'>Ashen Slate/Cobalt Bliss</p>
              </div>
              <div className='flex gap-[20px]'>
              <p className='text-[15px] font-inter font-normal leading-[28px] text-[#757575]'>Size <span className='text-[14px] font-inter font-normal  leading-[16.94px] text-[#757575]'>L</span></p> 
              <p className='text-[15px] font-inter font-normal leading-[28px] text-[#757575]'>Quantity <span className='text-[14px] font-inter font-normal  leading-[16.94px] text-[#757575]'>1</span></p>
              </div>
            </div>

            <div className='flex gap-[29px]'>
            <FaRegHeart className='w-[24px] h-[24px]'/> 
            <Image src="/images/Frame.png" alt='delete' width={24} height={24} />
            </div>
         </div>
         <p className='text-[15px] font-inter font-normal leading-[28px] text-[#757575] '>MRP: $99</p>
         </div>
      </div>
      </div>
       
       <div className='flex flex-col gap-[24px] w-[350.67px] h-[295] pb-[200px] '>
          <p className='text-[21px] font-inter font-medium leading-[33px] text-[#11111] '>Summary</p>

          <div className='flex justify-between'>
            <p className='text-[15px] font-inter font-normal leading-[28px] text-[#111111] '>Subtotal</p>
            <p className='text-[14px] font-inter font-medium leading-[24px] text-[#111111] '>$198.00</p>
          </div>

          <div className='flex justify-between'>
            <p className='text-[15px] font-inter font-normal leading-[28px] text-[#111111] '>Estimated Delivery & Handling</p>
            <p className='text-[14px] font-inter font-medium leading-[24px] text-[#111111] '>Free</p>
          </div>

          <div className='flex justify-between border-y-[1px] border-[#E5E5E5] py-[20px]'>
            <p className='text-[15px] font-inter font-normal leading-[28px] text-[#111111] '>Total</p>
            <p className='text-[14px] font-inter font-medium leading-[24px] text-[#111111] '>$198.00</p>
          </div>

          <button className="w-[334.67px] h-[60px] rounded-[30px] bg-[#029FAE] text-[#FFFFFF] text-[15px] font-inter font-normal leading-[28px] ">Member Checkout</button>
       </div>
    </div>
    <div className="border-none">
        <FOOTER />
        <FOOTER2 />
      </div>
    </div>
  );
};

export default Cart;