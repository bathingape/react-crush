import React, { useContext } from "react";
import { StoreContext } from "../store/Store";

const Controller = () => {
  const { number, setNumber } = useContext(StoreContext);

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>increase</button>
      <button onClick={() => setNumber(number - 1)}>decrease</button>
    </div>
  );
};

export default Controller;
