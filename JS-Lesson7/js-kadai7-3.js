//　実践課題３

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("1から7の整数を入力してください: ", (input) => {
  let day = Number(input);

  // switch/case文を使用して、入力に対応する曜日を出力
  // ここから実装してください。

  switch (day) {
    case 1:
      console.log("月曜日");
      break;
    case 2:
      console.log("火曜日");
      break;
    case 3:
      console.log("水曜日");
      break;
    case 4:
      console.log("木曜日");
      break;
    case 5:
      console.log("金曜日");
      break;
    case 6:
      console.log("土曜日");
      break;
    case 7:
      console.log("日曜日");
      break;
    default:
      console.log("無効な入力です");
  }

  rl.close();
});
