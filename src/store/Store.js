import React, { useState } from "react";

const StoreContext = React.createContext(null);

const StoreProvider = ({ children }) => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const store = {
    number,
    setNumber,
    text,
    setText,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
