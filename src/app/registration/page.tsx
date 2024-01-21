"use client";
import React, { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/common/Input";
import toast, { Toaster } from "react-hot-toast";
import axiosBase from "@/axios/baseURL";

type Inputs = {
  studentId: string;
  name: string;
  mobile: string;
  password: string;
  photo: string;
  studentEmail: string;
  personalEmail: string;
  gender: string;
  deptName: string;
  programName: string;
  bloodGroup: string;
  startSession: string;
  endSession: string;
  batch: Number;
};

const Registration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    try {
      const res = await axiosBase.post("/user", data);
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
        <Input
          label="Student ID"
          name="studentId"
          register={register}
          errors={errors}
        />
        <Input label="Name" name="name" register={register} errors={errors} />
        <Input
          label="Mobile"
          name="mobile"
          register={register}
          errors={errors}
        />
        <Input
          label="Password"
          name="password"
          register={register}
          errors={errors}
        />
        <Input label="Photo" name="photo" register={register} errors={errors} />
        <Input
          type="email"
          label="Student Email"
          name="studentEmail"
          register={register}
          errors={errors}
        />
        <Input
          type="email"
          label="Personal Email"
          name="personalEmail"
          register={register}
          errors={errors}
        />
        <Input
          label="Department Name"
          name="deptName"
          register={register}
          errors={errors}
        />
        <Input
          label="Program Name"
          name="programName"
          register={register}
          errors={errors}
        />
        <Input
          label="Blood Group"
          name="bloodGroup"
          register={register}
          errors={errors}
        />
        <Input
          label="Start Session"
          name="startSession"
          register={register}
          errors={errors}
        />
        <Input
          label="End Session"
          name="endSession"
          register={register}
          errors={errors}
        />
        <Input label="Batch" name="batch" register={register} errors={errors} />

        <div className="mb-3">
          <label className="text-sm pb-1">Gender</label>
          <select
            {...register("gender")}
            className="select select-bordered  w-full rounded-none inputs"
          >
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="w-full flex items-center gap-3 justify-center mt-6">
          <button type="submit" className="btn btn-sm" disabled={isLoading}>
            Register <AiOutlineLogin />
          </button>
          <Link className="text-center btn btn-sm bg-gray-500" href="/login">
            Login
          </Link>
        </div>
      </form>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default Registration;
