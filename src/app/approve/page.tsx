"use client"
import React, { useState, useEffect } from "react";
import { useUser } from "@/context/userContext";
import axiosBase from "@/axios/baseURL";

const ApproveUser = () => {
  const { user }: any = useUser();
  const [users, setUsers] = useState<any>(null);
  const getData = async () => {
    try {
      const response = await axiosBase.get("/user?isApproved=false");
      setUsers(response?.data?.users);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApprove = async (id: string) => {
    const token: any = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await axiosBase.put(`/user/${id}`, {
        isApproved: true,
      }, { headers });
      getData();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(users);

  return (
    <div className="min-h-[calc(100vh-111px)]">
      <h3 className="py-8">Registered Users</h3>
      <div className="overflow-x-auto rounded-lg border shadow-md">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Blood</th>
              <th>Session</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user: any) => (
              <tr key={user._id}>
                <th>{user.studentId}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.bloodGroup}</td>
                <td>{user.sessionYear}</td>
                <td>
                  <button
                    className="px-2 py-1 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    onClick={() => handleApprove(user._id)}
                  >
                    Approve
                  </button>
                  <a 
                    className="ml-2 px-2 py-1 text-xs font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    href={`/user/${user._id}`}
                    target="_blank"
                  >
                      View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveUser;
