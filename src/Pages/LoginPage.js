import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from '../Components/PasswordStrengthMeter';

import { toast } from "react-toastify";

const LoginPage = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true)
    localStorage.setItem('email' , 'rakesh@gmail.com')
    localStorage.setItem('password' , 'raklon@123')
    const userName = localStorage.getItem("email")
 
const userPassword = localStorage.getItem("password")

    if (email === userName && password === userPassword) {
      toast.success("Login Success");
      navigate("/profile");
    } else {
      toast.error("Invalid Email OR password");
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password Strength is Low must be more than 4 characters";
    } else if (values.password.length < 7) {
      errors.password = "Password Strength is Medium";
    } 
    return errors;
  };

  return (
    <>
    {/* { email} {password} */}
    <div class="container-md back-container">
    <div class="card shadow-md card-section mt-4" >
      <div className="row form__container d-flex felx-column align-items-center ">
        <div class="col-md-6 text-center my-4 mt-md-0">
        <img src="Images/logo.svg" alt="" width="100px" />
          <div class="font-25">NSOC DASHBOARD
            <div class="font-12">Welcome to our New Dashboard</div>
          </div>
        </div>
        <div class="col-md-6">
        <form class="loginForm my-md-4" onSubmit={handleSubmit}>
          <h4 class="font-white">Login</h4>
          <hr />
          <div className="form-group mb-1">
            <label htmlFor="exampleInputPassword1" className="form-label font-white">
              Email
            </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={e  => setEmail(e.target.value)}
          />
        </div>
          <p class="font-14">{formErrors.email}</p>
    
          <div className="form-group mb-1">
            <label htmlFor="exampleInputPassword1" className="form-label font-white">
              Password
            </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <PasswordStrengthMeter password={password} />

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
