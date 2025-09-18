// src/components/Button.jsx
import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-200"
    >
      {children}
    </button>
  );
};

export default Button;

/*
 -- 使用している主な Tailwind クラス --
 
・bg-blue-500: ボタン背景色
・hover:bg-blue-600: ホバー時の色
・text-white, font-semibold: 文字のスタイル
・py-2 px-4: パディング
・rounded: 角丸
・shadow-md: 影
・transition duration-200: ホバー時のスムーズな変化
*/
