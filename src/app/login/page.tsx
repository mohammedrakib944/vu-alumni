"use client";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Link from "next/link";
import { MdPerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { AiOutlineLogin } from "react-icons/ai";

const Login = () => {
  //   const router = useRouter();
  //   const session = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-[400px] h-[calc(100vh-123px)] mx-auto pt-20">
      <Toaster />
      <div className="text-xl">
        <p className="font-bold py-3 text-center">User login</p>
      </div>
      <form className="min-w-[360px]">
        <label className="text-sm">Username</label>
        <div className="flex gap-2 mt-1 items-center bg-white rounded-lg px-2 border mb-2">
          <span className="text-2xl  text-gray-500 border-r pr-2">
            <MdPerson />
          </span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
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
          <button type="submit" className="btn btn-sm">
            Login <AiOutlineLogin />
          </button>
          <Link className="text-center btn btn-sm bg-gray-500" href="/">
            Cancle
          </Link>
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
