import React from "react";
import useCounter from "./useCounter";

const CounterDisplayB = () => {
  const { count, increment } = useCounter(10); // 初期値10（変更して独立性を明示）

  return (
    <div>
      <h3>Counter B: {count}</h3>
      <button onClick={increment}>+1</button>
    </div>
  );
};

export default CounterDisplayB;
