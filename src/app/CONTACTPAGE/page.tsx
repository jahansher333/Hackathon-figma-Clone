import React from 'react'
// import Image from "next/image";
import HEADER from "@/components/HEADER/header";
import NAVBAR from "@/components/NAVBAR/navbar";
import MENU from "@/components/NAVBARMENU/menu";
import FOOTER from "@/components/FOOTER/footer";
import FOOTER2 from "@/components/FOOTER/footer2";
// import Link from "next/link"
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
function page() {
  return (
    <div>
        {/* navbars */}
        <div>
        <HEADER />
        <NAVBAR />
        <MENU />
      </div>
      <div className='flex flex-col justify-center items-center mt-[100px]'>
          <h2 className='font-inter font-bold text-[36px] leading-[48px]'>Get In Touch With Us</h2>
          <p className='w-[644px] font-inter font-normal text-[16px] leading-[24px] text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
       <div className='flex justify-center items-center gap-[50px]'>
      
          
         
         {/* form */}
        <div className='flex gap-[40px]'>
        <div className='flex flex-col gap-[60px]'>
             <div>
                <p className='text-[24px] font-inter font-medium leading-[36px] flex gap-[8px]'><IoLocationSharp />Address</p>
                <p className='w-[212px] text-[16px] font-inter font-normal leading-[19.36px] '>236 5th SE Avenue, New York NY10000, United States</p>
             </div>

             <div>
               <p className='text-[24px] font-inter font-medium leading-[36px]  flex gap-[8px]'><FaPhoneAlt />Phone</p>
               <p className=' text-[16px] font-inter font-normal leading-[19.36px] '>Mobile: +(84) 546-6789
                </p>
                <p className=' text-[16px] font-inter font-normal leading-[19.36px] '>
               Hotline: +(84) 456-6789
               </p>
             </div>

             <div>
               <p className='text-[24px] font-inter font-medium leading-[36px]  flex gap-[8px]'><FaClock />Working Time</p>
               <p className=' text-[16px] font-inter font-normal leading-[19.36px] '>
                Monday-Friday: 9:00 - 22:00
               </p>
               <p className=' text-[16px] font-inter font-normal leading-[19.36px] '>Saturday-Sunday: 9:00 - 21:00</p>
             </div>
          </div>
        </div>
          <div>
          <form>
      
      <div className="mb-8 mt-[100px] pt-[100px]">
        <label  className="block text-sm font-medium text-gray-700">Your name</label>
        <input 
          type="text"  
          name="name" 
          placeholder="Abc"
          className="mt-1 block w-[526.75px] h-[75px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
          required />
      </div>
      
      <div className="mb-4">
        <label  className="block text-sm font-medium text-gray-700">Email address</label>
        <input
          type="email"
          name="email"
          placeholder="Abc@def.com"
          className="mt-1 block  w-[526.75px] h-[75px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
          required />
      </div>
      
      <div className="mb-4">
        <label  className="block text-sm font-medium text-gray-700">Subject</label>
        <input 
          type="text"  
          name="subject" 
          placeholder="Abc"
          className="mt-1 block  w-[526.75px] h-[75px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
          required />
      </div>
     
      <div className="mb-4">
        <label  className="block text-sm font-medium text-gray-700">Message</label>
        <textarea 
          id="message" 
          name="message"  
          placeholder="Hi! I’d like to ask about"
          className="mt-1 block  w-[527px] h-[75px]  px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
          required></textarea>
      </div>
      
      <button 
        type="submit" 
        className=" w-[237px] h-[120px] bg-teal-500 text-white py-2 px-4 rounded-md shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
        Submit
      </button>
    </form>
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
