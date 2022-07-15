import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userName = localStorage.getItem("email")
  ? localStorage.getItem("email")
  : "admin@gmail.com";
const userPassword = localStorage.getItem("password")
  ? localStorage.getItem("password")
  : "admin";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userName && password === userPassword) {
      toast.success("Login Success");
      navigate("/profile");
    } else {
      toast.error("Invalid Email OR password");
    }
  };

  return (
    <>
    <div class="container-md">
    <div class="card shadow-md card-section mt-4" >
      <div className="row form__container d-flex felx-column align-items-center ">
        <div class="col-md-6 text-center my-4 mt-md-0">
        <img src="Images/logo.svg" alt="" width="100px" />
          <div class="font-25">NSOC DASHBOARD
            <div class="font-12">Welcome to our New Dashboard</div>
          </div>
        </div>
        <div class="col-md-6">
        <form class="loginForm my-md-4">
          <h4 class="font-white">Login</h4>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label font-white">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label font-white">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputPassword1"
            />
          </div>

          <div class="d-flex justify-content-between">
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label font-white font-12" for="flexCheckDefault">
              Remember Me
            </label>
          </div>
          <div class="font-12 font-white pt-1">
            Forgot Password
          </div>
          </div>

          <button type="submit" className="form__button" onClick={handleSubmit}>
            Login
          </button>
        </form>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default LoginPage;
