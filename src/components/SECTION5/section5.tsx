import React from 'react'
import Image from "next/image"
function SCEION5() {
  return (
    <div className='flex mt-[200px] justify-center items-center gap-[20px]'>

        

        <div className=''>
        <p className='rotate-[-90deg] w-[648px]  text-[34px] font-inter font-normal  uppercase text-[#272343] relative right-[360px] top-[350px]'>Explore new and popular styles</p>
            <Image src={"/images/item-category 1.png"} alt="chair" width={648} height={648}/>
       </div>

       <div className='grid grid-cols-2 gap-[20px] mt-[50px]'>
        <Image src={"/images/card.png"} alt="chair" width={312} height={312}/>
        <Image src={"/images/card1.png"} alt="chair" width={312} height={312}/>
        <Image src={"/images/card2.png"} alt="chair" width={312} height={312}/>
        <Image src={"/images/card3.png"} alt="chair" width={312} height={312}/>
       </div>
    </div>
  )
}

export default SCEION5
