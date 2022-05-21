import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Cure Tools
        </a>
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
                <div>
              <a className="nav-link active" aria-current="page" href="#">
               Log in
              </a>

                </div>
                <div>

              <i class="fa-solid fa-right-to-bracket"></i>
                </div>
            </li>
            <li className="nav-item">
                <div>

              <a className="nav-link" href="#">
              
                Rate Us 
              </a>
                </div>
                <div>

              <i class="fa-solid fa-heart"></i>
                </div>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
