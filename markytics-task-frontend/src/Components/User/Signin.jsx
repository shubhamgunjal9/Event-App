import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./User.css";
import axios from "axios";
import URL from "../URL/URL";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleSignin = (data) => {

    const loginData = {
      userName: data.username,
      password: data.password,
    }
    axios.post(URL+`/user/login`,loginData).then((response) =>{
      if(response.data.loginStatus) {
        sessionStorage.setItem("loginStatus", 'true');
        sessionStorage.setItem("userId",response.data.userId);
        navigate("/home");
        toast.success("Login successful!");
      } else {
        sessionStorage.setItem("loginStatus", 'false');
        navigate("/signup");
        toast.error("Invalid username/email or password.");
      }
    })
  };

  return (
    <div className="signin container">
      <div className="container mt-5 d-flex justify-content-center">
        <form onSubmit={handleSubmit(handleSignin)} className="signin">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName or Email
            </label>
            <input
              type="text"
              className="form-control custom-input"
              id="username"
              {...register("username", {
                required: "Username or email is required",
              })}
            />
            {errors.username && (
              <span className="text-danger">{errors.username.message}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control custom-input"
              id="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-danger">{errors.password.message}</span>
            )}
          </div>
          <div className="mb-3 text-center">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
