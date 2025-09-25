{
  /* 実践課題1-2
 onClickプロパティに直接関数を定義する方法と、事前に定義した関数を参照する方法の両方を実装してください。*/
}

import React from "react";

const ClickExamples = () => {
  // 事前に定義した関数
  const handleClick = () => {
    console.log("事前定義された関数が呼ばれました");
  };

  return (
    <div>
      {/* 方法1：直接関数を定義 */}
      <button onClick={() => console.log("直接定義された関数が呼ばれました")}>
        直接定義のボタン
      </button>

      {/* 方法2：事前に定義した関数を使う */}
      <button onClick={handleClick}>事前定義のボタン</button>
    </div>
  );
};

export default ClickExamples;

/*
キャメルケースとは？
単語の先頭を大文字にしてつなげる方法のこと

小文字で始まるもの
例：clickButton
説明：最初は小文字、２語目以降の頭文字が大文字

大文字で始まるもの
例：ClickButton
説明：全ての単語の頭文字が大文字（クラス名やコンポーネント名に使う）
*/
