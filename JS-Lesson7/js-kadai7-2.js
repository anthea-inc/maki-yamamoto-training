// 実践課題２

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("数値を入力してください: ", (input) => {
  const num = Number(input);
  console.log(
    isNaN(num)
      ? "数値を入力してください！"
      : num > 0
      ? "正の数です。"
      : num < 0
      ? "負の数です。"
      : "ゼロです。"
  );
  rl.close();
});
