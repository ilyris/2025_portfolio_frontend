"use client";
import { useState } from "react";
import Typography from "../components/global/Typography";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUserLogin = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("http://localhost:5167/api/login", {
      email,
      password,
    });
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <main className="container">
      <div className="p-5 bg-white mx-auto my-20 w-1/3  rounded-xl border border-black p-5">
        <Typography variant="h3" className="text-center">
          Admin Login
        </Typography>
        <form
          className="flex justify-center items-center flex-col"
          onSubmit={handleUserLogin}
        >
          <div className="flex flex-col w-full pt-5">
            <label>Username</label>
            <input
              type="text"
              className=" border-secondary-dark border p-2 rounded-md"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex flex-col w-full py-5">
            <label>Password</label>
            <input
              type="password"
              className="border-secondary-dark border p-2 rounded-md"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="w-full">
            <button className="bg-secondary-light py-3 px-10 rounded-md w-full text-lg">
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
export default Login;
