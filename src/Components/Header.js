import React from "react";
import { FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container justify-content-between">
          <div>
          <img src="Images/logo.svg" alt="" width="30px" class="me-2" />
            <span className="font-20 font-white">
              NSOC DASHBOARD
            </span>
          </div>
          <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link font-20" to="/">
                Logout{" "}
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
