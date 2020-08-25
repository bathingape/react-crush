import React, { useContext } from "react";
import { NameContext } from "../App";

function QWER() {
  const name = useContext(NameContext);
  return (
    <div>
      <p>Hello, {name}</p>
    </div>
  );
}

export default QWER;
