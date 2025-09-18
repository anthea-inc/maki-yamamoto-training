//　実践課題１

const a = 5;
const b = "5";

console.log(a == b);
console.log(a === b);

console.log(a != b);
console.log(a !== b);

console.log(a > 3);
console.log(a >= 5);

console.log(a < 10);
console.log(a <= 5);

/*
実践課題１
==と===で結果に違いが出る理由をまとめておきましょう。

解答
==（等価演算子）：比較する値の型が異なる場合に型変換（暗黙的な型変換）を行ったうえで比較する
===（厳密等価演算子）：型変換を行わずに、型と値の両方が一致しているかどうかを判定する

const a = 5;
const b = '5';

①console.log(a == b);　//true
→ 暗黙的な型変換が行われ、数値「５」と数値「５」が比較されている
②console.log(a === b);　//false
→ 数値「５」と文字列「５」が比較されている
*/
