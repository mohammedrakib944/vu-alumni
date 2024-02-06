"use client"
import axiosBase from "@/axios/baseURL";
import React, { useState } from "react";
import { usePathname } from 'next/navigation'


const UpdatePassword = () => {
  const pathname = usePathname()
  const passwordResetToken = pathname.split('/').pop()
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await axiosBase.post("/user/reset-password", { passwordResetToken, password });
    alert(response.data.message);
  }

  return (
    <div className="min-h-[calc(100vh-111px)] bg-white flex justify-center items-center">
      <div className="max-w-[400px]">
        <h2>Update Password</h2>
        <form onSubmit={handleSubmit}>
          <p className="mt-6 mb-2">New Password</p>
          <input
            className="min-w-[300px] p-4 w-full inputs mb-6"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
          <button className="btn" type="submit">
            Update password
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
