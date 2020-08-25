import React from "react";

const Hello = ({ name, heroName, count }) => {
  //   console.log(props);
  return (
    <>
      <p>
        Hello, {name} aka {heroName}
      </p>
      <p>{count}</p>
    </>
  );
};

export default Hello;
