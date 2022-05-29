import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import pic from "../assets/images/loginPic.png";
import "./Login.css";
import gLogo from "../assets/images/Google_icon.png";
import { auth } from "../Firebase/firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import useToken from "../hooks/Token/useToken";

const LogIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, genUser, genLoading, genError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [token] = useToken(gUser || genUser);

  let from = location.state?.from?.pathname || "/";

  const [loginError, setLoginError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  if (gLoading || genLoading) {
    return <div>Loading...</div>;
  }
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <div className="login-main">
      <div style={{ width: "500px", height: "400px" }} className="login-img">
        <img
          style={{ width: "100%", height: "100%" }}
          src={pic}
          alt="vectorImage"
        />
      </div>
      <div className="login-form-container">
        <h2>Log In to Cure Tools</h2>
        <small>
          Have not registered yet?{" "}
          <Link
            style={{ color: "rgb(235,87,87)" }}
            to="/register"
            className="link-to-login"
          >
            Click Here
          </Link>{" "}
        </small>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-input-wrapper">
            <label htmlFor="email" className="reg-label">
              Email
            </label>
            <input
              className="login-input"
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid Email",
                },
              })}
            />
            <small className="text-danger">
              {(errors.email?.type === "required" && "Email is required") ||
                (errors.email?.type === "pattern" && "Invalid Email")}
            </small>
          </div>

          <div className="login-input-wrapper">
            <label htmlFor="Password" className="reg-label">
              Password
            </label>
            <input
              className="login-input"
              type="password"
              {...register("password", {
                required: {
                  value: true,
                },
                minLength: {
                  value: "8",
                },
              })}
            />
            <small className="text-danger">
              {(errors.password?.type === "required" &&
                "Password is required") ||
                (errors.password?.type === "minLength" &&
                  "password must be at least 8 characters")}
            </small>
          </div>
          <div>
            {loginError && <small className="text-danger">{loginError}</small>}
            <input className="login-button" type="submit" value="Log In" />
          </div>
        </form>
        <div>
          <button onClick={() => signInWithGoogle()} className="g-button">
            <img
              style={{ width: "25px", height: "25px" }}
              src={gLogo}
              alt="logo"
            />{" "}
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
