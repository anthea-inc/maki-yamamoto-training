import React, { useReducer } from "react";

// reducer関数の定義
const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "add":
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

// コンポーネント定義
const Counter5 = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>カウント: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "reset" })}>リセット</button>
      <button onClick={() => dispatch({ type: "add", payload: 5 })}>+5</button>
    </div>
  );
};

export default Counter5;
