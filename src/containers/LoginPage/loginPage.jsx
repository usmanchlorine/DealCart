import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../State/Apis/AuthSlice/auth";
import { Navigate, redirect } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const userCredential = {
      username: username,
      password: password,
    };
    dispatch(LoginUser(userCredential));
  };

  const state = useSelector((state) => state);
  if (state.authReducer.isAuthenticated) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center w-full bg-red-200">
      <div className="p-5 border w-[300px] min-h-[300px] flex flex-col bg-slate-100  rounded-lg">
        <p className="text-4xl text-center mb-12">Signin</p>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-1">
            <label>Username:</label>
            <input
              type="text"
              className="form-control w-full  "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex gap-1">
            <label>Password:</label>
            <input
              value={password}
              type="password"
              className="form-control w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            className="w-32 mt-4 text-white h-8 rounded-xl bg-red-700 hover:bg-red-600"
          />
        </form>
      </div>
    </div>
  );
}
