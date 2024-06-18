// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { remove, increment, decrement } from "./Store/Cartslice";

// const Cart = () => {
//   let names = useSelector((state) => state.cart);
//   let dispatch = useDispatch();

//   let REMOVE = (itemId) => {
//     dispatch(remove(itemId));
//   };

//   let INCREMENT = (itemId) => {
//     dispatch(increment(itemId));
//   };

//   let DECREMENT = (itemId) => {
//     dispatch(decrement(itemId));
//   };
//   return (
//     <div>
//       <div className="aa">
//         {names.length === 0 ? <h1>No Items In your cart</h1> : ""}
//         {names.map((items) => {
//           let main = items.price * items.quantity;
//           return (
//             <div className="bb">
//               <h2>{items.id}</h2>
//               <h3>{items.title}</h3>
//               <h3>{main}</h3>
//               <h3>{items.quantity}</h3>
//               <button onClick={() => INCREMENT(items.id)}>+</button>
//               <button onClick={() => DECREMENT(items.id)}>-</button>
//               <button onClick={() => REMOVE(items.id)}>REMOVE TO CART</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "./Store/Cartslice";
import { increment, decrement } from "./Store/Cartslice";
import { Link } from "react-router-dom";

const Cart = () => {
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let REMOVE = (itemId) => {
    dispatch(remove(itemId));
  };

  let INCR = (itemId) => {
    dispatch(increment(itemId));
  };

  let DECR = (itemId) => {
    dispatch(decrement(itemId));
  };

  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            {names.length === 0 ? (
              <h1 className="text-center mt-5 fw-semibold ">
                Your Cart Is Empty...😕
                <br />
                <Link to="/">
                  <button
                    style={{ marginTop: 150, fontSize: 20 }}
                    className="btn btn-primary"
                  >
                    BACK TO HOME
                  </button>
                </Link>
              </h1>
            ) : (
              ""
            )}
            {names.map((demo) => {
              let namesss = demo.price * demo.quantity;
              return (
                <>
                  <div className="col-sm-12 col-md-6 col-lg-3  col-12">
                    <div
                      class="card mt-5 text-center"
                      style={{ borderRadius: 0 }}
                    >
                      <h5 class="card-title text-center fs-3">{demo.id}</h5>
                      <img
                        src={demo.image}
                        class="card-img-top"
                        alt="..."
                        style={{ height: 180, width: "100%", borderRadius: 0 }}
                      />
                      <div class="card-body">
                        <h5 class="card-title">{demo.title}</h5>
                        <h5 class="card-title">{namesss}</h5>
                        <h5 class="card-title mt-3">{demo.quantity}</h5>
                        <div className="d-flex justify-content-center text-center">
                          <button
                            type="button"
                            class="btn btn-outline-primary mt-4 mx-1"
                            style={{ width: "100%" }}
                            onClick={() => INCR(demo.id)}
                          >
                            +
                          </button>

                          <button
                            type="button"
                            class="btn btn-outline-primary mt-4 mx-1"
                            style={{ width: "100%" }}
                            onClick={() => DECR(demo.id)}
                          >
                            -
                          </button>
                        </div>
                        <button
                          type="button"
                          class="btn btn-outline-primary mt-4"
                          style={{ width: "100%" }}
                          onClick={() => REMOVE(demo.id)}
                        >
                          REMOVE TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
