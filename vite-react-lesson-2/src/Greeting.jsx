// src/Greeting.jsx

/*
実践課題１
Greeting.jsxというコンポーネントを作成

// Reactコンポーネントを定義する際に必要なReactライブラリをインポートしている
import React from "react";

// 関数コンポーネントの定義
const Greeting = () => {
  return <h1>Hello, React!</h1>;
};

// このコンポーネントをモジュールとして外部に公開しており、他のファイルからインポートして使用できる
export default Greeting;
*/

// 実践課題２

import React from "react";

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Greeting;
