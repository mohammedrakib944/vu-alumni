import React from "react";

const ResetPassword = () => {
  return (
    <div className="min-h-[calc(100vh-111px)] bg-white flex justify-center items-center">
      <div className="max-w-[400px]">
        <h2>Reset Password</h2>
        <form>
          <p className="mt-6 mb-2">Enter your email</p>
          <input
            className="min-w-[300px] p-4 w-full inputs mb-6"
            type="email"
            required
            placeholder="Enter your email"
          />
          <button className="btn" type="submit">
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
