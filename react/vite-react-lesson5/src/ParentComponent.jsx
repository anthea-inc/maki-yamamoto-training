//実践課題２

import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const handleClick = () => {
    alert("親コンポーネントのイベントハンドラーが呼ばれました！");
  };

  return (
    <div>
      <h1>親コンポーネント</h1>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
