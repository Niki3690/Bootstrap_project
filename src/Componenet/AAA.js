import React, { useContext } from "react";
import BBB from "./BBB";
import NAMES from "./Contaxt";

const AAA = () => {
  let { surname } = useContext(NAMES);
  return (
    <div>
      <BBB />

      <h1>My surname is {surname}</h1>
    </div>
  );
};

export default AAA
