"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/common/Input";
import toast, { Toaster } from "react-hot-toast";
import axiosBase from "@/axios/baseURL";
import { useUser } from "@/context/userContext";

type Inputs = {
  studentId: string;
  name: string;
  mobile: string;
  password: string;
  photo: string;
  studentEmail: string;
  email: string;
  gender: string;
  deptName: string;
  programName: string;
  bloodGroup: string;
  startSession: string;
  endSession: string;
  batch: Number;
};

const Edit = () => {
  const { user }: any = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    reset(user);
  }, [user]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);

    let local_user: any = localStorage.getItem("user");
    let token: any = localStorage.getItem("token");
    local_user = JSON.parse(local_user);

    if (user?._id !== local_user.id || !token) {
      toast.error("You are not authorized!");
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      await axiosBase.put("/user/" + user._id, data, { headers });
      setIsLoading(false);
      window.location.reload();
    } catch (error) {
      toast.error("User update fail!");
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
          name="email"
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
          <Link className="text-center btn btn-sm bg-gray-500" href="/">
            Cancle
          </Link>
          <button type="submit" className="btn btn-sm" disabled={isLoading}>
            Update <AiOutlineLogin />
          </button>
        </div>
      </form>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default Edit;
