// 実践課題４

/*
ハブリング発生するコード
import React from "react";

const ClickComponent = () => {
  const handleOuterClick = () => {
    console.log("外側のdivがクリックされました");
  };

  const handleButtonClick = () => {
    console.log("ボタンがクリックされました");
  };

  return (
    <div
      onClick={handleOuterClick}
      style={{ padding: "20px", backgroundColor: "#e0e0e0" }}
    >
      <button onClick={handleButtonClick}>クリックしてみて</button>
    </div>
  );
};

export default ClickComponent;
*/

import React from "react";

const ClickComponent = () => {
  const handleOuterClick = () => {
    console.log("外側のdivがクリックされました");
  };

  const handleButtonClick = (event) => {
    event.stopPropagation(); // ここでバブリングを止める
    console.log("ボタンがクリックされました");
  };

  return (
    <div
      onClick={handleOuterClick}
      style={{ padding: "20px", backgroundColor: "#e0e0e0" }}
    >
      <button onClick={handleButtonClick}>クリックしてみて</button>
    </div>
  );
};

export default ClickComponent;
