import React, { useState } from "react";
import { DataDetails } from "./DataDetails";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./Store/Cartslice";
import { Link } from "react-router-dom";

const Data = () => {
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  let [sold, setSold] = useState(DataDetails);
  let [puts, setPuts] = useState("");
  let [buttons, setButtons] = useState("");

  let ADD = (demo) => {
    let items = names.find((item) => item.id === demo.id);
    if (!items) {
      dispatch(add(demo));
    }
  };

  let CLICKME = (e) => {
    setPuts(e.target.value);
    let namesss = DataDetails.filter((dd) =>
      dd.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSold(namesss);
  };

  let BUTTTON = (cc) => {
    let demoss = DataDetails.filter((jj) => jj.category === cc);
    setSold(demoss);
  };

  let SELECT = (e) => {
    setButtons(e.target.value);

    let demoo = DataDetails.filter((aaaa) => {
      if (e.target.value === "") {
        return true;
      } else if (e.target.value === "0-400") {
        return aaaa.price >= 0 && aaaa.price <= 400;
      } else if (e.target.value === "400-800") {
        return aaaa.price >= 400 && aaaa.price <= 800;
      } else {
        return false;
      }
    });
    setSold(demoo);
  };
  return (
    <div>
      <>
        <div className="container  mt-5">
          <div className="row mmmm">
            <div class="col-md-2">
              <button
                type="button"
                class="btn btn-primary btn-block"
                style={{ width: "100%" }}
                onClick={() => setSold(DataDetails)}
              >
                ALL
              </button>
            </div>

            <div class="col-md-2 ">
              <button
                type="button"
                style={{ width: "100%" }}
                class="btn btn-primary btn-block"
                onClick={() => BUTTTON("women")}
              >
                women
              </button>
            </div>
            <div class="col-md-2">
              <button
                type="button"
                style={{ width: "100%" }}
                class="btn btn-primary btn-block"
                onClick={() => BUTTTON("men")}
              >
                men
              </button>
            </div>
            <div class="col-md-2 ">
              <button
                type="button"
                style={{ width: "100%" }}
                class="btn btn-primary btn-block"
                onClick={() => BUTTTON("kids")}
              >
                kids
              </button>
            </div>

            <div class="col-md-2 ">
              <input
                type="search"
                placeholder="search here.."
                value={puts}
                onChange={CLICKME}
                class="form-control bg-primary text-white"
              />
            </div>
            <div class="col-md-2 ">
              <select
                value={buttons}
                onChange={SELECT}
                class="form-control bg-primary text-white"
              >
                <option value="">ALL</option>
                <option value="0-400">0-400</option>
                <option value="400-800">400-800</option>
              </select>
            </div>
          </div>
        </div>
      </>
      <div className="container">
        <div className="row">
          {sold.length === 0 ? (
            <h1 className="text-center mt-5 fw-semibold ">
              Plz Try Again With Right Product Name...🙂
            </h1>
          ) : (
            ""
          )}
          {sold.map((demo) => {
            return (
              <>
                <div className="col-sm-12 col-md-6 col-lg-3  col-12">
                  <div
                    class="card mt-5 text-center shadow-lg"
                    style={{ borderRadius: 0 }}
                  >
                    <h5 class="card-title text-center fs-3">{demo.id}</h5>
                    <Link to={`demo/${demo.id}`}>
                      <div>
                        <img
                          src={demo.image}
                          class="card-img-top"
                          alt="..."
                          style={{
                            height: 180,
                            width: "100%",
                            borderRadius: 0,
                          }}
                        />
                        <div class="card-body">
                          <h5 class="card-title">{demo.title}</h5>
                          <h5 class="card-title">{demo.price}</h5>
                        </div>
                      </div>
                    </Link>
                    <button
                      type="button"
                      class="btn btn-outline-primary mt-4 mb-3 m-auto "
                      style={{ width: "90%" }}
                      onClick={() => ADD(demo)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Data;
