import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="py-20 flex flex-col items-center border-b mb-8">
      <h1 className="text-5xl font-extrabold text-center">
        <span className="text-primary">VU</span> Alumni Portal
      </h1>
      <p className="max-w-[600px] mt-3 mb-8 text-neutral text-center">
      Explore the VU Alumni Directory, where the journeys of past students come to life. 
      Connect, reminisce, and discover the diverse paths forged by our vibrant community.
      </p>
      <Link href="https://vu.edu.bd/" target="_blank">
        <button className="btn btn-sm">
          Main website <AiOutlineArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default Hero;
