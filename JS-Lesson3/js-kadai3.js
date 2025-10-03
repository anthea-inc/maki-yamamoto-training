// 各プリミティブデータ型の変数を宣言
let str = "Hello, world!"; // string 型
let num = 24; // number 型
let bigIntNum = 1234561n; // bigint 型
let bool = true; // boolean 型
let undef; // undefined 型（明示的に値を設定しない）
let sym = Symbol("unique"); // symbol 型
let nul = null; // null 型

// 変数の値を出力
console.log("String:", str);
console.log("Number:", num);
console.log("BigInt:", bigIntNum);
console.log("Boolean:", bool);
console.log("Undefined:", undef);
console.log("Symbol:", sym);
console.log("Null:", nul);

// 変数の型を typeof で確認し、出力
console.log("Type of str:", typeof str);
console.log("Type of num:", typeof num);
console.log("Type of bigIntNum:", typeof bigIntNum);
console.log("Type of bool:", typeof bool);
console.log("Type of undef:", typeof undef);
console.log("Type of sym:", typeof sym);
console.log("Type of nul:", typeof nul);
