// blood group, deptname, batch, sessionYear, sessionyear
import axiosBase from "@/axios/baseURL";
import React, { useEffect, useState } from "react";
import { FaSortDown } from "react-icons/fa";

// filter data
const blood_groups = ["A+", "A-", "O+", "O-", "AB+", "AB-", "B+", "B-"];
const dept_name = ["Pharmacy", "CSE", "EEE", "English", "Islamic History", "Business", "Economics", "JCMS", "Sociology", "Political Science", "Law"]
const batchs = ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27"];
const sessionYears = ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"];
const sessions = ["Spring", "Summer", "Fall"];

const FilterSection = ({ setUsers, getData }: any) => {
  const [selectedBloodGroups, setSelectedBloodGroups] = useState<string[]>([]);
  const [deptNames, setDeptNames] = useState<string[]>([]);
  const [batch, setBatch] = useState<string[]>([]);
  const [sessionYear, setSessionYear] = useState<string[]>([]);
  const [session, setSession] = useState<string[]>([]);

  const handleBloodGroupChange = (bloodGroup: string) => {
    const updatedBloodGroups = selectedBloodGroups.includes(bloodGroup)
      ? selectedBloodGroups.filter((group) => group !== bloodGroup)
      : [...selectedBloodGroups, bloodGroup];

    setSelectedBloodGroups(updatedBloodGroups);
  };

  const handleDeptName = (deptName: string) => {
    const updatedDeptNames = deptNames.includes(deptName)
      ? deptNames.filter((group) => group !== deptName)
      : [...deptNames, deptName];
    setDeptNames(updatedDeptNames);
  };

  const handleBatch = (batch_p: string) => {
    const updatedBatch = batch.includes(batch_p)
      ? batch.filter((g) => g !== batch_p)
      : [...batch, batch_p];
    setBatch(updatedBatch);
  };

  const handleSessionYear = (ses: string) => {
    const updatedSessionYear = sessionYear.includes(ses)
      ? sessionYear.filter((g) => g !== ses)
      : [...sessionYear, ses];
    setSessionYear(updatedSessionYear);
  };

  const handleSession = (ses: string) => {
    const updatedSession = session.includes(ses)
      ? session.filter((g) => g !== ses)
      : [...session, ses];
    setSession(updatedSession);
  }


  const handleFilterReset = () => {
    setSelectedBloodGroups([]);
    setDeptNames([]);
    setBatch([]);
    setSessionYear([]);
    setSession([]);
    getData();
  }

  // Form handler
  const handleFilterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filterData = {
      selectedBloodGroups,
      deptNames,
      batch,
      sessionYear,
      session,
    };
    console.log(filterData);

    let query = "";
    for (let field in filterData) {
      for (let val of filterData[field as keyof typeof filterData]) {
        query += `${field}=${val}&`;
      }
    }

    console.log({ query });

    try {
      const response = await axiosBase.get(`/user?isApproved=true&${query}`);
      setUsers(response?.data?.users);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-2 rounded-md border">
      <h2 className="mb-3 px-4 py-2 border-b">Filter</h2>

      <div>
        <form onSubmit={handleFilterSubmit}>
          {/* Department  */}
          <CardColspan
            title="Department"
            data={dept_name}
            setterFunc={handleDeptName}
          />
          <hr />
          {/* Blood */}
          <CardColspan
            title="Blood Groups"
            data={blood_groups}
            setterFunc={handleBloodGroupChange}
          />
          <hr />
          {/* Batch */}
          <CardColspan title="Batch" data={batchs} setterFunc={handleBatch} />
          <hr />
          {/* Session Year */}
          <CardColspan
            title="Session Year"
            data={sessionYears}
            setterFunc={handleSessionYear}
          />
          <hr />
          {/* Session */}
          <CardColspan
            title="Session"
            data={sessions}
            setterFunc={handleSession}
          />
          <hr />

          <div className="mt-8 flex px-3 items-center justify-center gap-2">
            <button
              className="w-full bg-gray-500 px-4 py-2 rounded-md text-sm text-white"
              type="reset"
              onClick={handleFilterReset}
            >
              Reset
            </button>
            <button
              className="w-full bg-primary hover:bg-orange-500 px-4 py-2 rounded-md text-sm text-white"
              type="submit"
            >
              Filter
            </button>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
};

export default FilterSection;

const CardColspan = ({
  title,
  data,
  setterFunc,
}: {
  title: string;
  data: any;
  setterFunc: any;
}) => {
  return (
    <div className="collapse bg-white">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium flex justify-between items-center">
        {/*TItle  */}
        <h4>{title}</h4>
        <p className="text-sm -mt-1 -mr-8">
          <FaSortDown />
        </p>
      </div>
      <div className="collapse-content">
        {/* Content */}
        {data.map((item: any, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between gap-2 mb-2 px-4"
          >
            <label>{item}</label>
            <input
              type="checkbox"
              value={item}
              onChange={() => setterFunc(item)}
              className="checkbox checkbox-primary"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
