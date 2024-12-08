import React from 'react'
import { IoIosAdd } from "react-icons/io";
// import Image from "next/image";
import HEADER from "@/components/HEADER/header";
import NAVBAR from "@/components/NAVBAR/navbar";
import MENU from "@/components/NAVBARMENU/menu";
import FOOTER from "@/components/FOOTER/footer";
import FOOTER2 from "@/components/FOOTER/footer2";
function page() {
  return (
    <div>
       <div>
       <HEADER />
        <NAVBAR />
        <MENU />
       </div>
       <div className='flex flex-col justify-center items-center gap-[20px] mt-[30px]'>
        <p className='text-[48px] font-inter font-bold'>Questions Looks Here</p>
        <p className=' text-[16px] font-normal font-inter leading-[26px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
       </div>
        <div className='grid grid-cols-2 justify-center items-center gap-[20px] pl-[300px] pr-[300px] mt-[100px] '>
            <div className='w-[648px] h-[170px] rounded-[8px] bg-[#F7F7F7] flex flex-col justify-center pl-[20px] pr-[20px]  gap-[30px]'>
                <div className='flex justify-between'>
                <p className='w-[303px] text-[18px] font-bold leading-[26px]'>What types of chairs do you offer?</p>
                <span><IoIosAdd className='w-[24px] h-[24px]'/></span>
                </div>
                <div>
                    <p className='w-[600px] text-[16px] font-bold leading-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                </div>
            </div>

            <div className='w-[648px] h-[170px] rounded-[8px] bg-[#F7F7F7] flex flex-col justify-center pl-[20px] pr-[20px]  gap-[30px]'>
                <div className='flex justify-between'>
                <p className='w-[303px] text-[18px] font-bold leading-[26px]'>How can we get in touch with you?</p>
                <span className='w-[24px] h-[24px]'><IoIosAdd /></span>
                </div>
                <div>
                    <p className='w-[600px] text-[16px] font-bold leading-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                </div>
            </div>

            
            <div className='w-[648px] h-[170px] rounded-[8px] bg-[#F7F7F7] flex flex-col justify-center pl-[20px] pr-[20px]  gap-[30px]'>
                <div className='flex justify-between'>
                <p className='w-[303px] text-[18px] font-bold leading-[26px]'>Do your chairs come with a warranty?</p>
                <span className='w-[24px] h-[24px]'><IoIosAdd /></span>
                </div>
                <div>
                    <p className='w-[600px] text-[16px] font-bold leading-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                </div>
            </div>

            
            <div className='w-[648px] h-[170px] rounded-[8px] bg-[#F7F7F7] flex flex-col justify-center pl-[20px] pr-[20px]  gap-[30px]'>
                <div className='flex justify-between'>
                <p className='w-[303px] text-[18px] font-bold leading-[26px]'>What will be delivered? And When?</p>
                <span className='w-[24px] h-[24px]'><IoIosAdd /></span>
                </div>
                <div>
                    <p className='w-[600px] text-[16px] font-bold leading-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                </div>
            </div>

            
            <div className='w-[648px] h-[170px] rounded-[8px] bg-[#F7F7F7] flex flex-col justify-center pl-[20px] pr-[20px]  gap-[30px]'>
                <div className='flex justify-between'>
                <p className='w-[303px] text-[18px] font-bold leading-[26px]'>What will be delivered? And When??</p>
                <span className='w-[24px] h-[24px]'><IoIosAdd /></span>
                </div>
                <div>
                    <p className='w-[600px] text-[16px] font-bold leading-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                </div>
            </div>

            <div className='w-[648px] h-[170px] rounded-[8px] bg-[#F7F7F7] flex flex-col justify-center pl-[20px] pr-[20px]  gap-[30px]'>
                <div className='flex justify-between'>
                <p className='w-[303px] text-[18px] font-bold leading-[26px]'>How do I clean and maintain my Comforty chair?</p>
                <span className='w-[24px] h-[24px]'><IoIosAdd /></span>
                </div>
                <div>
                    <p className='w-[600px] text-[16px] font-bold leading-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
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
