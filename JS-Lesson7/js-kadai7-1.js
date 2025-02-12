// 実践課題１

const readline = require("readline"); //Node.js の標準モジュール readline を require で読み込む

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("数値を入力してください: ", (input) => {
  let num = Number(input); //input を 数値 に変換

  // 条件に応じて出力するメッセージを決定する
  // ここから実装してください。

  if (isNaN(num)) {
    console.log("数値を入力してください！");
  } else if (num > 0) {
    console.log("正の数です。");
  } else if (num < 0) {
    console.log("負の数です。");
  } else {
    console.log("ゼロです。");
  }
  rl.close();
});

/*
メモ：
readline モジュールは、コマンドライン（標準入力・標準出力）を使った対話的な入力処理をするためのもの

if (isNaN(num)) {
→ 変数「num」が NaN (Not a Number: 数値でない) かどうかを判定
Number(input) の結果が NaN の場合、（"abc" のような文字列を入力したとき）この条件が true になる
*/
