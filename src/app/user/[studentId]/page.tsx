import React from "react";
import { AiFillEdit, AiFillLinkedin } from "react-icons/ai";
import Photo from "@/assets/rakib.jpg";
import Image from "next/image";
import Link from "next/link";

const Profie = () => {
  return (
    <div className="min-h-screen md:flex md:justify-center py-10">
      <div className="md:border-r md:pr-10">
        <Image
          src={Photo}
          className="w-[300px] mx-auto rounded-3xl border border-accent shadow-xl md:sticky md:top-28"
          alt="Md Rakib"
        />
      </div>
      <div className="w-full md:w-[400px] px-4 md:px-0 md:pl-10">
        <div className="text-center md:text-left">
          <h3 className="mt-5 md:mt-2">Md.Rakibuzzaman</h3>
          <p className="text-sm text-neutral pb-2">
            Full Stack Developer - XYZ Company
          </p>

          <Link href="#" className="text-2xl hover:text-primary ">
            <AiFillLinkedin />
          </Link>
        </div>
        <p className="pt-4 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quam
          commodi sapiente accusamus itaque qui impedit, voluptates iusto cumque
          vel repellat minima cum dolor. Ex saepe facere maiores dicta
          voluptatum!z
        </p>
        <table className="mt-6 table text-neutral border-l">
          <tbody>
            <tr>
              <td>Student ID</td>
              <td className="font-bold text-gray-700">20312300</td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td className="font-bold text-gray-700">0182932xxx</td>
            </tr>
            <tr>
              <td>Dept. Name</td>
              <td className="font-bold text-gray-700">CSE</td>
            </tr>
            <tr>
              <td>Batch</td>
              <td className="font-bold text-gray-700">23</td>
            </tr>
            <tr>
              <td>Program Name</td>
              <td className="font-bold text-gray-700">BSc in CSE</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td className="font-bold text-gray-700">Male</td>
            </tr>
          </tbody>
        </table>
        <Link href="edit/20311230">
          <button className="btn btn-sm mt-10">
            <AiFillEdit /> Edit Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profie;
