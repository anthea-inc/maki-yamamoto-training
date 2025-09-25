// 実践課題３

import React, { useState } from "react";

const TextInputForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // ブラウザのデフォルト動作（ページリロード）を防止
    console.log(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">送信</button>
    </form>
  );
};

export default TextInputForm;

/*
import React, { useState } from 'react';
React と、状態を管理するためのフック useState をインポートしている
useState は「状態（state）」を使うための関数

const [text, setText] = useState('');
text：入力欄の中身を保持する状態変数
setText：text を更新するための関数
初期値は ''（空文字）

handleSubmit：フォームの onSubmit 時に呼ばれる関数
setText('')：フォーム送信後に入力欄を空にリセットする
console.log(text)：入力されたテキストを開発者ツールのコンソールに表示
*/
