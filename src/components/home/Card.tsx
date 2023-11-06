import React from "react";
import Photo from "@/assets/rakib.jpg";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="max-w-[400px] flex flex-col items-center border rounded-2xl p-4 group mt-5 md:mt-20">
      <Link href="/rakib">
        <Image
          src={Photo}
          className="w-[100px] h-[100px] md:w-[180px] md:h-[180px] object-cover rounded-full border-2 -mt-10 md:-mt-20 shadow-lg group-hover:shadow-none shadow-black/20 hover:cursor-pointer duration-200 grayscale group-hover:border-primary group-hover:scale-105 group-hover:filter-none"
          alt="Rakib"
        />
      </Link>
      <div className="text-center">
        <Link href="/rakib">
          <h4 className="pt-5 md:text-lg group-hover:text-primary duration-150 cursor-pointer">
            Md.Rakibuzzaman
          </h4>
        </Link>
        <p className="text-xs md:text-sm text-neutral pb-2">
          Full Stack Developer
        </p>
        <h6 className="text-xs md:text-sm font-bold mb-3">CSE / Batch 23</h6>
      </div>
    </div>
  );
};

export default Card;
