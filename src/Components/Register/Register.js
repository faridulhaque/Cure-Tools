import React, {useState } from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import pic from "../assets/images/reg-pic.png";
import gLogo from "../assets/images/Google_icon.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebase.init";

// import {
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
// } from "firebase/auth";
import useToken from "../hooks/Token/useToken";
import Loading from "../hooks/Admin/Loading/Loading";
import { sendEmailVerification } from "firebase/auth";

// main functional work started
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, genUser, genLoading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  
  const [token] = useToken(gUser || genUser);
  console.log(genUser)

  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";
  if (genLoading || gLoading || updating) {
    return <Loading></Loading>;
  }

  if (token) {
    
    navigate(from, { replace: true });
  }

  // verify the user
 

  //getting newUser's data via react form hooks
  const onSubmit = async (data) => {
    const newName = data.name;
    await createUserWithEmailAndPassword(data.email, data.password);

    await updateProfile({ displayName: newName });
    
  };

  return (
    <section className="register-main">
      <div className="reg-pic-container">
        <img
          style={{ width: "100%", height: "500px" }}
          src={pic}
          alt="vectorImage"
        />
      </div>
      <div className="form-container">
        <h2>Register to Cure Tools</h2>
        <small>
          Already have an account?{" "}
          <Link
            style={{ color: "rgb(235,87,87)" }}
            to="/login"
            className="link-to-login"
          >
            Click Here
          </Link>{" "}
        </small>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label htmlFor="name" className="reg-label">
              Your Name
            </label>
            <input
              className="reg-input"
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <small className="text-danger">
              {errors.name?.type === "required" && "Name is required"}
            </small>
          </div>
          <div className="input-wrapper">
            <label htmlFor="email" className="reg-label">
              Email
            </label>
            <input
              className="reg-input"
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

          <div className="input-wrapper">
            <label htmlFor="Password" className="reg-label">
              Password
            </label>
            <input
              className="reg-input"
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
            <input
              className="reg-button"
              type="submit"
              value="Create New Account"
            />
          </div>
        </form>
        <div>
          <button onClick={() => signInWithGoogle()} className="g-button">
            <img
              style={{ width: "25px", height: "25px" }}
              src={gLogo}
              alt="logo"
            />{" "}
            Register With Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
