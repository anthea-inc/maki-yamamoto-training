//実践課題１

let a = 0; // 変数「a」に数値0を代入
console.log(typeof a, a); //　型：number　値：0

let b = "1" + a; //変数「b」に文字列"1"と変数「a」を合わせた結果を代入
console.log(typeof b, b); // 型：string　値：10
//補足：暗黙的な型変換が発生したので、数値ではなく文字列として結合された

let c = 15 - b; // 変数「c」に数値15から数値10を減算した値を代入
console.log(typeof c, c); //　型：number　値：5
//補足：ただの引き算

let d = c - null; // 変数「d」に数値5からnull(0)を減算した値を代入
console.log(typeof d, d); //　型：number　値：5
//補足：null は数値型の０に変換されるため、5-0をしている

let e = c - true;
console.log(typeof e, e); //　型：number　値：4
/*補足：-（減算）が 数値演算子 であり、オペランドを数値に変換しようとする
true を数値として扱うと１に変換されるため、5-1をしている */
