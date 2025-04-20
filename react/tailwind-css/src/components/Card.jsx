// src/components/Card.jsx
import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-base">{content}</p>
    </div>
  );
};

export default Card;

/*
-- スタイルの再現ポイント --

・bg-white, rounded-xl, shadow-lg: カードらしい見た目
・p-6: 余白
・max-w-md mx-auto: 中央配置と幅制限
・border border-gray-200: 枠線
・タイトルと本文も色・フォントサイズでメリハリ
  */
