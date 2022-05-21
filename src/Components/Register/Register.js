import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import pic from "../assets/images/reg-pic.png";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
                  message: 'Email is required'
                },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid Email"
              } })}
            />
            <small className="text-danger">{(errors.email?.type === "required" && "Email is required")|| (errors.email?.type === 'pattern' && "Invalid Email")}</small>
            
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
                  value: true
                },
              minLength: {
                value: '8'
              }})}
            />
            <small className="text-danger">{(errors.password?.type === "required" && "Password is required")|| (errors.password?.type === 'minLength' && "password must be at least 8 characters")}</small>
          </div>
          <div>
            <input className="reg-button" type="submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
