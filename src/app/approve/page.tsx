"use client"
import React, { useState, useEffect } from "react";
import { useUser } from "@/context/userContext";
import axiosBase from "@/axios/baseURL";

const ApproveUser = () => {
  const { user }: any = useUser();
  const [users, setUsers] = useState<any>(null);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const getData = async () => {
    try {
      const response = await axiosBase.get("/user?isApproved=false");
      setUsers(response?.data?.users);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApprove = async (id: string) => {
    const token: any = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await axiosBase.put(`/user/${id}`, {
        isApproved: true,
      }, { headers });
      getData();
    } catch (error) {
      console.log(error);
    }
  }

  const handleRowCheckboxChange = (userId: string) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
    setSelectAll(false);
  };

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedUsers(users.map((user: any) => user._id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleApproveSelected = () => {
    if (selectedUsers.length === 0) return;
  
    const token: any = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const promises = selectedUsers.map((id: string) => {
      return axiosBase.put(`/user/${id}`, {
        isApproved: true,
      }, { headers });
    })

    Promise.all(promises).then(() => {
      getData();
      setSelectedUsers([]);
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleExportSelected = () => {
    const selectedUserData = users.filter((user: any) => selectedUsers.includes(user._id));
    const jsonData = JSON.stringify(selectedUserData, null, 2);
    
    // Create a blob containing the data
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Create a link element and trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'selected_users.json';
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(users);

  return (
    <div className="min-h-[calc(100vh-111px)]">
      <h3 className="pt-8 pb-2">Registered Users</h3>
      <div className="py-2">
          <button
            className="bg-white-500 border hover:border-indigo-500 text-gray-900 font-medium py-1 px-2 rounded"
            onClick={handleApproveSelected}
          >
            Approve {selectedUsers.length > 0 ? `(${selectedUsers.length})` : ""}
          </button>
          <button
            className="ml-2 bg-white-500 border hover:border-indigo-500 text-gray-900 font-medium py-1 px-2 rounded"
            onClick={handleExportSelected}
          >
            Export {selectedUsers.length > 0 ? `(${selectedUsers.length})` : ""}
          </button>
        </div>
      <div className="overflow-x-auto rounded-lg border shadow-md">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={selectAll}
                    onChange={toggleSelectAll}
                  />
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Blood</th>
              <th>Session</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user: any) => (
              <tr key={user._id}>
                <td>
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={selectedUsers.includes(user._id)}
                    onChange={() => handleRowCheckboxChange(user._id)}
                  />
                </td>
                <td>{user.studentId}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.bloodGroup}</td>
                <td>{user.sessionYear}</td>
                <td>
                  <button
                    className="px-2 py-1 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    onClick={() => handleApprove(user._id)}
                  >
                    Approve
                  </button>
                  <a 
                    className="ml-2 px-2 py-1 text-xs font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    href={`/user/${user._id}`}
                    target="_blank"
                  >
                      View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveUser;
