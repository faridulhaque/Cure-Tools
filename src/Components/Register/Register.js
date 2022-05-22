import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import pic from "../assets/images/reg-pic.png";
import gLogo from "../assets/images/Google_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase.init";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
const provider = new GoogleAuthProvider();
const Register = () => {
  const navigate = useNavigate();

  // verify the user
  const emailVerify = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      
    });
  };

  //getting newUser's data via react form hooks
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // create user with firebase
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const generalUser = userCredential.user;
        console.log(generalUser);
        emailVerify();
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signUpWithGooglePopup = () =>{
    signInWithPopup(auth, provider)
    .then((result) => {
      
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      
      const googleUser = result.user;
      console.log(googleUser);
      
    }).catch((error) => {
      
      const errorCode = error.code;
      const errorMessage = error.message;
      
      const email = error.customData.email;
      
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }

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
          <button
            onClick={signUpWithGooglePopup}
            className="g-button"
          >
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
