"use client";
import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  fullname: string;
  jobPossition: string;
  linkedin: string;
  bio: string;
  studentId: number;
  mobile: string;
  deptName: string;
  batch: number;
  programName: string;
  gender: string;
};

const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Form data: ", data);
  };

  return (
    <div className="max-w-[400px] min-h-[calc(100vh-123px)] mx-auto">
      <h2 className="pt-8 text-center border-b pb-2">Create Account</h2>
      <form className="my-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="text-sm pb-1">Name</label>
          <input
            type="text"
            className="inputs"
            {...register("fullname", { required: "Name is required" })}
            placeholder="Full name"
          />
          {errors.fullname && (
            <span className="text-xs text-red-600">
              {errors.fullname?.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="text-sm pb-1">Current Position</label>
          <input
            type="text"
            className="inputs"
            {...register("jobPossition", { required: false })}
            placeholder="Developer"
          />
        </div>
        <div className="mb-3">
          <label className="text-sm pb-1">Linkedin</label>
          <input
            type="text"
            className="inputs"
            {...register("linkedin", { required: false })}
            placeholder="URL"
          />
        </div>
        <div className="mb-3">
          <label className="text-sm pb-1">Bio</label>
          <textarea
            className="inputs"
            {...register("bio", { required: false })}
            placeholder="I am ..."
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="text-sm pb-1">Student ID</label>
          <input
            type="number"
            className="inputs"
            {...register("studentId", { required: "Student Id is Required!" })}
            placeholder="xxxxxxxx"
          />
          {errors.studentId && (
            <span className="text-xs text-red-600">
              {errors.studentId?.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="text-sm pb-1">Mobile</label>
          <input
            type="number"
            className="inputs"
            {...register("mobile", { required: "Mobile number is Required!" })}
            placeholder="01xxxxxxx"
          />
          {errors.mobile && (
            <span className="text-xs text-red-600">
              {errors.mobile?.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="text-sm pb-1">Dept. Name</label>
          <input
            type="text"
            className="inputs"
            {...register("deptName", {
              required: "Department name is Required!",
            })}
            placeholder="CSE"
          />
          {errors.deptName && (
            <span className="text-xs text-red-600">
              {errors.deptName?.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="text-sm pb-1">Batch</label>
          <input
            type="number"
            className="inputs"
            {...register("batch", { required: "Batch NO is Required!" })}
            placeholder="23"
          />
          {errors.batch && (
            <span className="text-xs text-red-600">
              {errors.batch?.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="text-sm pb-1">Program Name</label>
          <input
            type="text"
            className="inputs"
            {...register("programName", {
              required: "Program name is Required!",
            })}
            placeholder="BSc in CSE"
          />
          {errors.programName && (
            <span className="text-xs text-red-600">
              {errors.programName?.message}
            </span>
          )}
        </div>
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
          <button type="submit" className="btn btn-sm">
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
