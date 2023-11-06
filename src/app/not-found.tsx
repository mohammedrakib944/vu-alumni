import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GiSwallow } from "react-icons/gi";

export default function NotFound() {
  return (
    <div className="w-full h-[calc(100vh-123px)] flex flex-col items-center justify-center">
      <span className="text-5xl">
        <GiSwallow />
      </span>
      <h2 className="text-primary text-3xl"> Page Not Found</h2>
      <p className="py-2 text-sm">Could not find requested resource</p>
      <Link href="/" className="btn btn-sm mt-5">
        <AiOutlineArrowLeft /> Home
      </Link>
    </div>
  );
}
