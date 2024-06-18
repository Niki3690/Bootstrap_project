import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let TotalPrice = names.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  let subTotal = TotalPrice.toFixed(0);

  return (
    <div className="stickyy">
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div
          className="container-fluid bg-warning"
          style={{ paddingTop: 10, paddingBottom: 10 }}
        >
          <Link
            to="/"
            className="navbar-brand fs-2 text-success ms-5 fw-bold"
            style={{ fontFamily: "revert" }}
          >
            Vidhi<span className="text-danger ">Niki</span>
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4 fw-bold text-center">
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="cart" className="nav-link text-dark">
                  Cart
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav mb-2 mb-lg-0 fs-4 fw-bold text-center me  me-5">
              <li className="nav-item d-flex justify-content-center">
                <button
                  type="button"
                  class="position-relative me-4 fw-bold"
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  Total Items
                  <span
                    class="position-absolute top-0 start-100 "
                    style={{ marginLeft: 4 }}
                  >
                    {names.length}
                  </span>
                </button>
              </li>

              <li className="nav-item d-flex justify-content-center ms-2  ">
                <span className="nav-link text-dark">
                  Total Price: {subTotal}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
