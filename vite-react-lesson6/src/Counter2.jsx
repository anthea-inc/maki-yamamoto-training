import React, { useState, useEffect } from "react";

function Counter2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `現在のカウント: ${count}`;
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>カウント: {count}</h1>
      <button
        onClick={() => setCount(count - 1)}
        style={{ marginRight: "10px" }}
      >
        － 減らす
      </button>
      <button onClick={() => setCount(count + 1)}>＋ 増やす</button>
    </div>
  );
}

export default Counter2;
