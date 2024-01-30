import React, { useState, useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import axiosBase from "@/axios/baseURL";
import { toast } from "react-hot-toast";
import { useUser } from "@/context/userContext";

interface JobExperience {
  companyName: string;
  jobTitle: string;
  jobDescription: string;
  startDate: string;
  endDate: string;
}

const JobExperienceForm = () => {
  const { user }: any = useUser();
  console.log(user);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [jobExp, setJobExp] = useState<JobExperience[]>([
    {
      companyName: "",
      jobTitle: "",
      jobDescription: "",
      startDate: "",
      endDate: "",
    },
  ]);

  useEffect(() => {
    if (user?.jobExp) setJobExp(user.jobExp);
  }, [user]);

  const onSubmit: SubmitHandler<JobExperience[]> = async (data) => {
    setIsLoading(true);

    let localUser: any = localStorage.getItem("user");
    let token: any = localStorage.getItem("token");
    localUser = JSON.parse(localUser);

    if (user?._id !== localUser.id || !token) {
      toast.error("You are not authorized!");
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      await axiosBase.put("/user/" + user._id, { jobExp: data }, { headers });
      setIsLoading(false);
      //   window.location.reload();
    } catch (error) {
      toast.error("User update failed!");
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const list: any = [...jobExp];
    list[index][name] = value;
    setJobExp(list);
  };

  const handleAddJobExp = () => {
    setJobExp([
      ...jobExp,
      {
        companyName: "",
        jobTitle: "",
        jobDescription: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleRemoveJobExp = (index: number) => {
    const list = [...jobExp];
    list.splice(index, 1);
    setJobExp(list);
  };
  return (
    <div className="p-4">
      {jobExp.map((item, index) => (
        <div key={index} className="border p-4 mb-4">
          <input
            type="text"
            name="companyName"
            value={item.companyName}
            onChange={(event) => handleInputChange(index, event)}
            placeholder="Company Name"
            className="border-b w-full mb-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="jobTitle"
            value={item.jobTitle}
            onChange={(event) => handleInputChange(index, event)}
            placeholder="Job Title"
            className="border-b w-full mb-2 focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="jobDescription"
            value={item.jobDescription}
            onChange={(event) => handleInputChange(index, event)}
            placeholder="Job Description"
            className="border w-full h-24 mb-2 focus:outline-none focus:border-blue-500"
          />
          <div className="flex mb-2">
            <input
              type="date"
              name="startDate"
              value={item.startDate}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Start Date"
              className="border-b mr-2 w-1/2 focus:outline-none focus:border-blue-500"
            />
            <input
              type="date"
              name="endDate"
              value={item.endDate}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="End Date"
              className="border-b w-1/2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={() => handleRemoveJobExp(index)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={handleAddJobExp}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-5"
      >
        Add Job Experience
      </button>
      <button
        type="submit"
        onClick={() => onSubmit(jobExp)}
        disabled={isLoading}
        className={`bg-blue-500 text-white px-4 py-2 rounded ${
          isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
      >
        {isLoading ? "Submitting..." : "Submit Job Experiences"}
      </button>
    </div>
  );
};

export default JobExperienceForm;
