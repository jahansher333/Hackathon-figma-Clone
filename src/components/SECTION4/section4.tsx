// FeaturedProducts.tsx
import Image from "next/image";

import { Product } from "@/components/Product/product";

const products: Product[] = [
  {
    id: 1,
    name: "Wing Chair",
    name1: "3,584 Products",
    image: "/images/Image.png",
  },
  {
    id: 2,
    name: "Wooden Chair",
    name1: "157 Products",
    image: "/images/Image1.png",
  },
  {
    id: 3,
    name: "Desk Chair",
    name1: "154 Products",
    image: "/images/Image2.png",
  },
  // ... other products
];

const FeaturedProducts = () => {
  return (
    <main className="m-auto grid justify-center items-center gap-[20px]  mt-[100px]">
      <h2 className="text-[32px] font-semi-bold leading-[32.2px]">
        Top categories
      </h2>
      <div className="grid justify-center items-center">
        <div className="grid grid-cols-1 justify-center items-center  gap-[50px]">
          {products.map((product) => (
            <div key={product.id} className="rounded-none">
              <Image
                src={product.image}
                alt={product.name}
                width={220}
                height={220}
                className=""
              />
              <div className="flex flex-col w-[220px] bg-[#000000] rounded-b-[10px]  p-[10px] gap-[8px]  ">
                <h3 className="text-[20px] leading-[22px] font-normal font-inter text-white">
                  {product.name}
                </h3>
                <p className="text-white text-[14px] font-normal font-inter leading-[15.4px]">
                  ${product.name1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FeaturedProducts;
