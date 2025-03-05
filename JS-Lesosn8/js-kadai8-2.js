//　実践課題２
//　以下のコードを実際に動かして、do-while文の動作を確認してください。

let number;
do {
  // ここではランダムな数値を生成しています。
  number = Math.floor(Math.random() * 10); // 0～9の整数
  console.log("生成された数値:", number);
} while (number < 5); // 数値が5以上になるまでループを継続

console.log("条件が満たされました。ループを終了します。");
