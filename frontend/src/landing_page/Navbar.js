import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container-fluid">
        
        {/* Brand (Logo + Text) */}
        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
          <div
            className="d-flex align-items-center justify-content-center bg-primary text-white rounded me-2"
            style={{ width: "40px", height: "40px" }}
          >
            <span className="fw-bold">IC</span>
          </div>
          InternConnect
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/review">
                Review
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/support">
                Support
              </NavLink>
            </li>
          </ul>

          {/* Right side buttons */}
          <div className="d-flex gap-2">
            <Link className="btn btn-outline-primary fw-bold" to="/admin">
              Admin Login
            </Link>
            <Link className="btn btn-primary text-white fw-bold" to="/signup">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
