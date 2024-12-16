// components/CompanyLogos.js
import Image from "next/image";

function SECTION2() {
  const logos = [
    { src: "/images/Logo.png", alt: "Zapier" },
    { src: "/images/Logo1.png", alt: "Pipedrive" },
    { src: "/images/Logo2.png", alt: "CIB Bank" },
    { src: "/images/Logo3.png", alt: "Zoho" },
    { src: "/images/Logo4.png", alt: "Burnt Toast" },
    { src: "/images/Logo5.png", alt: "PandaDoc" },
    { src: "/images/Logo6.png", alt: "Moz" },
  ];

  return (
    <section className="bg-[#FFFFFF]  m-auto py-8 ">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={logo.src} // Ensure images are placed in the public/images folder
                alt={logo.alt}
                width={100}
                height={50}
                className="object-contain sm_max:w-[50px] sm_max:h-[30] "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SECTION2;
