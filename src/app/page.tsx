"use client";
import React from "react";
import Card from "@/components/home/Card";
import Hero from "@/components/home/Hero";
import { AiOutlineDown } from "react-icons/ai";
import Loader from "@/components/common/Loader";
import axiosBase from "@/axios/baseURL";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<any>(null);
  const getData = async () => {
    try {
      const response = await axiosBase.get("/user");
      setUsers(response?.data?.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <main>
      <Hero />
      <div className="flex justify-between items-center mb-5">
        <h4>ALUMNI LIST</h4>
        <select
          className="select select-bordered select-sm w-[200px]"
          defaultValue="Department"
        >
          <option disabled>Department</option>
          <option>CSE</option>
          <option>EEE</option>
          <option>English</option>
        </select>
      </div>
      <div className="min-h-[70vh]">
        {!users ? <Loader /> : ""}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {users
            ? users.map((user: any) => (
                <React.Fragment key={user._id}>
                  <Card user={user} />
                </React.Fragment>
              ))
            : ""}
        </div>
      </div>
      {/* <div className="flex justify-center">
        <button className="btn btn-sm">
          Load more <AiOutlineDown />
        </button>
      </div> */}
      <div className="h-[100px]"></div>
    </main>
  );
}
