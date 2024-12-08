import React from 'react'
import Image from "next/image"
function section3() {
 
  return (
   <main className='flex flex-col gap-[30px]'>
    <h1 className='text-[32px] font-inter font-bold leading-[36.8px] text-[#272343] ml-[290px]'>Featured Products</h1>
     <div className='flex justify-center items- gap-[40px]'>
        <div className='w-[312px] h-[377px] bg-[#FFFFFF]'>
          <Image src="/images/chair1.png" alt="chair" width={312} height={312}/>
          <div className='flex justify-between mt-[10px]'>
          <div className='flex flex-col gap-[7px]'>
            <p className='text-[16px] font-inter font-normal leading-[20.8px] text-[#007580]'>Library Stool Chair</p>
            <p className="text-[18px] font-inter leading-[19.8px]">$20</p>
          </div>
          <div className='w-[44px] h-[44px] bg-[#029FAE] flex justify-center items-center  rounded-[20%]'>
            <Image src="/images/Buy 2.png" alt="chair" width={18.5} height={18.4} className='text-white'/>
          </div>
        </div>
        </div>

        <div className='w-[312px] h-[377px] bg-[#FFFFFF]'>
          <Image src="/images/chair2.png" alt="chair" width={312} height={312}/>
          <div className='flex justify-between mt-[10px]'>
          <div className='flex flex-col gap-[7px]'>
            <p className='text-[16px] font-inter font-normal leading-[20.8px] text-[#007580]'>Library Stool Chair</p>
            <p className="text-[18px] font-inter leading-[19.8px]">$20</p>
          </div>
          <div className='w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]'>
            <Image src="/images/Buy 2.png" alt="chair" width={18.5} height={18.4} className='text-white'/>
          </div>
        </div>
        </div>

        <div className='w-[312px] h-[377px] bg-[#FFFFFF]'>
          <Image src="/images/chair3.png" alt="chair" width={312} height={312}/>
          <div className='flex justify-between mt-[10px]'>
          <div className='flex flex-col gap-[7px]'>
            <p className='text-[16px] font-inter font-normal leading-[20.8px] text-[#007580]'>Library Stool Chair</p>
            <p className="text-[18px] font-inter leading-[19.8px]">$20</p>
          </div>
          <div className='w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]'>
            <Image src="/images/Buy 2.png" alt="chair" width={18.5} height={18.4} className='text-white'/>
          </div>
        </div>
        </div>

        <div className='w-[312px] h-[377px] bg-[#FFFFFF]'>
          <Image src="/images/chair4.png" alt="chair" width={312} height={312}/>
          <div className='flex justify-between mt-[10px]'>
          <div className='flex flex-col gap-[7px]'>
            <p className='text-[16px] font-inter font-normal leading-[20.8px] text-[#007580]'>Library Stool Chair</p>
            <p className="text-[18px] font-inter leading-[19.8px]">$20</p>
          </div>
          <div className='w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]'>
            <Image src="/images/Buy 2.png" alt="chair" width={18.5} height={18.4} className='text-white'/>
          </div>
        </div>
        </div>

        
     </div>
   </main>
      
  )
}

export default section3

