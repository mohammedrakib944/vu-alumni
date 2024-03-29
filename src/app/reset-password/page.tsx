"use client"
import axiosBase from "@/axios/baseURL";
import React, { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await axiosBase.post("/user/reset-password-init", { email });
    alert(response.data.message);
  }

  return (
    <div className="min-h-[calc(100vh-111px)] bg-white flex justify-center items-center">
      <div className="max-w-[400px]">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <p className="mt-6 mb-2">Enter your email</p>
          <input
            className="min-w-[300px] p-4 w-full inputs mb-6"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
          <button className="btn" type="submit">
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
