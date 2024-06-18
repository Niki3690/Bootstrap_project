import React, { useState } from "react";

const Crud = () => {
  let [activity, setActivity] = useState("");
  let [list, setList] = useState([]);

  let SAVE = () => {
    if (activity.trim() !== "") {
      setList([...list, activity]);
      setActivity("");
    }
  };

  let REMOVE = (id) => {
    let rmv = list.filter((item, index) => index !== id);
    setList(rmv);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          marginTop: 45,
          width: "100%",
        }}
      >
        <input
          style={{ padding: 12, fontSize: 22 }}
          type="text"
          placeholder="type here"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />

        <button
          onClick={SAVE}
          style={{ padding: "9px 25px", fontSize: 22, marginLeft: 25 }}
        >
          SAVE
        </button>
      </div>
      {list.map((demo, id) => {
        let displayedText = demo.length > 4 ? demo.slice(0, 4) + "..." : demo;
        return (
          <div style={{ textAlign: "center" }} key={id}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                width: "50%",
                margin: "35px auto 35px auto",
              }}
            >
              <h1>{displayedText}</h1>
              <button
                onClick={() => REMOVE(id)}
                style={{ padding: "9px 15px", fontSize: 22, marginLeft: 25 }}
              >
                REMOVE
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Crud;
