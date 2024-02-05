import React from "react";

const ApproveUser = () => {
  return (
    <div className="min-h-[calc(100vh-111px)]">
      <h3 className="py-8">Registered Users</h3>
      <div className="overflow-x-auto rounded-lg border shadow-md">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Blood</th>
              <th>Session</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>201311097</th>
              <td>Test</td>
              <td>tets@gmail.com</td>
              <td>O+</td>
              <td>2023</td>
              <td>
                <button className="btn btn-sm">Approve</button>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>201311097</th>
              <td>Test</td>
              <td>tets@gmail.com</td>
              <td>O+</td>
              <td>2023</td>
              <td>
                <button className="btn btn-sm">Approve</button>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>201311097</th>
              <td>Test</td>
              <td>tets@gmail.com</td>
              <td>O+</td>
              <td>2023</td>
              <td>
                <button className="btn btn-sm">Approve</button>
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>201311097</th>
              <td>Test</td>
              <td>tets@gmail.com</td>
              <td>O+</td>
              <td>2023</td>
              <td>
                <button className="btn btn-sm">Approve</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveUser;
