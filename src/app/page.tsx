// import Image from "next/image";
"use client";

import HEADER from "@/components/HEADER/header";
import NAVBAR from "@/components/NAVBAR/navbar";
import MENU from "@/components/NAVBARMENU/menu";
import SECTION1 from "@/components/SECTION1/section1"
import SECTION2 from "@/components/SECTION2/section2"
import SECTION3 from "@/components/SECTION3/section3"
import SECTION4 from "@/components/SECTION4/section4"
import SECTION5 from "@/components/SECTION5/section5"
import SECTION6 from "@/components/SECTION6/section6"
import FOOTER from "@/components/FOOTER/footer"
import FOOTER2 from "@/components/FOOTER/footer2"

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HEADER />
      <NAVBAR />
      <MENU />
      <SECTION1 />
      <SECTION2 />
      <SECTION3 />
      <SECTION4 />
      <SECTION5 />
      <SECTION6 />
      <FOOTER />
      <FOOTER2 />
    </div>
  );
}
