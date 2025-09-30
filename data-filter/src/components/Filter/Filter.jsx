import React, { useState } from "react";
import data from "./../../assets/products/data";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Filter() {
  const [search, setSearch] = useState("");
  const [Order, SetOrder] = useState("");
  const [Phone, Setphone] = useState("");
  const [product, Setproducts] = useState("");
  const [payment, SetPayment] = useState("");
  const [status, SetStatus] = useState("All");
  const [Date, SetDate] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    let tempData = [...data];

    if (search) {
      tempData = tempData.filter((product) =>
        product.customerName.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (Order !== "") {
      tempData = tempData.filter((product) =>
        product.orderId.toLowerCase().includes(Order.toLowerCase())
      );
    }
    if (Phone !== "") {
      tempData = tempData.filter((product) =>
        product.phoneNumber.includes(Phone)
      );
    }
    if (product !== "") {
      tempData = tempData.filter((p) =>
        p.product.toLowerCase().includes(product.toLowerCase())
      );
    }
    if (payment !== "") {
      tempData = tempData.filter((p) => p.payment.includes(payment));
    }
    if (status !== "All") {
      tempData = tempData.filter((p) =>
        p.status.toLowerCase().includes(status.toLowerCase())
      );
    }
    if (Date !== "") {
      tempData = tempData.filter((p) => p.date === Date);
    }
    setFilteredData(tempData);
  };

  const clearFilters = () => {
    setSearch("");
    SetOrder("");
    Setphone("");
    Setproducts("");
    SetPayment("");
    SetStatus("All");
    SetDate("");
    setFilteredData(data);
  };

  return (
<div className="container full-width text-center mt-4">

      {/* Filter Section */}
      <div className="card shadow p-4 mb-4">
        <h4 className="mb-3 text-primary fw-bold text-center">
          Order Filter Panel
        </h4>
        <div className="row g-3">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Order ID"
              value={Order}
              onChange={(e) => SetOrder(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Customer Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="tel"
              maxLength={10}
              className="form-control"
              placeholder="Phone"
              value={Phone}
              onChange={(e) => Setphone(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Product"
              value={product}
              onChange={(e) => Setproducts(e.target.value)}
            />
          </div>
        </div>

        <div className="row g-3 mt-3">
          <div className="col-md-3">
            <select
              className="form-select"
              value={payment}
              onChange={(e) => SetPayment(e.target.value)}
            >
              <option value="">Payment</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Not Paid">Not Paid</option>
            </select>
          </div>
          <div className="col-md-3">
            <select
              className="form-select"
              value={status}
              onChange={(e) => SetStatus(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="New">New</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <div className="col-md-3">
            <input
              type="date"
              className="form-control"
              value={Date}
              onChange={(e) => SetDate(e.target.value)}
            />
          </div>
          <div className="col-md-3 d-flex gap-2">
            <button className="btn btn-primary w-50" onClick={handleSearch}>
              Search
            </button>
            <button className="btn btn-outline-danger w-50" onClick={clearFilters}>
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="card shadow">
        <div className="card-header bg-dark text-white text-center">
          <h5 className="mb-0">📋 Filtered Orders</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle mb-0">
            <thead className="table-primary">
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Price (₹)</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((product, index) => {
                  let statusclass = "";
                  if (product.status === "Completed") {
                    statusclass = "text-success fw-bold";
                  } else if (product.status === "Pending") {
                    statusclass = "text-warning fw-bold";
                  } else if (product.status === "New") {
                    statusclass = "text-info fw-bold";
                  } else {
                    statusclass = "text-danger fw-bold";
                  }

                  let paymentClass = "";
                  if (product.payment === "Paid") {
                    paymentClass = "text-success fw-bold";
                  } else if (product.payment === "Pending") {
                    paymentClass = "text-warning fw-bold";
                  } else {
                    paymentClass = "text-danger fw-bold";
                  }

                  return (
                    <tr key={index}>
                      <td>{product.orderId}</td>
                      <td>{product.date}</td>
                      <td>{product.customerName}</td>
                      <td>{product.product}</td>
                      <td>{product.price.toLocaleString()}</td>
                      <td className={paymentClass}>{product.payment}</td>
                      <td className={statusclass}>{product.status}</td>
                      <td>{product.phoneNumber}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="8" className="text-center text-danger fw-bold">
                    ❌ No Records Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
