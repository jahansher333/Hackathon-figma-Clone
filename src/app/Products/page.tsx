import React from "react";
import Image from "next/image";
import HEADER from "@/components/HEADER/header";
import NAVBAR from "@/components/NAVBAR/navbar";
import MENU from "@/components/NAVBARMENU/menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FOOTER from "@/components/FOOTER/footer";
import FOOTER2 from "@/components/FOOTER/footer2";
import Link from "next/link"

function AllProduct() {
  return (
    <div>
      {/* navbars */}
      <div>
        <HEADER />
        <NAVBAR />
        <MENU />
      </div>
      {/* div */}
      <div className="flex flex-col gap-[30px] mt-[20px]">
        <h1 className="text-[32px] font-inter font-semi-bold pl-[300px]">
          All Products
        </h1>

        <div className="grid grid-cols-4 gap-2 justify-center items-center pl-[300px] pr-[300px] gap-y-[70px]">
          {/* div1 */}
          <div className="w-[312px] h-[377px] bg-[#FFFFFF]">
            <Image
              src="/images/chair1.png"
              alt="chair"
              width={312}
              height={312}
            />
            <div className="flex justify-between mt-[10px]">
              <div className="flex flex-col gap-[7px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#007580]">
                  Library Stool Chair
                </p>
                <p className="text-[18px] font-inter leading-[19.8px]">$20</p>
              </div>
              <div className="w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]">
                <Image
                  src="/images/Buy 2.png"
                  alt="chair"
                  width={18.5}
                  height={18.4}
                  className="text-white"
                />
              </div>
            </div>
          </div>

          {/* div2 */}
          <div className="w-[312px] h-[377px] bg-[#FFFFFF]">
            <Image
              src="/images/chair2.png"
              alt="chair"
              width={312}
              height={312}
            />
            <div className="flex justify-between mt-[10px]">
              <div className="flex flex-col gap-[7px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#007580]">
                  Library Stool Chair
                </p>
                <p className="text-[18px] font-inter leading-[19.8px]">$20</p>
              </div>
              <div className="w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]">
                <Link href="./ADD-CARD">
                <Image
                  src="/images/Buy 2.png"
                  alt="chair"
                  width={18.5}
                  height={18.4}
                  className="text-white"
                />
                </Link>
                
              </div>
            </div>
          </div>

          {/* div3 */}

          <div className="w-[312px] h-[377px] bg-[#FFFFFF]">
            <Image
              src="/images/chair3.png"
              alt="chair"
              width={312}
              height={312}
            />
            <div className="flex justify-between mt-[10px] ">
              <div className="flex flex-col gap-[7px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#007580]">
                  Library Stool Chair
                </p>
                <p className="text-[18px] font-inter leading-[19.8px]">$20</p>
              </div>
              <div className="w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]">
                <Image
                  src="/images/Buy 2.png"
                  alt="chair"
                  width={18.5}
                  height={18.4}
                  className="text-white"
                />
              </div>
            </div>
          </div>

          {/* div4 */}

          <div className="w-[312px] h-[377px] bg-[#FFFFFF]">
            <Image
              src="/images/chair4.png"
              alt="chair"
              width={312}
              height={312}
            />
            <div className="flex justify-between mt-[10px]">
              <div className="flex flex-col gap-[7px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#007580]">
                  Library Stool Chair
                </p>
                <p className="text-[18px] font-inter leading-[19.8px]">$20</p>
              </div>
              <div className="w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]">
                <Image
                  src="/images/Buy 2.png"
                  alt="chair"
                  width={18.5}
                  height={18.4}
                  className="text-white"
                />
              </div>
            </div>
          </div>

          {/* div5 */}

          <div className="w-[312px] h-[377px] bg-[#FFFFFF]">
            <Image
              src="/images/chair21.png"
              alt="chair"
              width={312}
              height={312}
            />
            <div className="flex justify-between mt-[10px]">
              <div className="flex flex-col gap-[7px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#007580]">
                  Library Stool Chair
                </p>
                <p className="text-[18px] font-inter leading-[19.8px]">$20</p>
              </div>
              <div className="w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]">
                <Image
                  src="/images/Buy 2.png"
                  alt="chair"
                  width={18.5}
                  height={18.4}
                  className="text-white"
                />
              </div>
            </div>
          </div>

          {/* div6 */}

          <div className="w-[312px] h-[377px] bg-[#FFFFFF]">
            <Image
              src="/images/card1.png"
              alt="chair"
              width={312}
              height={312}
            />
            <div className="flex justify-between mt-[10px]">
              <div className="flex flex-col gap-[7px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#007580]">
                  Library Stool Chair
                </p>
                <p className="text-[18px] font-inter leading-[19.8px]">$20</p>
              </div>
              <div className="w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]">
                <Image
                  src="/images/Buy 2.png"
                  alt="chair"
                  width={18.5}
                  height={18.4}
                  className="text-white"
                />
              </div>
            </div>
          </div>

          {/* div7 */}

          <div className="w-[312px] h-[377px] bg-[#FFFFFF]">
            <Image
              src="/images/card2.png"
              alt="chair"
              width={312}
              height={312}
            />
            <div className="flex justify-between mt-[10px]">
              <div className="flex flex-col gap-[7px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#007580]">
                  Library Stool Chair
                </p>
                <p className="text-[18px] font-inter leading-[19.8px]">$20</p>
              </div>
              <div className="w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]">
                <Image
                  src="/images/Buy 2.png"
                  alt="chair"
                  width={18.5}
                  height={18.4}
                  className="text-white"
                />
              </div>
            </div>
          </div>

          {/* div8 */}

          <div className="w-[312px] h-[377px] bg-[#FFFFFF]">
            <Image
              src="/images/card3.png"
              alt="chair"
              width={312}
              height={312}
            />
            <div className="flex justify-between mt-[10px]">
              <div className="flex flex-col gap-[7px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#007580]">
                  Library Stool Chair
                </p>
                <p className="text-[18px] font-inter leading-[19.8px]">$20</p>
              </div>
              <div className="w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]">
                <Image
                  src="/images/Buy 2.png"
                  alt="chair"
                  width={18.5}
                  height={18.4}
                  className="text-white"
                />
              </div>
            </div>
          </div>

          {/* div9 */}

          <div className="w-[312px] h-[377px] bg-[#FFFFFF]">
            <Image
              src="/images/Image.png"
              alt="chair"
              width={312}
              height={312}
            />
            <div className="flex justify-between mt-[10px]">
              <div className="flex flex-col gap-[7px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#007580]">
                  Library Stool Chair
                </p>
                <p className="text-[18px] font-inter leading-[19.8px]">$20</p>
              </div>
              <div className="w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]">
                <Image
                  src="/images/Buy 2.png"
                  alt="chair"
                  width={18.5}
                  height={18.4}
                  className="text-white"
                />
              </div>
            </div>
          </div>

          {/* div10 */}

          <div className="w-[312px] h-[377px] bg-[#FFFFFF]">
            <Image
              src="/images/chair2.png"
              alt="chair"
              width={312}
              height={312}
            />
            <div className="flex justify-between mt-[10px]">
              <div className="flex flex-col gap-[7px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#007580]">
                  Library Stool Chair
                </p>
                <p className="text-[18px] font-inter leading-[19.8px]">$20</p>
              </div>
              <div className="w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]">
                <Image
                  src="/images/Buy 2.png"
                  alt="chair"
                  width={18.5}
                  height={18.4}
                  className="text-white"
                />
              </div>
            </div>
          </div>

          {/* div11 */}

          <div className="w-[312px] h-[377px] bg-[#FFFFFF]">
            <Image
              src="/images/chair3.png"
              alt="chair"
              width={312}
              height={312}
            />
            <div className="flex justify-between mt-[10px]">
              <div className="flex flex-col gap-[7px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#007580]">
                  Library Stool Chair
                </p>
                <p className="text-[18px] font-inter leading-[19.8px]">$20</p>
              </div>
              <div className="w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]">
                <Image
                  src="/images/Buy 2.png"
                  alt="chair"
                  width={18.5}
                  height={18.4}
                  className="text-white"
                />
              </div>
            </div>
          </div>

          {/* div12  */}

          <div className="w-[312px] h-[377px] bg-[#FFFFFF]">
            <Image
              src="/images/Image2.png"
              alt="chair"
              width={312}
              height={312}
            />
            <div className="flex justify-between mt-[10px]">
              <div className="flex flex-col gap-[7px]">
                <p className="text-[16px] font-inter font-normal leading-[20.8px] text-[#007580]">
                  Library Stool Chair
                </p>
                <p className="text-[18px] font-inter leading-[19.8px]">$20</p>
              </div>
              <div className="w-[44px] h-[44px] bg-[#F0F2f3] flex justify-center items-center  rounded-[20%]">
                <Image
                  src="/images/Buy 2.png"
                  alt="chair"
                  width={18.5}
                  height={18.4}
                  className="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* newsection */}
      <div className="flex flex-col justify-center items-center mt-[80px] w-screen h-[725px] pt-[00px] bg-slate-100 opacity-5%">
        <div className="flex flex-col gap-[50px]">
          <h2 className="text-[50px] font-roboto font-medium leading-[58.59px]">
            Or subscribe to the newsletter
          </h2>
          <div className="flex gap-[10px]">
            <Input type="email" placeholder="Email" />
            <Button className="w-[127px] h-[44px] bg-[#007580] text-[#FFFFFF] rounded-[8px]">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-[50px] mt-[50px]">
          <h2 className="text-[50px] font-roboto font-medium leading-[58.59px]">
            Follow products and discounts on Instagram
          </h2>

          <div className="flex gap-[24px]">
            <Image
              src="/images/chair21.png"
              alt="chair"
              width={186}
              height={186}
            />
            <Image
              src="/images/Image.png"
              alt="chair"
              width={200}
              height={200}
            />
            <Image
              src="/images/chair2.png"
              alt="chair"
              width={200}
              height={200}
            />
            <Image
              src="/images/chair1.png"
              alt="chair"
              width={200}
              height={200}
            />
            <Image
              src="/images/chair3.png"
              alt="chair"
              width={196}
              height={196}
            />
            <Image
              src="/images/Image2.png"
              alt="chair"
              width={200}
              height={200}
            />
          </div>
         
        </div>
      
      </div>
      <div className="border-none">
        <FOOTER />
        <FOOTER2 />
      </div>
    </div>
  );
}

export default AllProduct;
