import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {props.title}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link
                  className="nav-link active mx-2"
                  aria-current="page"
                  to="/"
                >
                  {props.first}
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </div>
            </div>
            <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggle}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.name}{" "}
            </label>
          </div>
          </div>
         
        </nav>
    
    </>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  // first: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Not Required",
  subtitle: "Circuit",
};

export default Navbar;
