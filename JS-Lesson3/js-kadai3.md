# 課題 1

- JavaScript には、以下のプリミティブデータ型が定義されています。各データ型の特徴や使用例を、どのような場面で使われるのかも含めて説明してください。
  ・string
  　特徴：文字列を表すデータ型で、シングル (')、ダブル (") 、バッククォート（`）のいずれかのクォートで囲む
  　使用場面：メッセージやテキストの情報の表示、フォーム入力
  【使用例】
  let name = "maki";

  ・number
  　特徴：すべての数値（整数・浮動小数点）を表す
  　使用場面：数学的な計算、価格やスコアの管理
  【使用例】
  let age = 24;
  let price = 99.99;
  let sum = 10 + 5;

  ・bigint
  　特徴：number 型では扱えない大きな整数を表す。「n」を末尾につけることで bigint 型として扱える
  　使用場面：暗号処理やハッシュ計算、高精度の数値計算（例: 金融・統計分野）
  　メモ：number 型と bigint 型は直接演算できない
  【使用例】
  let bigNumber = 9007199254740991n + 1n;
  console.log(bigNumber); // 9007199254740992n

  ・boolean（真偽値）
  　特徴：true または false の 2 つの値を持つ
  　使用場面：条件分岐 (if, while)、フラグ管理（例: ログイン状態、設定 ON/OFF）
  【使用例】
  let isLoggedIn = true; //ログインしている状態
  let hasPermission = false;　//権限がない状態
  if (isLoggedIn) {　//isLoggedIn が true かどうかを判定
  console.log("User is logged in.");
  }

・undefined
特徴：変数が宣言されているが、値が設定されていない場合のデフォルト値
使用場面：関数の戻り値がない場合 (return がない関数)、オブジェクトのプロパティが存在しない場合
メモ：undefined は明示的に代入しないほうが良い（代わりに null を使用）
【使用例】
let notAssigned;
console.log(notAssigned); // undefined

・symbol
特徴：一意の識別子を作成するデータ型。他の値と一致しない固有の値を生成する
使用場面：オブジェクトのプロパティのキーとして使用し、名前の衝突を防ぐ
【使用例】
let sym1 = Symbol("unique");
let sym2 = Symbol("unique");

・null
特徴：値が「存在しない」ことを明示的に示す
使用場面：非同期処理でデータがまだ取得されていない状態
【使用例】
let user = null; // ユーザー情報がないことを明示的に示す
console.log(user); // null

---

# 課題 2

- JavaScript におけるオブジェクトとは何かを説明してください。
- オブジェクトとプリミティブデータ型の違いを解説してください。

【オブジェクト】
キーと値のペアを持つデータ構造であり、さまざまなデータや機能を格納することができる。
JavaScript のほぼすべてのもの（関数、配列、日付など）はオブジェクトとして扱われる

【オブジェクトとプリミティブデータ型の違い】
値の変更
プリミティブ型：不可能（イミュータブル）
オブジェクト型：可能（ミュータブル）

比較方法
プリミティブ型：値を直接比較
オブジェクト型：参照を比較

データの持ち方
プリミティブ型：単一の値のみ
オブジェクト型：複数のプロパティを持つ

コピー時の挙動
プリミティブ型：値がコピーされる
オブジェクト型：参照がコピーされる

---

# 課題 3

- JavaScript には標準で複数の組み込みオブジェクトが用意されています。それぞれの役割をまとめ、よく使用されるプロパティまたはメソッドを 1 つ選び、その用途を具体的に解説してください。
  ・Number
  役割：数値を表すデータ型。整数や浮動小数点数の操作を行う
  よく使用されるプロパティ/メソッド：Number.isInteger()
  用途：値が整数かどうかを判定する
  【使用例】
  console.log(Number.isInteger(10)); // true
  console.log(Number.isInteger(10.5)); // false

  ・Math
  役割：数学的な計算を行うためのユーティリティを提供する
  よく使用されるプロパティ/メソッド：Math.random()
  用途：0 以上 1 未満のランダムな数値を生成する
  【使用例】
  console.log(Math.random()); // 例: 0.328472938

  ・Date
  役割：日付や時刻を扱う
  よく使用されるプロパティ/メソッド：getFullYear()
  用途：日付オブジェクトから年（4 桁）を取得する
  【使用例】
  const today = new Date();
  console.log(today.getFullYear()); //　例: 2025

  ・String
  役割：文字列を扱う
  よく使用されるプロパティ/メソッド：replace()
  用途：文字列の一部を別の文字列に置き換える
  【使用例】
  const str = "Hello, World!";
  console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!" //　文字列「World」を「JavaScript」に置き換える

  ・Error
  役割：プログラムのエラーを表現する
  よく使用されるプロパティ/メソッド：message
  用途：エラーメッセージを取得する
  【使用例】
  try {　　　　　　　　　　　　　　　　　　　　　　　　　//「try」という名のブロック
  throw new Error("予期しないエラーが発生しました");　//「throw」エラーを強制的に起こす
  } catch (e) {　　　　　　　　　　　　　　　　　　　　//try 内で発生したエラーを受け取る
  console.log(e.message); 　　　　　　　　　　　　　　// "予期しないエラーが発生しました"
  }

  ・Function
  役割：関数を扱う
  よく使用されるプロパティ/メソッド：call()
  用途：関数を即時実行し、特定の this を指定する
  【使用例】
  function greet(message) {
  console.log(`${message}, ${this.name}!`);
  }
  const person = { name: "Alice" };
  greet.call(person, "Hello"); // Hello, Alice!

メモ：call() を使うと関数の this を特定のオブジェクトに変更できる

・Boolean
役割：真偽値（true または false）を表す
よく使用されるプロパティ/メソッド：Boolean()
用途： 値を明示的に真偽値に変換する
【使用例】
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true

---

メモ：
「Falsy（false（偽とみなされる値））」
・false
・0（数値のゼロ）
・-0
・ ""（空文字）
・ null
・undefined
・ NaN

「「Truthy（true（真とみなされる値））」

例：
・"Hello"
・ " "（スペース 1 つを含む文字列）
・ "0"（文字列の “0”、数値の 0 とは異なる）
・ []（空の配列）
・ {}（空のオブジェクト）
・ function() {}（関数）

Falsy 以外の値は すべて Truthy になる

---

# 課題 4

- 以下のリテラル表現について、それぞれ記述例を示してください。
  配列リテラル
  【記述例】
  const animals = ["cat", "dog", "bird"];

  論理値リテラル
  【記述例】
  const isTrue = true;
  const isFalse = false;

  浮動小数点リテラル
  【記述例】
  const pi = 3.14159;
  const negativeFloat = -0.99;

  数値リテラル
  【記述例】
  const integer = 42;
  const hex = 0xff; // 16 進数
  const binary = 0b1010; // 2 進数
  const octal = 0o52; // 8 進数

  オブジェクトリテラル
  【記述例】
  const person = {
  name: "Alice",
  age: 25,
  isStudent: false
  };

  文字列リテラル
  【記述例】
  "これは文字列です";
  'これは文字列です';
  メモ：「"」や「'」で囲まれる

  テンプレートリテラル
  【記述例】
  const name = "Bob";
  const greeting = `こんにちは、${name}さん！`;
  console.log(greeting); // "こんにちは、Bob さん！"
  メモ：「`」で囲み、${} 内で変数を展開できる

  正規表現リテラル
  【記述例】
  const regex = /[A-Z]+/g;
  const result = "HELLO world".match(regex);
  console.log(result); // ["HELLO"]
  メモ：「/.../」で囲まれる

---

メモ：
リテラルとは、プログラムのコード内で直接記述される固定値のこと
変数や関数のように計算や処理を通じて決まる値ではなく、そのままの形で存在する値を指す

【記述例】
const message = "hello"; // "hello" は文字列リテラル
const number = 24; // 24 は数値リテラル

---
