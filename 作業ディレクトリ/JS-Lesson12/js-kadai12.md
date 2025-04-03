## 課題 1

- 関数の基本概念、およびその役割と意義について説明してください。

関数（function） は、特定の処理をまとめて定義し、必要に応じて呼び出せるようにする仕組み
関数を使用することで、コードの再利用性を高めたり、可読性を向上させたり、保守性を向上させることができる

- function 宣言の基本構文を示し、具体例を交えてどのような場面で使用されるか解説してください。

-- 基本構文 --
function 関数名(引数 1, 引数 2, ...) {
// 関数の処理
return 戻り値;
}

・function : 関数を宣言するためのキーワード
・関数名 : 関数の名前（識別子）
・引数 : 関数に渡す値（省略可能）
・{ ... } : 関数の処理ブロック
・return : 関数の戻り値を指定（省略可能）

【index.js】
function add(a, b) {
return a + b;
}

console.log(add(5, 10));

【出力結果】
15

---

## 課題 2

- 関数における引数の役割について説明してください。
- また、呼び出し時に引数が不足した場合の動作について考察してください。

関数の引数（arguments） とは、関数を呼び出す際に渡す値やデータのことで、関数の処理に必要な情報を提供する
引数を使うことで、同じ関数でも異なる動作をさせることができる

-- 関数の呼び出し　正しく機能した場合 --
【index.js】
function greet(name) {
console.log("Hello, " + name + "!");
}

greet("Maki");
greet("Yamamoto");

【出力結果】
Hello, Maki!
Hello, Yamamoto!

-- 関数の呼び出し　呼び出し時に引数が不足した場合 --
【index.js】
function greet(name) {
console.log("Hello, " + name + "!");
}

greet();

【出力結果】
Hello, undefined!

メモ：
・name は undefined なので、"Hello, " + undefined + "!" と出力される

- デフォルト引数の仕組みと、その使用例について説明してください。

デフォルト引数とは、関数の引数にデフォルト値（初期値）を設定できる機能
引数が渡されなかった場合 や undefined が渡された場合 に、指定したデフォルト値が使われる

【index.js】
function greet(name = "Guest") {
console.log("Hello, " + name + "!");
}

greet("Maki");
greet();

【出力結果】
Hello, Maki!
Hello, Guest!

メモ：
・null はデフォルト引数の適用対象ではないため、null のまま処理される

- Rest parameters の概念と活用方法について、具体例を用いて解説してください。

Rest Parameters（レストパラメータ）は、関数の引数として可変長のデータを受け取るための構文
記述方法は ...（スプレッド演算子と同じ見た目）を使い、関数の引数として指定する

メモ：
可変長のデータとは、データの個数や長さが事前に決まっていないものを指す
例えば、関数の引数の数や配列の要素数が「決まっていない・変動する」状態を指す

【index.js】-- 可変長の数値引数を受け取って合計を計算する --
function sum(...numbers) {
return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));

【出力結果】
15

メモ：
//　関数 sum 関数を定義
//　「...numbers」 は Rest Parameters 構文。配列として受け取る

- 関数内で利用可能な arguments オブジェクトの役割とその制限について説明してください。

arguments オブジェクトは、関数内で渡されたすべての引数にアクセスするための特殊なオブジェクト
特徴
・.length プロパティを持つ（渡された引数の数を取得可能）
・可変長引数の処理に使える
・関数宣言時に定義していない引数にもアクセス可能
・インデックス (arguments[0], arguments[1] …) でアクセス可能

-- arguments と...args (スプレッド構文)を比較 --

【アロー関数】
arguments：使えない
...args (スプレッド構文)：使える

【配列メソッド】
arguments：直接使えない
...args (スプレッド構文)：直接使える

【strict mode の影響】
arguments：影響あり
...args (スプレッド構文)：影響なし

【可読性】
arguments：やや低い
...args (スプレッド構文)：高い

【推奨度】
arguments：低い
...args (スプレッド構文)：高い

メモ：
・arguments は古い書き方

---

## 課題 3

- 関数の引数に対して分割代入を用いる場合の書き方と、その利点について説明してください。

【index.js】-- 配列を引数に渡し、分割代入を使って特定の要素を取得 --
function sum([a, b]) {
return a + b;
}

console.log(sum([3, 7]));

【出力結果】
10

利点
・user.address.city のようなアクセスを省略できる
・関数の引数が明示的になり、仕様がわかりやすくなる
・通常の引数は順番が重要だが、オブジェクトのプロパティは順番を気にせずに利用可能

- Arrow Function を用いた関数定義の例を示し、従来の関数宣言との違いや文法上の特徴について考察してください。

特徴
・function キーワードを省略できる
・処理が 1 行なら {} と return を省略できる
・パラメータが 1 つなら () を省略可能（例: x => x \* 2）
・構文が簡潔

【index.js】
// 従来の関数宣言
function add(a, b) {
return a + b;
}

// Arrow Function
const addArrow = (a, b) => a + b;

console.log(add(2, 3));
console.log(addArrow(2, 3));

【出力結果】
5
5

---

## 課題 4

- コールバック関数の概念とその活用例について説明してください。

コールバック関数（Callback Function）とは、別の関数の引数として渡され、特定のタイミングで実行される関数のこと
JavaScript では、非同期処理やイベント処理などでよく使われる

【index.js】
const numbers = [1, 2, 3, 4, 5];

// 各要素を 2 倍にする
const doubled = numbers.map(num => num \* 2);

console.log(doubled);

【出力結果】
[2, 4, 6, 8, 10]

メモ：
・map、filter、forEach などの配列メソッドはコールバック関数を使う
・map メソッドに渡したコールバック関数 num => num \* 2 は、配列の各要素に適用される

- オブジェクトのメソッドとして定義される関数の意義について考察してください。
  ・オブジェクトの操作を定義し、データと操作を結びつける
  ・this を活用し、オブジェクト内部のデータを直接操作できる

【index.js】
const person = {
name: "Maki Yamamoto",
greet() {
console.log(`Hello, my name is ${this.name}`);
},
};

person.greet();

【出力結果】
Hello, my name is Maki Yamamoto

メモ：
・greet() メソッドは person オブジェクトに「自己紹介する能力」を与えている
