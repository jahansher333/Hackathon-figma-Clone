import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link";
function FOOTER() {
  return (
    <main>
      <div className="flex justify-around items-center mt-[60px] pl-[300px] pr-[300px] border-y-[1px] border-[#E1E3E5] text-[#272343] pb-[50px] sm_max:flex-col sm_max:justify-center sm_max:items-center sm_max:pl-0 sm_max:pr-0 sm_max:pt-[10px] sm_max:gap-[20px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex gap-[8px]">
            <Image
              src="/images/Logo Icon.png"
              alt="logo"
              width={40}
              height={40}
            />
            <h1 className='text-[26px] font-medium font-inter leading-[31.2px]'>Comforty</h1>
          </div>

          <div className="w-[350px]">
            <p className="w-[340px] text-[16px] font-inter font-normal leading-[24px] sm_max:w-[240px] sm_max:text-[10px]">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus{" "}
            </p>
          </div>

          <div className="flex gap-[20px]">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
            <FaYoutube />
          </div>
        </div>
        <div className="flex gap-[30px] sm_max:flex sm_max:gap-[30px]">
        <div className="flex flex-col gap-[20px] list-none pt-[80px]">
          <h1 className="text-[14px] font-inter font-medium leading-[15.4px] text-[#9A9C99]">Category</h1>

          <li className="text-[16px] font-normal font-inter leading-[17.6px]">
            <Link href="/">Sofa</Link>
          </li>
          <li className="text-[16px] font-normal font-inter leading-[17.6px]">
            <Link href="/">Armchair</Link>
          </li>
          <li className="text-[16px] font-normal font-inter leading-[17.6px]">
            <Link href="/">Wing Chair</Link>
          </li>
          <li className="text-[16px] font-normal font-inter leading-[17.6px]">
            <Link href="/">Desk Chair</Link>
          </li>
          <li className="text-[16px] font-normal font-inter leading-[17.6px]">
            <Link href="/">wooden Chair</Link>
          </li>
          <li className="text-[16px] font-normal font-inter leading-[17.6px]">
            <Link href="/">Park Bench</Link>
          </li>
        </div>

        <div className="flex flex-col gap-[20px] list-none pt-[80px]">
            <h1 className="text-[14px] font-inter font-medium leading-[15.4px] text-[#9A9C99]">Support</h1>
          <li className="text-[16px] font-normal font-inter leading-[17.6px]">
            <Link href="/">Help & Support</Link>
          </li>
          <li className="text-[16px] font-normal font-inter leading-[17.6px]">
            <Link href="/">Tearms & Conditions</Link>
          </li>
          <li className="text-[16px] font-normal font-inter leading-[17.6px]">
            <Link href="/">Privacy Policy</Link>
          </li>
          <li className="text-[16px] font-normal font-inter leading-[17.6px]">
            <Link href="/">Help</Link>
          </li>
        </div>
        </div>
        <div className="pb-[30px] flex flex-col gap-[20px] sm_max:pt-[10px]">
          <p className="text-[14px] font-inter font-medium leading-[15.4px] text-[#9A9C99]">Newsletter</p>

          <div className="flex gap-[10px] sm_max:flex-col">
          <Input type="email" placeholder="Email" className="sm_max:w-[300px]"/>
          <Button className="w-[127px] h-[44px] bg-[#007580] text-[#FFFFFF] rounded-[8px]">Subscribe</Button>
          </div>
          <p className="w-[410px] text-[15px] font-inter font-normal leading-[24px] sm_max:w-[240px] sm_max:text-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>

            
       
      </div>
    </main>
  );
}

export default FOOTER;
