const fs = require("fs");

console.log("非同期処理の開始");

// (2) 非同期的なファイル読み込み
fs.readFile("./sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("ファイルの内容:", data);
});

console.log("非同期処理の終了");
