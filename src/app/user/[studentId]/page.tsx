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
          src={
            user?.photo ||
            `https://api.dicebear.com/7.x/notionists/svg?seed=${user?._id}`
          }
          className="w-[300px] min-h-[300px] mx-auto bg-gradient-to-t from-primary to-primary/50 rounded-3xl shadow-xl md:sticky md:top-28"
          alt="Md Rakib"
        />
      </div>
      <div className="w-full md:w-[400px] px-4 md:px-0 md:pl-10">
        <div className="text-center md:text-left">
          <h3 className="mt-5 md:mt-2">{user?.name}</h3>
          <p className="text-sm text-neutral pb-2">{user?.email}</p>

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
              <td className="font-bold text-gray-700">{user?.mobile}</td>
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
              <td>Student Email</td>
              <td className="font-bold text-gray-700">{user?.studentEmail}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td className="font-bold text-gray-700">{user?.email}</td>
            </tr>
            <tr>
              <td>Session</td>
              <td className="font-bold text-gray-700">
                {user?.session}-{user?.sessionYear}
              </td>
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
        <table className="w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200">Company Name</th>
              <th className="px-4 py-2 bg-gray-200">Job Title</th>
              <th className="px-4 py-2 bg-gray-200">Job Location</th>
              <th className="px-4 py-2 bg-gray-200">Start Date</th>
              <th className="px-4 py-2 bg-gray-200">End Date</th>
            </tr>
          </thead>
          <tbody>
            {user?.jobExp.map((job: any, index: any) => (
              <tr key={index}>
                <td className="px-4 py-2">{job.companyName}</td>
                <td className="px-4 py-2">{job.jobTitle}</td>
                <td className="px-4 py-2">{job.location}</td>
                <td className="px-4 py-2">{job.startDate}</td>
                <td className="px-4 py-2">{job.endDate}</td>
              </tr>
            ))}
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
