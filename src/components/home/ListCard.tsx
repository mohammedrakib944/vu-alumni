import React from "react";
import Link from "next/link";

const ListCard = ({ user }: any) => {
  return (
    <Link href={`/user/${user?._id}`}>
      <div className="bg-primary/10 rounded-lg overflow-hidden border border-primary/20 flex items-center gap-3 hover:shadow-xl duration-150">
        <img
          src={
            user?.photo ||
            `https://api.dicebear.com/7.x/notionists/svg?seed=${user?._id}`
          }
          className="w-[150px] md:w-[230px] h-[130px] md:h-[160px] object-cover bg-primary/70"
          alt={user?.name}
        />

        <div className="">
          {/* <Link href={`/user/${user?._id}`}> */}
          <h4 className="md:text-lg group-hover:text-primary duration-150 cursor-pointer">
            {user?.name}
          </h4>
          {/* </Link> */}
          <h6 className="text-xs md:text-sm font-bold mb-1">{user?.email}</h6>
          <p className="text-xs md:text-sm text-gray-600">
            Student ID: {user?.studentId}
          </p>
          <p className="text-xs md:text-sm text-gray-600">
            Batch: {user?.batch} / {user?.deptName}
          </p>
          <p className="text-xs md:text-sm text-gray-600">
            Mobile: {user?.mobile}
          </p>
          <p className="text-xs md:text-sm text-gray-600">
            Blood: {user?.bloodGroup}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
