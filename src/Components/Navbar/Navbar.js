import { signOut } from "firebase/auth";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase.init";
import { useTheUser } from "../hooks/loggedInuser/useTheUser";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate()
  const { user, loading } = useTheUser();
  if (loading) {
    return <div>loading</div>;
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('accessToken')
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Cure Tools
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto me-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/myPortfolio">
                <span>My Portfolio</span>{" "}
                <i class="fa-solid fa-address-card"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/blog">
                <span>Blog</span>{" "}
                <i className="fa-solid fa-book"></i>
              </Link>
            </li>

            <li className="nav-item">
              {user?.uid && (
                <Link className="nav-link" aria-current="page" to="/more">
                  <span>Dashboard</span>{" "}
                  <i className="fa-solid fa-arrow-up-right-dots"></i>
                </Link>
              )}
            </li>
            <li className="nav-item">
              {user?.uid ? (
                <a className="nav-link" onClick={handleLogout}>
                  <span>Log Out</span> <i className="fa-solid fa-power-off"></i>
                </a>
              ) : (
                <Link className="nav-link" aria-current="page" to="/logIn">
                  <span>Log In</span>{" "}
                  <i className="fa-solid fa-right-to-bracket"></i>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
