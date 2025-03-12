//　実践課題１
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【1-1】");
console.log("-- 長方形の面積を計算する関数 --");
function calculateArea(width, height) {
  return width * height;
}

console.log(calculateArea(5, 10));
console.log(calculateArea(3, 7));
console.log("");

//　実践課題２
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【2-1】");
console.log("-- 合計を計算する関数sumNumbersを作成 --");
function sumNumbers(num1, num2) {
  return num1 + num2;
}

console.log(sumNumbers(5, 10));
console.log(sumNumbers(3, 7));
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【2-2】");
console.log("-- デフォルト引数を「0」に設定 --");
function sumNumbers(num1 = 0, num2 = 0) {
  return num1 + num2;
}

console.log(sumNumbers(5));
console.log(sumNumbers());
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【2-3】");
console.log("-- 複数の引数を受け取る --");
function sumNumbers(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumNumbers(3, 7, 2, 8));
console.log("");
/*
・「...numbers」は可変長引数を受け取る Rest parameterで、配列として numbersに格納される
・reduce() メソッドを使い、配列内のすべての数値を合計する
・初期値 0 を指定することで、引数が空でもエラーにならず 0 を返す
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【2-4】");
console.log("-- argumentsオブジェクトを用いて、実際に渡された引数の数を確認 --");
function sumNumbers() {
  console.log(`渡された引数の数: ${arguments.length}`);

  // arguments を配列に変換し、合計を計算
  const numbers = Array.from(arguments);
  const total = numbers.reduce((sum, num) => sum + num, 0);

  return `合計: ${total}`;
}
console.log(sumNumbers(3, 7, 2, 8));
console.log("");

//　実践課題３
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【3-1】");
console.log("-- ユーザーの名前と年齢をコンソールに出力する関数を作成 --");
function omoitukanai(user) {
  console.log(`名前: ${user.name}`);
  console.log(`年齢: ${user.age}`);
}

const person = { name: "太郎", age: 20, email: "taro@example.com" };
omoitukanai(person);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【3-2】");
console.log("-- 関数のパラメータに分割代入を用いた出力方法 --");
function omoitukanai2({ name, age }) {
  console.log(`名前: ${name}`);
  console.log(`年齢: ${age}`);
}

const person2 = { name: "太郎", age: 20, email: "taro@example.com" };
omoitukanai2(person2);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【3-3】");
console.log("同様の処理をArrow Functionを定義した書き方");
const omoitukanai3 = ({ name, age }) => {
  console.log(`名前: ${name}`);
  console.log(`年齢: ${age}`);
};

const person3 = { name: "太郎", age: 20, email: "taro@example.com" };
omoitukanai3(person3);
console.log("");

//　実践課題４
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【4-1】");
console.log("コールバック関数を活用する関数processResultを作成");
function processResult(input, callback) {
  // 受け取った input の値を2倍にする処理を行う
  const result = input * 2;

  // コールバック関数を呼び出し、処理結果を渡す
  if (typeof callback === "function") {
    callback(result);
  }
}

processResult(100, function (result) {
  console.log("処理結果: ", result);
});
console.log("");
/*
・processResult という名前の関数を定義。2つの引数を受け取る
・input : メインの処理対象となる値（例えば数値）
・callback : 処理が完了した後に呼び出される関数（コールバック関数）
*/

/*
 if (typeof callback === "function") {
    callback(result);
  }
・callback が関数であるかどうかを typeof を使ってチェック
*/

/*
processResult 内部で input * 2 の計算が行われ
callback(result) で 200 が console.log に渡される
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【4-2】");
const processor = {
  value: 0,

  processResult(input, callback) {
    this.value = input * 2; // オブジェクトの状態を更新

    if (typeof callback === "function") {
      callback(this.value); //　	processResult メソッド内の this は processor を指す
    }
  },
};

processor.processResult(100, function (result) {
  console.log("処理結果: ", result);
  console.log("オブジェクトの状態: ", processor.value);
});
console.log("");
/*
processor = プロセッサ
*/

/*
this()
オブジェクトそのものを参照する

const obj = {
  name: "Maki Yamamoto",
  age: 24,
  language: "Japanese",
  test: function () {
    console.log(this);
  },
};
obj.test();
*/
