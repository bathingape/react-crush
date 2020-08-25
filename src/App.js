import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import "./App.css";
import Hello from "./components/Hello";
import Whoru from "./components/Whoru";
import ASDF from "./components/ASDF";
import { StoreProvider } from "./store/Store";

import Display from "./components/Display";
import Controller from "./components/Controller";
import Counter from "./components/Counter";
import Focus from "./components/Focus";

export const NameContext = createContext();
export const textContext = createContext(null);

const App = () => {
  // const [count, setCount] = useState(0);
  // const [data, setData] = useState("");

  // const GetData = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((response) => console.log(response.data))
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // useEffect(() => {
  //   console.log("ok");
  //   document.title = `You clicked ${count} times && my data is ${data}`;
  // }, [count, data]);

  return (
    <div className="App">
      {/* <p>
        You clicked {count} times {data}
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Hello name="Bruce" heroName="Batman" count={count} />
      <button onClick={GetData}>getData</button>
      <br />
      <Whoru />
      <button onClick={() => setData(...data, data + "+")}>Click me</button> */}
      {/* <StoreProvider>
        <Display />
        <Controller />
      </StoreProvider> */}
      {/* <NameContext.Provider value="ape">
        <ASDF />
      </NameContext.Provider> */}
      {/* <Counter /> */}
      <Focus />
    </div>
  );
};

export default App;
