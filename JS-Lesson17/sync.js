const fs = require("fs");

console.log("同期処理の開始");

// (1) 同期的なファイル読み込み
// sample.txtを適当なテキストファイルに置き換えてもOK
const data = fs.readFileSync("./sample.txt", "utf-8");

console.log("ファイルの内容:", data);

console.log("同期処理の終了");
