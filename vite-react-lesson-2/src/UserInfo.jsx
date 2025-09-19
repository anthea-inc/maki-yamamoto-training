import React from "react";

const UserInfo = ({ isLoggedIn, method = "ternary" }) => {
  // 1. if-else パターン
  if (method === "if") {
    if (isLoggedIn) {
      return <p>ログイン済みです。ようこそ！</p>;
    } else {
      return <p>ログインしていません。ログインしてください。</p>;
    }
  }

  // その他の未対応method
  return <p>表示方法が不明です。</p>;
};

export default UserInfo;

/*
ほぼ引用のためコメントアウトする

  // 2. 三項演算子パターン
  if (method === "ternary") {
    return (
      <p>
        {isLoggedIn
          ? "ログイン済みです。ようこそ！"
          : "ログインしていません。ログインしてください。"}
      </p>
    );
  }

  // 3. 論理AND（&&）と OR（||）パターン
  if (method === "and") {
    return (
      <p>
        {(isLoggedIn && "ログイン済みです。ようこそ！") ||
          "ログインしていません。ログインしてください。"}
      </p>
    );
  }
*/

/*
({ isLoggedIn, method = "ternary" })
「分割代入とデフォルト引数」を組み合わせた書き方

method = "ternary"
props.method が 指定されなかった場合の初期値（デフォルト値） を "ternary" にしている
*/
