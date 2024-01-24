"use client";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Link from "next/link";
import { MdPerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { AiOutlineLogin } from "react-icons/ai";
import axiosBase from "@/axios/baseURL";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error("Please fill all the fields");

      return;
    }
    const data = {
      email: username,
      password,
    };

    setIsLoading(true);

    try {
      const res = await axiosBase.post("/user/login", data);
      const decoded: any = jwtDecode(res.data.token);
      localStorage.setItem("user", JSON.stringify(decoded));
      localStorage.setItem("token", res.data.token);
      setIsLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error("Wrong credientials");
    }
  };

  useEffect(() => {
    let local_user: any = localStorage.getItem("user");
    local_user = JSON.parse(local_user);
    if (local_user) {
      router.push("/user/" + local_user.id);
    }
  }, []);

  return (
    <div className="max-w-[400px] h-[calc(100vh-123px)] mx-auto pt-20">
      <Toaster />
      <div className="text-xl">
        <p className="font-bold py-3 text-center">User login</p>
      </div>
      <form className="min-w-[360px]" onSubmit={handleLogin}>
        <label className="text-sm">Email</label>
        <div className="flex gap-2 mt-1 items-center bg-white rounded-lg px-2 border mb-2">
          <span className="text-2xl  text-gray-500 border-r pr-2">
            <MdPerson />
          </span>
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="email"
            className="focus:outline-none py-3 w-full"
          />
        </div>
        <label className="text-sm ">Password</label>
        <div className="flex gap-2 mt-1 items-center bg-white rounded-lg px-2 border mb-2">
          <span className="text-xl text-gray-500 border-r pr-3">
            <RiLockPasswordFill />
          </span>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="focus:outline-none py-3 w-full"
          />

          <button
            type="button"
            className="text-xl text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </button>
        </div>
        <div className="w-full flex items-center gap-3 justify-center mt-6">
          <Link className="text-center btn btn-sm bg-gray-500" href="/">
            Cancle
          </Link>
          <button type="submit" className="btn btn-sm" disabled={isLoading}>
            Login <AiOutlineLogin />
          </button>
        </div>
        <div className="text-sm text-center pt-8">
          Don't have any account?{" "}
          <Link
            className="text-primary underline hover:text-blue-600"
            href="/registration"
          >
            Create Account
          </Link>
        </div>

        {/* <p className="mt-5">
          Don't have account?{" "}
          <Link href="/auth/registration" className="text_link">
            Create Account
          </Link>
        </p> */}
      </form>
    </div>
  );
};

export default Login;
