//実践課題２

import React from "react";

function ChildComponent({ onButtonClick }) {
  return (
    <div>
      <h2>子コンポーネント</h2>
      <button onClick={onButtonClick}>親の関数を呼ぶボタン</button>
    </div>
  );
}

export default ChildComponent;
