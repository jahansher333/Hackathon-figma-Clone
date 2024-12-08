import React from 'react'
import Image from "next/image";

function NAVBAR() {
  return (
    <main>
       <div className='flex justify-around items-center bg-[#F0F2f3] w-screen h-[84px] text-[#272343] gap-[400px]'>
             <div className='flex gap-[8px] justify-center items-center'>
                <Image src="/images/Logo Icon.png" alt="logo" width={40} height={40} />
                <h1 className='text-[26px] font-medium font-inter leading-[31.2px]'>Comforty</h1>
             </div>

             <div className='flex gap-[12px] justify-center items-center w-[120px] h-[44px] bg-[#FFFFFF]  rounded-[8px]'>
             <Image src="/images/Buy 2.png" alt="logo" width={22} height={22} />
             <h1 className='text-[12px] font-medium font-inter leading-[13.2px] text-center'>Cart</h1>
             <h1 className='text-[10px] font-medium font-sans w-[20px] h-[20px]" bg-[#007580] text-[#FFFFFF] rounded-[70%] text-center'>2</h1>
             </div>
       </div>
    </main>
  )
}

export default NAVBAR;



