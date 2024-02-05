"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/common/Input";
import toast, { Toaster } from "react-hot-toast";
import axiosBase from "@/axios/baseURL";
import { useUser } from "@/context/userContext";
import JobExperienceForm from '@/components/common/JobExperienceForm';

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
  } = useForm<any>();

  useEffect(() => {
    reset(user);
  }, [user]);

  const onSubmit: SubmitHandler<any> = async (data) => {
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
    <div className="max-w-[600px] min-h-[calc(100vh-123px)] mx-auto">
      <Toaster />
      <h2 className="pt-8 text-center border-b pb-2">Update Profile</h2>
      
      <form
        className="my-6 lg:grid lg:grid-cols-2 gap-x-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input 
          label="Name" 
          name="name" 
          register={register} 
          errors={errors} 
        />
        <Input
          label="Student ID"
          name="studentId"
          register={register}
          errors={errors}
        />
        <Input
          type="email"
          label="Email"
          name="email"
          register={register}
          errors={errors}
        />
        <Input
          label="Mobile"
          name="mobile"
          register={register}
          errors={errors}
        />
        <Input
          type="email"
          label="Student Email"
          name="studentEmail"
          register={register}
          errors={errors}
        />
        <div className="mb-3">
          <label className="text-sm pb-1">Blood Group</label>
          <select
            {...register("bloodGroup")}
            className="select select-bordered  w-full rounded-none inputs"
          >
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="text-sm pb-1">Department Name</label>
          <select
            {...register("deptName")}
            className="select select-bordered  w-full rounded-none inputs"
          >
            <option value="Pharmacy">Pharmacy</option>
            <option value="CSE">CSE</option>
            <option value="EEE">EEE</option>
            <option value="English">English</option>
            <option value="Islamic History">Islamic History</option>
            <option value="Business">Business</option>
            <option value="Economics">Economics</option>
            <option value="JCMS">JCMS</option>
            <option value="Sociology">Sociology</option>
            <option value="Political Science">Political Science</option>
            <option value="Law">Law</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="text-sm pb-1">Program Name</label>
          <select
            {...register("programName")}
            className="select select-bordered  w-full rounded-none inputs"
          >
            <option value="B Pharm Honors">B Pharm Honors</option>
            <option value="B. Sc. in CSE">B. Sc. in CSE</option>
            <option value="B. Sc. in EEE">B. Sc. in EEE</option>
            <option value="BA Honors in English">BA Honors in English</option>
            <option value="BA in Islamic History">BA in Islamic History</option>
            <option value="BBA">BBA</option>
            <option value="BSS Honors in Economics">BSS Honors in Economics</option>
            <option value="BSS Honors in JCMS">BSS Honors in JCMS</option>
            <option value="BSS Honors in Sociology">BSS Honors in Sociology</option>
            <option value="BSS in Political Science">BSS in Political Science</option>
            <option value="LLB Honors">LLB Honors</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="text-sm pb-1">Session</label>
          <select
            {...register("session")}
            className="select select-bordered  w-full rounded-none inputs"
          >
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
          </select>
        </div>
        <Input
          label="Session Year"
          name="sessionYear"
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
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="w-[292px] relative border-2 border-gray-300 border-dashed rounded-lg p-6" id="dropzone">
          <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" />
          <div className="text-center">
            <img className="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt="" />

            <h3 className="mt-2 text-sm font-medium text-gray-900">
              <label htmlFor="file-upload" className="relative cursor-pointer">
                <span>Drag and drop</span>
                <span className="text-indigo-600"> or browse</span>
                <span> to upload</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              PNG, JPG, GIF up to 1MB
            </p>
          </div>
        </div>

        <div className="w-full col-span-2 flex items-center gap-3 justify-center mt-6">
          <Link className="text-center btn btn-sm bg-gray-500" href="/">
            Cancle
          </Link>
          <button type="submit" className="btn btn-sm" disabled={isLoading}>
            Update <AiOutlineLogin />
          </button>
        </div>
      </form>

      <div>
        <h1>Job Experience Form</h1>
        <JobExperienceForm />
      </div>
      
      <div className="h-[100px]"></div>
    </div>
  );
};

export default Edit;
