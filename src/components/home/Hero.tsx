import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Search from "../common/Search";
import Image from "next/image";
import Logo from "@/assets/logo_big.png";

const Hero = ({ setUsers, getData }: any) => {
  return (
    <div className="py-10 flex flex-col items-center border-b mb-8">
      <Image src={Logo} width="60" alt="VU png logo" />
      <h1 className="text-5xl font-extrabold text-center mt-4">
        <span className="text-primary">VU</span> Alumni Portal
      </h1>
      <p className="max-w-[600px] mt-3 mb-8 text-neutral text-center">
        Explore the Varendra University Alumni Directory, where the journeys of
        past students come to life. Connect, reminisce, and discover the diverse
        paths forged by our vibrant community.
      </p>
      <Search setUsers={setUsers} getData={getData} />
    </div>
  );
};

export default Hero;
