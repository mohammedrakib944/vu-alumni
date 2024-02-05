// blood group, deptname, batch, session, sessionyear
import React, { useEffect, useState } from "react";
import { FaSortDown } from "react-icons/fa";

// filter data
const blood_groups = ["A+", "A-", "O+", "O-", "AB+", "B+", "B-"];
const dept_name = ["CSE", "EEE", "English"];
const batchs = [18, 19, 20, 21, 22, 23, 24];
const sessions = [2022, 2023, 2024];

const FilterSection = () => {
  const [selectedBloodGroups, setSelectedBloodGroups] = useState<string[]>([]);
  const [deptNames, setDeptNames] = useState<string[]>([]);
  const [batch, setBatch] = useState<number[]>([]);
  const [session, setSession] = useState<number[]>([]);

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

  const handleBatch = (batch_p: number) => {
    const updatedBatch = batch.includes(batch_p)
      ? batch.filter((g) => g !== batch_p)
      : [...batch, batch_p];
    setBatch(updatedBatch);
  };

  const handleSession = (ses: number) => {
    const updatedSession = session.includes(ses)
      ? session.filter((g) => g !== ses)
      : [...session, ses];
    setSession(updatedSession);
  };

  //   Form handler
  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filterData = {
      selectedBloodGroups,
      deptNames,
      batch,
      session,
    };
    console.log("Filter data: ", filterData);
  };

  return (
    <div className="p-2 rounded-md border">
      <h2 className="mb-3 px-4 py-2 border-b">Filter</h2>

      <div>
        <form onSubmit={handleFilter}>
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
              type="button"
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
