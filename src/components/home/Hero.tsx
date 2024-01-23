import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Search from "../common/Search";

const Hero = () => {
  return (
    <div className="py-20 flex flex-col items-center border-b mb-8">
      <h1 className="text-5xl font-extrabold text-center">
        <span className="text-primary">VU</span> Alumni Legacy
      </h1>
      <p className="max-w-[600px] mt-3 mb-8 text-neutral text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
        eaque excepturi vel consectetur ratione aspernatur incidunt. Harum
        reiciendis, velit repellat maxime sequi dicta.
      </p>
      <Search />
    </div>
  );
};

export default Hero;
