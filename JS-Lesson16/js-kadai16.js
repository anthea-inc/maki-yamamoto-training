try {
  // コマンドライン引数の取得
  const args = process.argv.slice(2);
  if (args.length < 2) {
    throw new Error("2つの数値を引数として指定してください。");
  }

  const num1 = Number(args[0]);
  const num2 = Number(args[1]);

  // 数値であるかの検証
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("数値を入力してください。");
  }

  // 割り算処理
  if (num2 === 0) {
    throw new Error("0で割ることはできません。");
  }

  const result = num1 / num2;
  console.log(`結果: ${result}`);
} catch (error) {
  console.error("エラーが発生しました:");
  console.error("エラーメッセージ:", error.message);
  console.error("エラー名:", error.name);
} finally {
  console.log("処理終了");
}

/*

【説明１】
JavaScriptでは、エラーが発生する可能性のある処理を try ブロックで囲む
もしエラーが起きたら catch ブロックでそれを捕捉し、finally はエラーの
有無に関係なく最後に必ず実行される

try {
  // コマンドライン引数の取得
  const args = process.argv.slice(2);

【説明２】
  ユーザーが 2つの引数 を入力しなかった場合にエラーを発生させる
  if (args.length < 2) {

【説明３】
  throw new Error(...) で意図的にエラーを投げる
  Error オブジェクトにはエラーメッセージを渡せる
    throw new Error("2つの数値を引数として指定してください。");
  }


【説明４】
コマンドラインから受け取った文字列を数値に変換する
Number() は変換可能な場合は数値に変換し、変換できない場合は NaN（数値ではない）になる

  const num1 = Number(args[0]);
  const num2 = Number(args[1]);

【説明５】
isNaN() は、その値が「数値ではない（Not a Number）」かどうかを判定
どちらか一方でも数値でなければ、エラーを投げる

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("数値を入力してください。");
  }

【説明６】
割る数が 0 の場合、数学的に割り算は定義されないため、エラーとする
0で割ることはできません。というわかりやすいメッセージを返す
  // 割り算処理
  if (num2 === 0) {
    throw new Error("0で割ることはできません。");
  }

【説明７】
ここまでのチェックを全て通過した場合、割り算を実行する

  const result = num1 / num2;
  console.log(`結果: ${result}`);
} 
  
【説明８】
try ブロック内でエラーが発生した場合、ここで処理される
console.error でエラーメッセージを出力する

catch (error) {
  console.error("エラーが発生しました:");
  console.error("エラーメッセージ:", error.message);
  console.error("エラー名:", error.name);
} 
  
【説明９】
成功しても失敗しても、必ず最後に実行されるブロック
例外処理の最後にログ出力したり、リソースの解放をしたりするのに使う

finally {
  console.log("処理終了");
}
*/
