import React from "react";
import { useParams } from "react-router-dom";
import { DataDetails } from "./DataDetails";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./Store/Cartslice";

const SinglePage = () => {
  let { id } = useParams();
  let demo = DataDetails.find((item) => item.id == id);

  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  let ADD = (demo) => {
    let items = names.find((item) => item.id === demo.id);
    if (!items) {
      dispatch(add(demo));
    }
  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-12 col-lg-8 col-12 mt-5">
          <div
            class="card mt-5 text-left shadow-lg"
            style={{ borderRadius: 0 }}
          >
            <img
              src={demo.image}
              class="card-img-top"
              alt="..."
              style={{ height: 300, width: "100%", borderRadius: 0 }}
            />
            <div class="card-body ssss">
              <h5 class="card-title mb-3">
                <span className="fw-bold ">Title: </span>
                {demo.title}
              </h5>
              <h5 class="card-title mb-3">
                <span className="fw-bold">Description: </span>
                {demo.description}
              </h5>
              <h5 class="card-title mb-3">
                <span className="fw-bold">Category: </span>
                {demo.category}
              </h5>

              <h5 class="card-title mb-3">
                <span className="fw-bold">Price: </span>
                {demo.price}
              </h5>
              <h5 class="card-title mb-3">
                <span className="fw-bold">Rating: </span>
                {demo.rating}
              </h5>

              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  class="btn btn-outline-primary mt-4 m-auto "
                  style={{ width: "60%" }}
                  onClick={() => ADD(demo)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
