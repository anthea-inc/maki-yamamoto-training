## 課題 1

- エスケープシーケンスの役割と必要性を、具体例（改行：\n/タブ：\t/引用符のエスケープ：\" や \'）を交えて説明してください。

役割：エスケープシーケンスとは、文字列リテラル内で特殊な文字を表現するための手法
JavaScript では、\（バックスラッシュ）を使って特殊文字を表現する

-- 必要性 --
・改行やタブなど、目に見えない制御文字を表現する
・文字列の区切りとして使われる記号（" や '）を含む文字列を正しく表現する
・特定の文字（\ など）をそのまま表示するため

---

## 課題 2

- 文字列中の特定の文字にアクセスする方法として、以下の 2 つの方法の具体例と使い方を説明してください。

-- インデックスアクセス（例：str[0]） --

特徴
・配列のようにアクセスできる
・存在しないインデックスにアクセスすると undefined を返す
・負のインデックス（-1 など）は使用できない（str[-1] は undefined になる）

【index.js】
const str = "Hello, World!";
console.log(str[0]); // "H"（最初の文字）
console.log(str[7]); // "W"（8 番目の文字）
console.log(str[str.length - 1]);
console.log(str[-1]);

// 存在しないインデックスにアクセスした場合
console.log(str[100]);

【出力結果】
H
W
!
undefined
undefined

-- String.prototype.at を使用する方法 --

特徴
・配列と同じように正のインデックスでもアクセスできる
・存在しないインデックスにアクセスすると undefined を返す
・str.at(-1) で末尾の文字を簡単に取得できる

【index.js】
const str = "Hello, World!";
console.log(str.at(0)); // "H"（最初の文字）
console.log(str.at(7)); // "W"（8 番目の文字）
console.log(str.at(-1)); // "!"（最後の文字）

// 存在しないインデックスにアクセスした場合
console.log(str.at(100));
console.log(str.at(-100));

【出力結果】
H
W
!
undefined
undefined

---

## 課題 3

- split メソッドを使用して文字列を分割し、配列に変換する方法について説明してください。

文字列を特定の区切り文字（デリミタ）で分割し、配列に変換する役割を持つ

【index.js】
// 1 文字ずつ分割する

let word = "hello";
let letters = word.split("");
console.log(letters);

【出力結果】
[ 'h', 'e', 'l', 'l', 'o' ]

- 配列の各要素を指定した区切り文字で結合し、文字列に戻す join メソッドの仕組みとその利用方法について説明してください。

join メソッドは、配列（Array）の各要素を指定した区切り文字（separator）で結合し、1 つの文字列として返すメソッド

【index.js】
const fruits = ["apple", "banana", "cherry"];

console.log(fruits.join()); //　デフォルトのカンマ区切り
console.log(fruits.join(", ")); //　カンマ＋スペース
console.log(fruits.join(" - ")); //　ハイフン区切り
console.log(fruits.join("")); //　区切り文字なし

【出力結果】
apple,banana,cherry
apple, banana, cherry
apple - banana - cherry
applebananacherry

-- join を使う時の注意点 --
・文字列と数値が混在していても問題なく処理される
・undefined や null は空文字に変換される
・元の配列は変更されない（非破壊的メソッド）

---

## 課題 4

- 文字列における length プロパティの機能と、文字数の取得方法について説明してください。

JavaScript では、length プロパティを使用して、文字列の文字数を取得できる

【index.js】
const str = "Hello, World!";
console.log(str.length);

【出力結果】
13

-- 文字列における length の注意点 --
・length プロパティは、UTF-16 コード単位の数を返す
・絵文字や一部の特殊文字（サロゲートペアを使用する文字）は 2 文字分としてカウントされることがある
　 → サロゲートペアを正しく数えるには、Array.from() やスプレッド演算子を使用する

---

## 課題 5

- 文字列の一部を取得する方法として、以下のメソッドの使い方と具体例を説明してください。
  -- slice メソッド --
  start から end（end の手前）までの部分文字列を取得する

特徴
・end を省略すると、文字列の最後まで取得する
・負のインデックスを指定すると、末尾から数える

【index.js】
let str = "JavaScript";
console.log(str.slice(0, 4));
console.log(str.slice(4)); //　 4 番目から最後まで
console.log(str.slice(-6, -1)); //　後ろから 6 番目～後ろから 2 番目

【出力結果】
Java
Script
Scrip

-- substring メソッド --
start から end（end の手前）までの部分文字列を取得する

特徴
・start と end の順番が逆でも動作する（自動的に小さい方が start になる）
・end を省略すると、文字列の最後まで取得
・負のインデックスは扱えない

【index.js】
let str = "JavaScript";
console.log(str.substring(0, 4));
console.log(str.substring(4));
console.log(str.substring(6, 2)); // 2 ～ 6 に自動調整

【出力結果】
Java
Script
vaSc

メモ：substr(start, length)メソッド（非推奨）もある

---

## 課題 6

- 文字列を検索する方法として、以下のメソッドの使い方と具体例を説明してください。

  -- indexOf メソッド --

  文字列を検索し、指定した部分文字列が最初に出現するインデックスを返す

  【index.js】
  let text = "Hello, world!";
  console.log(text.indexOf("o"));
  console.log(text.indexOf("world"));
  console.log(text.indexOf("o", 5)); //　インデックス５以降で"o"を探す
  console.log(text.indexOf("x")); //　見つからない場合

【出力結果】
4
7
8
-1

-- lastIndexOf メソッド --

文字列を検索し、指定した部分文字列が最後に出現するインデックスを返す

【index.js】
let text = "Hello, world!";
console.log(text.lastIndexOf("o"));
console.log(text.lastIndexOf("world"));
console.log(text.lastIndexOf("o", 7));
console.log(text.lastIndexOf("x"));　//　見つからない場合

【出力結果】
8
7
4
-1

- また、文字列に特定の検索文字列が含まれているか調べる方法として、以下のメソッドの使い方と具体例も説明してください。

-- startsWith メソッド --

文字列が指定した文字列で始まるかどうかを判定する

【index.js】
let str = "JavaScript is awesome";

console.log(str.startsWith("Java"));
console.log(str.startsWith("Script"));
console.log(str.startsWith("Script", 4)); //　インデックス 4 から検索

【出力結果】
true
false
true

-- endsWith メソッド --

文字列が指定した文字列で終わるかどうかを判定する

注意点
・大文字小文字は区別される
・指定した length より前の部分は考慮されない

【index.js】
const text = "Hello, world!";
console.log(text.endsWith("world!"));
console.log(text.endsWith("hello"));

console.log(text.endsWith("Hello", 5));
console.log(text.endsWith("world", 11));

【出力結果】
true
false
true
false

-- includes メソッド --

文字列の中に指定した文字列が含まれているかどうかを判定

【index.js】
const fruits = ["apple", "banana", "cherry"];

console.log(fruits.includes("banana"));
console.log(fruits.includes("grape"));
console.log(fruits.includes("apple", 1)); //　 index 1 以降に "apple" はない
console.log(fruits.includes("cherry", -1)); //　最後の要素を検索

【出力結果】
true
false
false
true

---

## 課題 7

文字列の一部を置換または削除する方法として、以下のメソッドの使い方と具体例を説明してください。
replace

-- replace メソッド --

文字列の一部を指定した値に置換する

【index.js】
let str = "Hello World";
let newStr = str.replace("World", "JavaScript");
console.log(newStr);

【出力結果】
Hello JavaScript

-- replaceAll メソッド --

すべての一致する部分を置換する(replace() の拡張版)

【index.js】
let str = "banana banana";
let newStr = str.replaceAll("banana", "apple");
console.log(newStr); // "apple apple"

【出力結果】
apple apple
