"use client";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { useUser } from "@/context/userContext";
import logo from "@/assets/logo.jpg";
import Image from "next/image";

const Navbar = () => {
  const { user }: any = useUser();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="bg-primary/30 backdrop-blur-md z-20 sticky top-0">
      <div className="homeLayout py-[10px] flex items-center justify-between">
        <Link href="/">
          <h3 className="text-xl font-extrabold flex items-center gap-2">
            <Image src={logo} width="30" alt="vu-logo" />
            <div>
              <span className="">VU</span>
              <span className="text-lg">-Alumni</span>
            </div>
          </h3>
        </Link>
        <ul className="font-semibold flex items-center gap-3 md:gap-6 text-sm">
          {/* <li>
            <Link
              className="hover:text-primary duration-200 text-primary"
              href="#"
            >
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary duration-200" href="#">
              Notice
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary duration-200" href="#">
              About
            </Link>
          </li> */}
        </ul>
        {user ? (
          <div className="dropdown dropdown-hover dropdown-end">
            <div tabIndex={0}>
              <div className="flex gap-2">
                <div className="text-right">
                  <p className="text-sm font-semibold">{user?.name}</p>
                  <p className="text-xs">{user?.email}</p>
                </div>
                <img
                  src={
                    user?.photo ||
                    `https://api.dicebear.com/7.x/notionists/svg?seed=${user?._id}`
                  }
                  className="rounded-full w-10 h-10 border border-primary bg-white object-cover"
                  alt="User Image"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border rounded-lg w-52"
            >
              <li>
                <Link href={"/user/" + user?._id}>
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link href="/login">
              <button className="btn btn-sm">
                Sign In <AiOutlineArrowRight />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
