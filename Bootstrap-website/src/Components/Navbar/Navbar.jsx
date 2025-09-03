import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <header>
        <nav className="navbar shadow-sm custom-navbar">
          <div className="container d-flex justify-content-between align-items-center">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="me-2"
                viewBox="0 0 24 24"
              >
                <path d="M23 19V6a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v13l4-4h14a2 2 0 0 0 2-2z"></path>
              </svg>
              <strong>Album</strong>
            </a>

            {/* Toggle Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Offcanvas Top Menu */}
      <div
        className="offcanvas offcanvas-top custom-offcanvas"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
        style={{ height: "60%" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasTopLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <div className="row">
            {/* About */}
            <div className="col-md-7">
              <h4>About</h4>
              <p className="text-muted">
                Add some information about the album below, the author, or any other
                background context. Make it a few sentences long so folks can pick up
                some informative tidbits.
              </p>
            </div>

            {/* Contact */}
            <div className="col-md-5">
              <h4>Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-link">
                    Follow on Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-link">
                    Like on Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-link">
                    Email me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
