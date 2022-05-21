import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
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
                
              <Link className="nav-link active" aria-current="page" to="/logIn">
            <span>Log In</span> <i class="fa-solid fa-right-to-bracket"></i>
              </Link>

                
                
            </li>
            

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
