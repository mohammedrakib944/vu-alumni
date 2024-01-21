import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white border-b z-20 sticky top-0">
      <div className="homeLayout py-[14px] flex items-center justify-between">
        <Link href="/">
          <h3 className="text-xl font-bold">
            <span className="text-primary">VU</span>
            <span className="text-lg">-Alumni</span>
          </h3>
        </Link>
        <ul className="font-semibold flex items-center gap-3 md:gap-6 text-sm">
          {/* <li>
            <Link
              className="hover:text-primary duration-200 text-primary"
              href="#"
            >
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary duration-200" href="#">
              Notice
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary duration-200" href="#">
              About
            </Link>
          </li> */}
        </ul>
        <div>
          <Link href="/login">
            <button className="btn btn-sm">
              Sign In <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
