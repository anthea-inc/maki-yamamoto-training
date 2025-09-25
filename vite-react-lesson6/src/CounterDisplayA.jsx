import React from "react";
import useCounter from "./useCounter";

const CounterDisplayA = () => {
  const { count, increment } = useCounter(0); // 初期値0

  return (
    <div>
      <h3>Counter A: {count}</h3>
      <button onClick={increment}>+1</button>
    </div>
  );
};

export default CounterDisplayA;
