import React, { useContext } from "react";
import { StoreContext } from "../store/Store";

const Display = () => {
  const { number, setNumber } = useContext(StoreContext);

  return <div>number : {number}</div>;
};

export default Display;
