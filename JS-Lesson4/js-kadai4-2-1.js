//　実践課題２−１

let x = "3.14";
// Number()を使用して型変換
x = Number(x);
const num1 = Number(x);
console.log(num1, typeof x); // 3.14

// parseInt()を使用して型変換
const num2 = parseInt(x);
console.log(num2, typeof x); // 3

// Number()とparseInt()を使って型変換
const num3 = Number(parseInt(x, 10));
console.log(num3, typeof x); // 3

/*
Number() は数値に変換する際に小数点も考慮して変換する
parseInt() は整数部分だけを取り出し、残りを無視する
Number(parseInt()) を使うと、parseInt() の結果を Number 型にするだけで、通常の parseInt() の結果と変わらない
*/
