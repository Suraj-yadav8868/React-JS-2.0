import React from "react";

export default function Navbar() {
  return (
    <div>
      {/* Top Branding Bar */}
      <nav className="navbar navbar-light bg-light shadow-sm sticky-top">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 fw-bold text-primary">
            📦 Orders Dashboard
          </span>
        </div>
      </nav>

      {/* Tabs Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-semibold d-none d-lg-block">
            📊 Manage Orders
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#orderNavbar"
            aria-controls="orderNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="orderNavbar">
            <div className="navbar-nav gap-3">
              <a
                className="nav-link active fw-semibold text-primary"
                href="#"
              >
                All Orders <span className="badge bg-secondary">209</span>
              </a>
              <a className="nav-link text-success fw-semibold" href="#">
                New <span className="badge bg-success">3</span>
              </a>
              <a className="nav-link text-primary fw-semibold" href="#">
                Completed <span className="badge bg-primary">183</span>
              </a>
              <a className="nav-link text-danger fw-semibold" href="#">
                Cancelled <span className="badge bg-danger">16</span>
              </a>
              <a className="nav-link text-warning fw-semibold" href="#">
                Pending{" "}
                <span className="badge bg-warning text-dark">7</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Search & Actions */}
      <div className="container-fluid bg-light py-3 shadow-sm">
        <div className="d-flex flex-wrap gap-2 align-items-center">
          <input
            type="text"
            className="form-control flex-grow-1"
            placeholder="🔍 Search orders..."
          />
          <button className="btn btn-outline-primary">
            <i className="bi bi-search"></i> Search
          </button>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-funnel"></i> Filter
          </button>
          <button className="btn btn-primary">
            <i className="bi bi-plus-lg"></i> Add New
          </button>
        </div>
      </div>
    </div>
  );
}
