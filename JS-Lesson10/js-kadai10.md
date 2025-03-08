## 課題 1

- 配列/要素/インデックスの各用語について、その定義と役割を具体例を交えて説明してください。

-- 配列 (Array) --
配列は複数のデータ（値）を一つの変数にまとめて保持するためのデータ構造
配列内の各データは、連続したメモリ領域に格納されることが多く、すべて同じデータ型である必要がある場合が一般的

-- 要素(Element) --
要素は配列の中に格納されている個々のデータを指す
それぞれの要素は独自の値を持ち、配列内での情報の単位となる

-- インデックス (Index) --
インデックスは、配列内で各要素が格納されている位置を示す番号
ほとんどのプログラミング言語では、インデックスは 0 から始まる
メモ：Lua、MATLAB、R、Fortran はインデックス番号１から始まるらしい！

【index.js】
numbers = [10, 20, 30, 40]

要素　 → 10,20,30,40
インデックス　 → 0,1,2,3

- 配列リテラルを利用し、密な配列と疎な配列のそれぞれの例を作成するコード例を示してください。

  -- 密な配列 --
  すべてのインデックスに要素が格納されている配列のこと

  【index.js】
  let numbers = [1, 2, 3, 4, 5];

  -- 疎な配列 --
  特定のインデックスに要素が設定されていない部分（ホール）が存在する配列のこと

  【index.js】
  let numbers = [1, , 3, , 5];

- 2 次元配列を用いて、array[0]や array[0][0]のようなインデックスアクセスの方法を具体例とともに解説してください。
  【index.js】
  const fruits = [
  ["apple", "banana", "cherry"],
  ["orange", "kiwi", "grape"],
  ["strawberry", "mango", "pineapple"]
  ];

console.log(fruits[0]); // １つ目の配列を取得["apple", "banana", "cherry"]
console.log(fruits[0][1]); // banana

-- array[0]の解説 --
2 次元配列の最初の配列を返す

【index.js】
console.log(fruits[2]);　//３つ目の配列を取得
console.log(fruits[3]);　//存在しない配列を取得

【出力結果】
[ 'strawberry', 'mango', 'pineapple' ]
undefined

-- array[0][0]の解説 --
【index.js】
console.log(fruits[0][1]);　//１つ目の配列の２つ目の要素を取得
console.log(fruits[1][2]);　//２つ目の配列の３つ目の要素を取得
console.log(fruits[5][5]);　//５つ目の配列の５つ目の要素を取得（どちらも存在しない）

【出力結果】
banana
grape
TypeError: Cannot read properties of undefined

メモ
1 次元配列
→ １列の配列

多次元配列
→ ２列以上ある配列

- 配列の length プロパティを利用して、配列の最後の要素にアクセスする方法を具体的なコード例とともに説明してください。

配列の最後の要素を取得 ＝ 配列の長さ - 1

【index.js】
// 配列を定義
let fruits = ["apple", "banana", "cherry"];

// 配列の最後の要素にアクセス
let lastFruit = fruits[fruits.length - 1];

// 結果をコンソールに表示
console.log(lastFruit);

【出力結果】
cherry

- 存在しないインデックスにアクセスした場合の結果について考察してください。

【index.js】
const arr = [1, 2, 3];
console.log(arr[5]);　//存在しないインデックス番号

【出力結果】
undefined

-- 注意点 --
「undefined」が必ずしもエラーではないため、意図せず存在しないプロパティにアクセスしているケースも見逃しやすい
必要に応じて、存在確認を行うと良い

arr[5] が undefined ではない場合にコードブロック内の処理を実行する
if (arr[5] !== undefined) { ... }

---

## 課題 2

- 分割代入を用いて、配列内の特定のインデックスの値を変数に代入する方法を具体例を交えて説明してください。

【index.js】
const array = [1, 2, 3, 4, 5];
const [first, , third] = array;
console.log(first);
console.log(third);

【出力結果】
1
3

補足：配列の分割代入は「位置」によって値を取り出すので、指定したインデックス番号の位置に対応する値が変数に代入される

- Array.isArray を使用して、与えられたオブジェクトが配列かどうかを判定する方法をコード例とともに解説してください。

【index.js】
// 配列の場合
const arr = [1, 2, 3];
console.log(Array.isArray(arr));

// オブジェクトの場合
const obj = { a: 1, b: 2 };
console.log(Array.isArray(obj));

// 文字列の場合
const str = "Hello";
console.log(Array.isArray(str));

【出力結果】
true
false
false

- Array.prototype.at メソッドを利用した要素アクセスの具体例を示し、その動作について説明してください。

Array.prototype.at メソッドは、配列のインデックスを指定して要素にアクセスする
負のインデックスにも対応しており、配列を後ろから数えることもできる

【index.js】
let arr = [10, 20, 30, 40];
console.log(arr.at(0));
console.log(arr.at(-1));
console.log(arr.at(777));　//存在しないインデックス番号

【出力結果】
10
40
undefined

- indexOf/findIndex/findLastIndex を用いて、配列から特定の要素を検索する方法を、各メソッドの特徴と具体例を交えて解説してください。

-- indexOf --

特徴
・配列内の指定した値と完全一致する最初の要素のインデックスを返す
・比較は厳密な等価（===）で行われる
・要素が存在しない場合は -1 を返す

【index.js】
const fruits = ['apple', 'banana', 'orange', 'banana'];
const index = fruits.indexOf('banana'); // 最初に見つかった 'banana' のインデックス（1）
console.log(index);

const notFound = fruits.indexOf('grape'); // 存在しないため -1
console.log(notFound);

【出力結果】
1
-1

-- findIndex --

特徴
・コールバック関数を受け取り、その関数が true を返す最初の要素のインデックスを返す
・条件に合致する要素がなければ -1 を返す

【index.js】
//　オブジェクトを定義
const users = [
{ id: 1, name: "Seiha" },
{ id: 2, name: "Saki" },
{ id: 3, name: "Miina" },
{ id: 4, name: "Maki" },
];

//　 findIndex を使った検索（条件：name が ‘Saki’）
const index = users.findIndex((user) => user.name === "Saki");
console.log(index);

//　 findIndex を使った検索（条件：id が 5）
const notFound = users.findIndex((user) => user.id === 5);
console.log(notFound);

【出力結果】
1
-1

-- findLastIndex --

特徴
・後ろから検索して最初に条件を満たす要素のインデックスを返す
・条件に合致する要素がなければ -1 を返す
・ES2022（ECMAScript 2022）以降で利用可能

【index.js】
const users = [
{ id: 1, name: "Seiha" },
{ id: 2, name: "Saki" },
{ id: 3, name: "Miina" },
{ id: 4, name: "Maki" },
{ id: 5, name: "Maki" },
];

//　 findLastIndex を使った検索（条件：name が ‘Maki’）
const index = users.findLastIndex((user) => user.name === "Maki");
console.log(index);

//　 findLastIndex を使った検索（条件：id が 6）
const notFound = users.findLastIndex((user) => user.id === 6);
console.log(notFound);

【出力結果】
4
-1

- find/findLast/findLastIndex を用いて、条件に合致する要素の取得する方法を、各メソッドの特徴と具体例を交えて解説してください。

-- find --
・配列の先頭から順番に各要素に対してコールバック関数を実行し、条件に一致する最初の要素を返す
→ 条件に一致する要素が見つかった場合、その要素を返し、見つからなければ undefined を返す

【index.js】
const numbers = [1, 3, 7, 8, 10];
// 5 より大きい最初の要素を見つける
const result = numbers.find(num => num > 5);
console.log(result); // 出力: 7

-- findLast --
・配列の末尾から逆順に各要素に対してコールバック関数を実行し、条件に一致する最初の要素を返す
→ 　条件に一致する要素が見つかった場合、その要素を返し、見つからなければ undefined を返す

【index.js】
const numbers = [1, 3, 7, 8, 10];
// 5 より大きい最後の要素を見つける
const result = numbers.findLast(num => num > 5);
console.log(result); // 出力: 10

-- findLastIndex --
・配列の末尾から逆順に各要素に対してコールバック関数を実行し、条件に一致する最初の要素のインデックスを返す
→ 条件に一致する要素が見つかった場合、その要素のインデックスを返し、見つからなければ -1 を返す

【index.js】
const numbers = [1, 3, 7, 8, 10];
// 5 より大きい最後の要素のインデックスを取得する
const index = numbers.findLastIndex(num => num > 5);
console.log(index); // 出力: 4

- slice メソッドを用いて配列の一部を抽出する方法を、コード例とともに解説してください。
  slice メソッド
  配列から指定した範囲の要素を抽出して新しい配列を作成する。元の配列は変更されない。

【index.js】
// 元の配列
const array = [10, 20, 30, 40, 50];

// 配列の index 1 から index 3（index 4 は含まれない）までを抽出
const slicedArray = array.slice(1, 4);

console.log(slicedArray); // 出力: [20, 30, 40]

【index2.js】
// 負の値を使用して、最後の 2 つの要素を抽出
const array = [10, 20, 30, 40, 50];
const lastTwoElements = array.slice(-2);
console.log(lastTwoElements); // 結果: [40, 50]

- includes や some を使用して、特定の要素や条件が配列内に存在するかどうかを判定する方法を、具体的なコード例とともに説明してください。

includes メソッド
配列内に指定した値が含まれているかどうかをチェックし、存在する場合は true、存在しなければ false を返す

【index.js】
// numbers 配列に 3 が含まれているかどうかを判定
const numbers = [1, 2, 3, 4, 5];
const exists = numbers.includes(3);
console.log(exists); // 出力: true

some メソッド
配列内の要素のいずれかが指定した条件を満たすかどうかをチェックする。
コールバック関数で条件を指定し、条件に合致する要素があれば true を、なければ false を返す

【index2.js】
//　 numbers 配列内に偶数が存在するかどうかを確認
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); // 出力: true

---

## 課題 3

- push/pop/shift/unshift の各メソッドを使用して、配列への要素の追加や削除を行う方法を具体例を交えて説明してください。

-- push メソッド --
配列の末尾に要素を追加する

【index.js】
let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits);

【出力結果】
['apple', 'banana', 'orange']

-- pop メソッド --
配列の末尾から要素を削除する

【index.js】
let fruits = ['apple', 'banana', 'orange'];
let removed = fruits.pop();
console.log(removed);
console.log(fruits);

【出力結果】
orange
[ 'apple', 'banana' ]

-- shift メソッド --
配列の先頭から要素を削除する

【index.js】
let numbers = [1, 2, 3, 4];
let firstElement = numbers.shift();
console.log(firstElement);
console.log(numbers);

【出力結果】
1
[ 2, 3, 4 ]

-- unshift メソッド --
配列の先頭に要素を追加する

【index.js】
let numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers);

【出力結果】
[ 1, 2, 3, 4 ]

- 配列同士の結合において、concat メソッドとスプレッド構文（...）を用いた展開方法を比較し、それぞれの特徴と使用方法について説明してください。

-- concat メソッド --
元の配列を変更せずに、指定した配列や値を結合した新しい配列を返す

【index.js】
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = arr1.concat(arr2);
console.log(result);

【出力結果】
[ 1, 2, 3, 4, 5, 6 ]

-- スプレッド構文（…） --
スプレッド構文は配列リテラル内で使用され、配列の要素を展開して別の配列に展開するためのシンタックスシュガー
メモ：
シンタックスシュガーとは、プログラミング言語において、同じ処理をより簡潔で読みやすい形式で記述できるようにするための構文のこと
機能自体に新たな能力を追加するのではなく、コードをより直感的かつ分かりやすく記述するための「糖衣構文」としての役割を果たす

【index.js】
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = [...arr1, ...arr2];
console.log(result);

【出力結果】
[ 1, 2, 3, 4, 5, 6 ]

注意点メモ
・1 階層のみ展開するため、配列の中にさらに配列がある場合は展開されず、ネストしたままの状態になる

- 配列から要素を削除する方法として、splice メソッド、length プロパティへの再代入、空の配列を代入する手法の違いを実例を交えて説明してください。

-- splice メソッド --
指定した位置から指定数の要素を「破壊的に」削除する
この方法は、既存の配列オブジェクトを変更するため、他の変数が同じ配列を参照している場合、その参照先も更新される点に注意する

【index.js】
let arr = [1, 2, 3, 4, 5];
// インデックス 2 から 2 個の要素を削除（３と４を削除）
let removed = arr.splice(2, 2);
console.log(arr);
console.log(removed);

【出力結果】
[ 1, 2, 5 ]
[ 3, 4 ]

-- length プロパティへの再代入 --

【index.js】
let arr = [1, 2, 3, 4, 5];
// 配列に残したい要素の数を２に設定（3,4,5 を削除）
arr.length = 2;
console.log(arr);

【出力結果】
[ 1, 2 ]

-- 空の配列を代入 --

【index.js】
let arr = [1, 2, 3, 4, 5];
let anotherReference = arr; // 同じ配列を参照
// arr に新しい空の配列を代入
arr = [];
console.log(arr);
console.log(anotherReference);

【出力結果】
[]
[ 1, 2, 3, 4, 5 ]

メモ：
【参照の仕組み】
JavaScript の変数はオブジェクト自体を保持するのではなく、そのオブジェクトが存在するメモリアドレス（参照）を保持する
つまり、arr も anotherReference も、同じ配列オブジェクト [1, 2, 3, 4, 5] を指している状態になる

- flat メソッドを用いてネストされた配列を平坦化する具体的なコード例を作成し、その動作や用途について解説してください。

-- flat メソッド --
指定された深さまでネストされた配列の要素を再帰的に結合し、新しい平坦な配列を返す

【index.js】
// ネストされた配列の例
const nestedArray = [1, 2, [3, 4, [5, 6]]];

// デフォルトでは深さ 1 で平坦化される
const flatArray1 = nestedArray.flat();
console.log(flatArray1);

// 深さを指定して平坦化する例（ここでは深さ 2）
const flatArray2 = nestedArray.flat(2);
console.log(flatArray2);

【出力結果】
[ 1, 2, 3, 4, [ 5, 6 ] ]
[ 1, 2, 3, 4, 5, 6 ]

メモ：
平坦化とは、複数の階層やネスト（入れ子構造）になっているデータ構造（例えば配列）を、単一の階層、すなわち「平らな」状態に変換することを指す

【index.js】
//　ネストされた配列
[1, 2, [3, 4, [5, 6]]]

【index.js】
//　平坦化して階層構造が取り除かれたもの
[1, 2, 3, 4, 5, 6]

---

## 課題 4

- forEach の基本的な使用方法や特徴について説明してください。

配列の全要素に対して同じ処理を行いたい場合に非常に便利なメソッド。
コールバック関数を利用して、各要素に対する処理を簡潔に記述できるため、コードの可読性を高めることができる

特徴
・ループ処理
・戻り値がない

【index.js】
const employees = [
{ id: 1, name: "田中太郎" },
{ id: 2, name: "佐藤花子" },
{ id: 3, name: "鈴木一郎" },
];

employees.forEach((employee) => {
console.log(employee.name);
});

【出力結果】
田中太郎
佐藤花子
鈴木一郎

メモ：
【index.js】
// 従来の関数表現
const add = function(a, b) {
return a + b;
};

【index.js】
// アロー関数表現
// function 書かなくても大丈夫になる
const add = (a, b) => a + b;

- map を使用した配列の変換処理について、その動作と具体例を示しながら説明してください。

配列の各要素に対して指定した処理（関数）を適用し、その結果から新しい配列を生成するためのメソッド
元の配列は変更されず、変換後の新しい配列が返される

【index.js】
const numbers = [1, 2, 3, 4, 5];

// 各要素を 2 倍に変換する
const doubled = numbers.map(function (num) {
return num \* 2;
});

// アロー関数を使用した書き方
const doubled2 = numbers.map((num) => num \* 2);

console.log(numbers);
console.log(doubled);
console.log(doubled2);

【出力結果】
[ 1, 2, 3, 4, 5 ]
[ 2, 4, 6, 8, 10 ]
[ 2, 4, 6, 8, 10 ]

- filter を使用して条件に合致する要素を抽出する方法を具体例とともに説明してください。

【index.js】
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 条件: 数字が偶数であるか (偶数なら true を返す)
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers);

【出力結果】
[ 2, 4, 6, 8, 10 ]

- reduce を用いた配列の集約処理の仕組みと、実際の使用例について解説してください。

配列の中の全てのデータにアクセスして１つの値に変換するためのメソッド
配列内の各要素に対して、指定したコールバック関数を順次実行し、前回の結果（累積値）と
現在の要素を組み合わせて新たな累積値を生成する
最終的に、全ての要素を処理した結果を１つの値にして返す

メモ：１つの値に変換する処理はコールバック関数で指定する
accumulator（累積値）：これまでの処理で得られた結果
currentValue（現在の要素）：現在処理している配列の要素
currentIndex（現在のインデックス）：現在の要素のインデックス（初期値が設定された場合は 0 から、それ以外の場合は 1 から始まる）
array（元の配列）：処理中の配列そのもの

【index.js】
const data = [1, 2, 3, 4];
const result = data.reduce((sum, num) => {
return sum + num;
}, 0);

console.log(result);

【出力結果】
10

メモ：
・配列に使用する。オブジェクトには使用できない
・戻り値は一つの値を返す

- sort メソッドの動作原理と、ソート処理の具体例を示しながら説明してください。
  【index.js】
  // 文字列の場合、比較関数を指定しなくても基本的には文字列の辞書順（UTF-16 コード順）でソートされる
  const fruits = ["banana", "apple", "cherry"];
  fruits.sort();
  console.log(fruits);

【出力結果】
[ 'apple', 'banana', 'cherry' ]

- groupBy の概念と、配列操作における活用方法について説明してください。

配列の各要素を特定の条件やキーに基づいてグループ分けする

【index.js】
/_
TypeError: fruits.groupBy is not a function の対処
_/

// polyfill を使って groupBy を有効にする方法
if (!Array.prototype.groupBy) {
Array.prototype.groupBy = function (fn) {
return this.reduce((acc, item) => {
const key = fn(item);
(acc[key] = acc[key] || []).push(item);
return acc;
}, {});
};
}

// これで元のコードが動作するようになる
const fruits = [
{ name: "りんご", type: "果物", color: "赤" },
{ name: "バナナ", type: "果物", color: "黄" },
{ name: "トマト", type: "野菜", color: "赤" },
{ name: "にんじん", type: "野菜", color: "オレンジ" },
{ name: "いちご", type: "果物", color: "赤" },
];

const groupedByType = fruits.groupBy((item) => item.type);
console.log(groupedByType);

【出力結果】
{
'果物': [
{ name: 'りんご', type: '果物', color: '赤' },
{ name: 'バナナ', type: '果物', color: '黄' },
{ name: 'いちご', type: '果物', color: '赤' }
],
'野菜': [
{ name: 'トマト', type: '野菜', color: '赤' },
{ name: 'にんじん', type: '野菜', color: 'オレンジ' }
]
}

メモ：Array.prototype.groupBy は、まだすべての JavaScript 環境でサポートされているわけではない

- メソッドチェーンの概念と、配列操作における利点について具体例を交えて説明してください。

オブジェクトのメソッドを呼び出したあと、戻り値としてオブジェクト自体を返すことで、複数の処理を連続して記述できる仕組み

【index.js】メソッドチェーンを使った配列操作の例
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
.filter(n => n % 2 === 0) // 偶数だけを抽出
.map(n => n \* 10) // 各要素を 10 倍する
.reduce((sum, n) => sum + n); // 合計値を算出する

console.log(result); // 出力：120

【index2.js】メソッドチェーンを使わない配列操作の例
const numbers = [1, 2, 3, 4, 5, 6];

// 偶数のみ抽出
const evens = numbers.filter(n => n % 2 === 0);

// 各要素を 10 倍する
const multiplesOfTen = evens.map(n => n \* 10);

// 合計値を算出
const result = multiplesOfTen.reduce((sum, n) => sum + n);

console.log(result); // 出力：120

【配列操作での利点まとめ】
・変数が減り、コードが短く簡潔になる
・一連のデータ処理が直感的に理解しやすくなる
・処理を簡単に追加、削除、変更できる

- 配列操作における破壊的なメソッドと非破壊的なメソッドの違いを、具体例を交えて比較し、各手法の適切な使用シーンについて考察してください。

-- 破壊的なメソッドと非破壊的なメソッドの違い --
【破壊的なメソッド】
・元の配列そのものを変更する
・操作後、元データの状態が失われる

代表例：
・push, pop, shift, unshift
・splice
・reverse, sort

主な使用シーン
・元のデータを維持する必要がない一時的または内部処理の場面
・配列を直接変更してメモリ効率を優先したい場面

【index.js】
// 元の配列自体が変更されている例
const fruits = ["apple", "banana", "orange"];

fruits.push("kiwi"); // 配列の末尾に追加
console.log(fruits); // ["apple", "banana", "orange", "kiwi"]

fruits.splice(1, 1); // インデックス 1 から 1 つ削除（"banana"削除）
console.log(fruits); // ["apple", "orange", "kiwi"]

【非破壊的なメソッド】
・元の配列は変更せず、新しい配列を生成して返す
・元データの不変性（immutability）が保たれる

代表例：
• slice
• concat
• map, filter, reduce
• スプレッド演算子 ([...])

主な使用シーン
・元データを維持し、データの再利用性やイミュータブル（不変）性を重視する場面
・React や Redux など、状態管理が求められるフレームワークの場面（らしい）

【index.js】
// 元の配列が変更されていない例
const fruits = ["apple", "banana", "orange"];

const newFruits = fruits.concat("kiwi"); // 新しい配列を生成
console.log(newFruits); // ["apple", "banana", "orange", "kiwi"]
console.log(fruits); // ["apple", "banana", "orange"] （元はそのまま）

const filteredFruits = fruits.filter(fruit => fruit !== "banana");
console.log(filteredFruits); // ["apple", "orange"]
console.log(fruits); // ["apple", "banana", "orange"] （元はそのまま）
