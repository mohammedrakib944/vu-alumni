// blood group, deptname, batch, sessionYear, sessionyear
import axiosBase from "@/axios/baseURL";
import React, { use, useEffect, useState } from "react";
import { FaSortDown } from "react-icons/fa";

// filter data
const blood_groups = ["A+", "A-", "O+", "O-", "AB+", "AB-", "B+", "B-"];
const dept_name = ["BA", "CSE", "Economics", "EEE", "English", "JCMS", "Law", "Pharmacy", "Political Science", "Public Health", "Sociology"]
const batchs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
const sessionYears = ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"];
const sessions = ["Spring", "Summer", "Fall"];

const FilterSection = ({ setUsers, getData }: any) => {
  const [bloodGroup, setBloodGroup] = useState<string[]>([]);
  const [deptName, setDeptName] = useState<string[]>([]);
  const [batch, setBatch] = useState<string[]>([]);
  const [sessionYear, setSessionYear] = useState<string[]>([]);
  const [session, setSession] = useState<string[]>([]);

  const handleBloodGroupChange = (bloodGroup_p: string) => {
    const updatedBloodGroups = bloodGroup.includes(bloodGroup_p)
      ? bloodGroup.filter((group) => group !== bloodGroup_p)
      : [...bloodGroup, bloodGroup_p];

    setBloodGroup(updatedBloodGroups);
  };

  const handleDeptName = (deptName_p: string) => {
    const updatedDeptNames = deptName.includes(deptName_p)
      ? deptName.filter((group) => group !== deptName_p)
      : [...deptName, deptName_p];
    setDeptName(updatedDeptNames);
  };

  const handleBatch = (batch_p: string) => {
    const updatedBatch = batch.includes(batch_p)
      ? batch.filter((g) => g !== batch_p)
      : [...batch, batch_p];
    setBatch(updatedBatch);
  };

  const handleSessionYear = (sesYear: string) => {
    const updatedSessionYear = sessionYear.includes(sesYear)
      ? sessionYear.filter((g) => g !== sesYear)
      : [...sessionYear, sesYear];
    setSessionYear(updatedSessionYear);
  };

  const handleSession = (ses: string) => {
    const updatedSession = session.includes(ses)
      ? session.filter((g) => g !== ses)
      : [...session, ses];
    setSession(updatedSession);
  }
  

  // Form handler
  const handleFilterSubmit = async () => {
    const filterData = {
      bloodGroup,
      deptName,
      batch,
      sessionYear,
      session,
    };
    console.log(filterData);

    let query = "";
    for (let field in filterData) {
      for (let val of filterData[field as keyof typeof filterData]) {
        query += `${field}=${encodeURIComponent(val)}&`;
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

  useEffect(() => {
    handleFilterSubmit();
  }, [bloodGroup, deptName, batch, sessionYear, session]);

  return (
    <div className="p-2 rounded-md border">
      <h2 className="mb-3 px-4 py-2 border-b">Filter</h2>

      <div>
        <div>
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

          {/* Session Year */}
          <CardColspan
            title="Session Year"
            data={sessionYears}
            setterFunc={handleSessionYear}
          />
        </div>
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
