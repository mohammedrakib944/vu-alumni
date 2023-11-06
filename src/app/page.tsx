import Card from "@/components/home/Card";
import Hero from "@/components/home/Hero";
import { AiOutlineDown } from "react-icons/ai";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex justify-between items-center mb-5">
        <h4>ALUMNI LIST</h4>
        <select
          className="select select-bordered select-sm w-[200px]"
          defaultValue="Department"
        >
          <option disabled>Department</option>
          <option>CSE</option>
          <option>EEE</option>
          <option>English</option>
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-center">
        <button className="btn btn-sm">
          Load more <AiOutlineDown />
        </button>
      </div>
      <div className="h-[100px]"></div>
    </main>
  );
}
