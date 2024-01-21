"use client";
import React from "react";
import { AiFillEdit, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import axiosBase from "@/axios/baseURL";
import { useEffect, useState } from "react";
import { useUser } from "@/context/userContext";

const Profie = ({ params }: any) => {
  const [user, setUser] = useState<any>(null);
  const [logedinUser, setLogedinUser] = useState<any>(null);

  const getData = async () => {
    try {
      const response = await axiosBase.get("/user/" + params.studentId);
      setUser(response?.data?.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    let local_user: any = localStorage.getItem("user");
    local_user = JSON.parse(local_user);
    if (local_user) setLogedinUser(local_user);
  }, []);
  return (
    <div className="min-h-screen md:flex md:justify-center py-10">
      <div className="md:border-r md:pr-10">
        <img
          src={user?.photo || "/img/avatar.png"}
          className="w-[300px] min-h-[300px] mx-auto bg-gradient-to-tr from-primary to-green-400 rounded-3xl border border-black/30 shadow-xl md:sticky md:top-28"
          alt="Md Rakib"
        />
      </div>
      <div className="w-full md:w-[400px] px-4 md:px-0 md:pl-10">
        <div className="text-center md:text-left">
          <h3 className="mt-5 md:mt-2">{user?.name}</h3>
          <p className="text-sm text-neutral pb-2">{user?.personalEmail}</p>

          {/* <Link href="#" className="text-2xl hover:text-primary ">
            <AiFillLinkedin />
          </Link> */}
        </div>
        {/* <p className="pt-4 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quam
          commodi sapiente accusamus itaque qui impedit, voluptates iusto cumque
          vel repellat minima cum dolor. Ex saepe facere maiores dicta
          voluptatum!z
        </p> */}
        <table className="mt-6 table text-neutral border-l">
          <tbody>
            <tr>
              <td>Student ID</td>
              <td className="font-bold text-gray-700">{user?.studentId}</td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td className="font-bold text-gray-700">
                {user?.mobile.map((num: any, index: number) => (
                  <span key={index}>{num}</span>
                ))}
              </td>
            </tr>
            <tr>
              <td>Dept. Name</td>
              <td className="font-bold text-gray-700">{user?.deptName}</td>
            </tr>
            <tr>
              <td>Batch</td>
              <td className="font-bold text-gray-700">{user?.batch}</td>
            </tr>
            <tr>
              <td>studentEmail</td>
              <td className="font-bold text-gray-700">{user?.studentEmail}</td>
            </tr>
            <tr>
              <td>personalEmail</td>
              <td className="font-bold text-gray-700">{user?.personalEmail}</td>
            </tr>
            <tr>
              <td>Start Session</td>
              <td className="font-bold text-gray-700">{user?.startSession}</td>
            </tr>
            <tr>
              <td>End Session</td>
              <td className="font-bold text-gray-700">{user?.endSession}</td>
            </tr>
            <tr>
              <td>Program Name</td>
              <td className="font-bold text-gray-700">{user?.programName}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td className="font-bold text-gray-700">{user?.gender}</td>
            </tr>
            <tr>
              <td>Blood Group</td>
              <td className="font-bold text-gray-700">{user?.bloodGroup}</td>
            </tr>
          </tbody>
        </table>

        {logedinUser && user && logedinUser?.id === user._id && (
          <Link href={"edit/" + user._id}>
            <button className="btn btn-sm mt-10">
              <AiFillEdit /> Edit Profile
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Profie;
