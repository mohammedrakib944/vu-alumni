import React from "react";
import Link from "next/link";

const Card = ({ user }: any) => {
  return (
    <div className="max-w-[400px] h-fit flex flex-col items-center border rounded-2xl p-4 group mt-5 md:mt-20">
      <Link href={`/user/${user?._id}`}>
        <img
          src={user?.photo || `https://api.dicebear.com/7.x/notionists/svg?seed=${user?._id}`}
          className="w-[100px] h-[100px] bg-gradient-to-tr from-primary to-green-400 md:w-[180px] md:h-[180px] object-cover rounded-full border-2 -mt-10 md:-mt-20 shadow-lg group-hover:shadow-none shadow-black/20 hover:cursor-pointer duration-200 group-hover:border-primary group-hover:scale-105 group-hover:filter-none"
          alt="Rakib"
        />
      </Link>
      <div className="text-center">
        <Link href={`/user/${user?._id}`}>
          <h4 className="pt-5 md:text-lg group-hover:text-primary duration-150 cursor-pointer">
            {user?.name}
          </h4>
        </Link>
        <h6 className="text-xs md:text-sm font-bold mb-2">
          {user?.personalEmail}
        </h6>
        <p className="text-xs md:text-sm text-neutral pb-2">
          {user?.deptName} / {user?.batch}
        </p>
        <p className="text-xs md:text-sm text-neutral pb-2">
          Student ID: {user?.studentId}
        </p>
      </div>
    </div>
  );
};

export default Card;
