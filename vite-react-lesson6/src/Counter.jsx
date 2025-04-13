// Counter.jsx
import React, { useState } from "react";

const Counter = () => {
  // カウント状態をuseStateで定義（初期値は0）
  const [count, setCount] = useState(0);

  // ボタンがクリックされたときにカウントを1増やす関数
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>カウント: {count}</h2>
      <button onClick={handleClick}>カウントを増やす</button>
    </div>
  );
};

export default Counter;
