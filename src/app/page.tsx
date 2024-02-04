"use client";
import React from "react";
import Card from "@/components/home/Card";
import Hero from "@/components/home/Hero";
import { AiOutlineDown } from "react-icons/ai";
import Loader from "@/components/common/Loader";
import axiosBase from "@/axios/baseURL";
import { useEffect, useState } from "react";
import ListCard from "@/components/home/ListCard";
import { IoGridOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa";

export default function Home() {
  const [listView, setListView] = useState<boolean>(true);
  const [users, setUsers] = useState<any>(null);
  const getData = async () => {
    try {
      const response = await axiosBase.get("/user?isApproved=true");
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
      <Hero setUsers={setUsers} getData={getData} />
      <div className="flex justify-between gap-3 items-center mb-5">
        <div className="flex items-center gap-2 md:gap-5">
          <h4 className="text-sm md:text-base">ALUMNI LIST</h4>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setListView(true)}
              className={`p-2 border hover:bg-primary ${
                listView && "bg-primary text-white"
              } hover:text-white rounded`}
            >
              <FaList />
            </button>
            <button
              onClick={() => setListView(false)}
              className={`p-2 border hover:bg-primary ${
                !listView && "bg-primary text-white"
              } hover:text-white rounded`}
            >
              <IoGridOutline />
            </button>
          </div>
        </div>
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

        {listView ? (
          <div className="grid lg:grid-cols-2 gap-3">
            {users
              ? users.map((user: any) => (
                  <React.Fragment key={user._id}>
                    <ListCard user={user} />
                  </React.Fragment>
                ))
              : ""}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {users
              ? users.map((user: any) => (
                  <React.Fragment key={user._id}>
                    <Card user={user} />
                  </React.Fragment>
                ))
              : ""}
          </div>
        )}
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
