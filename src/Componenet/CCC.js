import React, { useContext } from "react";
import NAMES from "./Contaxt";

const CCC = () => {
  let { name, surname } = useContext(NAMES);
  return (
    <div>
      <h1>
        My name is {name} and my suname is {surname}
      </h1>
    </div>
  );
};

export default CCC;
