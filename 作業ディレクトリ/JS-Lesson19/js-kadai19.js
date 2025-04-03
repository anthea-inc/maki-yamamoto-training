// 実践課題１
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("実践課題１");
const jsonStr = '{"title": "JSON入門", "level": "初級", "completed": false}';
const obj = JSON.parse(jsonStr);

// completed を true に変更
obj.completed = true;

// reviewedプロパティを追加
obj.reviewed = "2025-03-29";

// JSON に再変換（整形付き）
const newJsonStr = JSON.stringify(obj, null, 2); //　これすげー！！
console.log(newJsonStr);

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("実践課題２");

const jsonStr2 = '{ "name": "Taro", "age": 25, "email": "taro@example.com" }';
const obj2 = JSON.parse(jsonStr2);

// ageプロパティの値を５増加
obj2.age += 5;

// addressプロパティを追加し、Tokyoを設定
obj2.address = "Tokyo";

// JSON に再変換（整形付き）
const newJsonStr2 = JSON.stringify(obj2, null, 2);
console.log(newJsonStr2);

/*
エラーログ1：JSON.parse() に オブジェクトを渡している

// JSON風のJavaScriptオブジェクト
const jsonStr2 = { name: "Taro", age: 25, email: "taro@example.com" };
const obj2 = JSON.parse(jsonStr2);

// ageプロパティの値を５増加
obj2.age += 5;

// addressプロパティを追加し、Tokyoを設定
obj2.address = "Tokyo";

// JSON に再変換
const newJsonStr2 = JSON.stringify(obj2);
console.log(newJsonStr2);
*/

/*
JSON文字列の定義
全体：{}で囲まれたオブジェクト形式
キー："name","age"などダブルクォーテーション付きの文字列
値（文字列）："Maki"などダブルクォーテーション付き
値（数値）：24　数値はクォート不要
*/

/*
コード解説
const newJsonStr = JSON.stringify(obj, null, 2);

•	obj → JavaScriptのオブジェクト（例: { title: "JSON入門", ... }）
•	JSON.stringify(...) → オブジェクトをJSON形式の文字列に変換する関数
•	null → “replacer”。今回は すべてのプロパティをそのまま使うという意味
•	2 → “space”。JSONの構造をインデント（スペース2個）で整形する
*/
