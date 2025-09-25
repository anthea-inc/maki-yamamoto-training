import React from "react";

const ClickButton = () => {
  const handleClick = () => {
    console.log("ボタンがクリックされました！");
  };

  return (
    <div>
      <button onClick={handleClick}>クリックしてね</button>
    </div>
  );
};

export default ClickButton;

/*
handleClick関数：ボタンクリック時に呼び出される
onClick 属性：ボタンにクリックイベントを登録している
*/

/*
ClickButton は「Reactコンポーネント」を表す関数
その中に handleClick という「クリックされたときに実行する関数」を定義

なぜ関数の中に関数を書くのか？
handleClick を ClickButton の中に書くことで、そのイベントハンドラはそのコンポーネント専用になる
他の場所から勝手に呼ばれることがなくなり、安全でわかりやすい設計になる
*/
