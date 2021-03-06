import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./More.css";
import useUserInfo from "../hooks/useUserInfo/useUserInfo";

const More = () => {
  const { userInfo } = useUserInfo();
  // console.log(userInfo);
  return (
    <div>
      <div className="top">
        <button
          className="button-toggle-sidebar"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        >
          <i className="fa-solid fa-sliders"></i>
        </button>
        <Outlet></Outlet>
      </div>
      <div className="routes mt-5">
        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <hr />
          <div className="offcanvas-body">
            <ul className="navbar-nav m-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link more-link"
                  aria-current="page"
                  to="/more"
                >
                  profile
                </Link>
              </li>
              <hr />
              {userInfo.role !== "admin" && (
                <>
                  
                  <li className="nav-item">
                    <Link
                      className="nav-link more-link"
                      aria-current="page"
                      to="/more/orders"
                    >
                      My Orders
                    </Link>
                  </li>
                  <hr />
                  <li className="nav-item">
                    <Link
                      className="nav-link more-link"
                      aria-current="page"
                      to="/more/review"
                    >
                      Add a review
                    </Link>
                  </li>
                  <hr />
                </>
              )}
              {userInfo.role === "admin" && (
                <>
                  <li className="navbar-nav m-auto me-5 mb-2 mb-lg-0">
                    <Link
                      className="nav-link more-link"
                      aria-current="page"
                      to="/more/addProduct"
                    >
                      Add a product
                    </Link>
                  </li>
                  <hr />
                  <li className="navbar-nav m-auto me-5 mb-2 mb-lg-0">
                    <Link
                      className="nav-link more-link"
                      aria-current="page"
                      to="/more/manageProducts"
                    >
                      Manage Products
                    </Link>
                  </li>
                  <hr />
                  <li className="navbar-nav m-auto me-5 mb-2 mb-lg-0">
                    <Link
                      className="nav-link more-link"
                      aria-current="page"
                      to="/more/manageOrders"
                    >
                      {" "}
                      Manage Orders
                    </Link>
                  </li>
                  <hr />
                  <li className="navbar-nav m-auto me-5 mb-2 mb-lg-0">
                    <Link
                      className="nav-link more-link"
                      aria-current="page"
                      to="/more/manageUsers"
                    >
                      Manage Users
                    </Link>
                  </li>
                  <hr />
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
