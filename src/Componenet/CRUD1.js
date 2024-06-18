import React, { useState } from "react";

const CRUD1 = () => {
  let [activity, setActivity] = useState("");
  let [list, setList] = useState([]);

  let SAVE = () => {
    if (activity.trim() !== "") {
      setList([...list, activity]);
      setActivity("");
    }
  };

  let REMOVE = (id) => {
    let rmvv = list.filter((item, index) => index !== id);
    setList(rmvv);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter text here.."
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />

      <button onClick={SAVE}>SAVE</button>

      {list.map((demo, id) => {
        let demoNum = demo.length > 2 ? demo.slice(0, 2) + "..." : demo;
        return (
          <>
            <h1>{demoNum}</h1>
            <button onClick={() => REMOVE(id)}>SAVE</button>
          </>
        );
      })}
    </div>
  );
};

export default CRUD1;
