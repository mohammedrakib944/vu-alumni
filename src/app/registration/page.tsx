"use client";
import React, { useState } from "react";
import { AiOutlineLogin, AiOutlineUser, AiOutlineTeam } from "react-icons/ai";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/common/Input";
import toast, { Toaster } from "react-hot-toast";
import axiosBase from "@/axios/baseURL";

type Inputs = {
  studentId: string;
  name: string;
  password: string;
  email: string;
  mobile: string;
  userType: "student" | "faculty";
};

const Registration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState<"student" | "faculty">("student");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);

    data.userType = userType;
    if (userType === "faculty") data.studentId = "0";

    try {
      await axiosBase.post("/user", data);
      setIsLoading(false);
      toast.success("User created success!");
      reset();
    } catch (error) {
      toast.error("User creation fail!");
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-[400px] min-h-[calc(100vh-123px)] mx-auto">
      <Toaster />
      <h2 className="pt-8 text-center border-b pb-2">Create Account</h2>
      <form className="my-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex items-center gap-3 justify-center mb-6">
          <button
            onClick={() => setUserType("student")}
            type="button" 
            className={`btn btn-sm rounded bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-900 border-indigo-500 ${userType === 'student' && "border-b-4 border-indigo-500"}`}>
            Register as Student <AiOutlineTeam />
          </button>

          <button
            onClick={() => setUserType("faculty")} 
            type="button" 
            className={`btn btn-sm rounded bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-900 border-indigo-500 ${userType === 'faculty' && "border-b-4 border-indigo-500"}`}>
            Register as Teacher <AiOutlineUser />
          </button>
        </div>
        {userType === "student" && (
          <Input 
            label="Student ID"
            name="studentId"
            register={register}
            errors={errors}
          />
        )}
        <Input label="Name" name="name" register={register} errors={errors} />
        <Input label="Mobile" name="mobile" register={register} errors={errors} />
        <Input
          type="email"
          label="Personal Email"
          name="email"
          register={register}
          errors={errors}
        />
        <Input
          label="Password"
          name="password"
          register={register}
          errors={errors}
        />
        
        <div className="w-full flex items-center gap-3 justify-center mt-6">
          <Link className="text-center btn btn-sm bg-gray-500" href="/">
            Cancle
          </Link>
          <button type="submit" className="btn btn-sm" disabled={isLoading}>
            Register <AiOutlineLogin />
          </button>
        </div>
        <div className="text-sm text-center pt-8">
          Already have an account?{" "}
          <Link
            className="text-primary underline hover:text-blue-600"
            href="/login"
          >
            Login Here
          </Link>
        </div>
      </form>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default Registration;
