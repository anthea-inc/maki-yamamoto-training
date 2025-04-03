## 課題 1

- オブジェクトリテラルにおいて、プロパティ名をクォートなしで記述できる場合と、クォートが必要となる場合について、具体的なコード例を示しながら、理由を説明してください。

JavaScript のオブジェクトリテラルでは、プロパティ名が「有効な識別子（identifier）」であればクォートなしで記述できる。一方、以下のような場合はクォートが必要となる。

1.スペースやハイフンなど、識別子として不正な文字が含まれる場合
→ 例: "first name", "foo-bar"

2.数字で始まる場合
→ 数字のみや数字で始まる場合も基本的には文字列として扱われるが、数字のみの場合はクォートなしで記述することもできる。ただし、混乱を避けるため明示的にクォートすることも可能。

【クォートなしで記述できる例】
let person = {
name: "Maki",
age: 24,
isStudent: false
};

name、age、isStudent はすべて有効な JavaScript の識別子である。
識別子は英字、アンダースコア（\_）、ドル記号（$）から始まり、その後に数字を含むことができる。そのため、クォートは不要

【クォートが必要な例】
let person = {
"first name": "Bob", // スペースを含むためクォートが必要
"last-name": "Smith", // ハイフンを含むためクォートが必要
"123abc": "example", // 数字で始まるためクォートが必要
"if": "reserved word" // 予約語もクォート可能（ES5 以降では予約語もクォートなしで使えるが、混乱を避けるためクォートする場合もある）
};

メモ：ES5（ECMAScript 5）は、JavaScript の標準仕様の一つで、正式には「ECMAScript 5th Edition」と呼ばれる。2009 年に策定され、当時の主流のブラウザで広くサポートされるようになった。

- オブジェクトリテラル内でブラケット記法（[]）を利用してプロパティ名を動的に設定する方法について、具体的なコード例を示しながら、そのメリットや利用シーンを解説してください。

【まずは基本を書きたい】
-- ドット記法 --
.（ドット）を使ってプロパティにアクセスする記法
オブジェクトとプロパティを.（ドット）で繋げることで、値の取得やメソッド実行ができる

【index.js】
const person = {};
person.name = "鈴木ゆゆうた";
person.age = 36;

console.log(person);
// 出力: { name: "鈴木ゆゆうた", age: 36 }

-- ブラケット記法 --
[ ]（ブラケット）を使ってプロパティにアクセスする方法

【index.js】
const person = {};
person["name"] = "Takahiro Karasawa";
person["age"] = 47;

console.log(person);
// 出力: { name: "Takahiro Karasawa", age: 47 }

-- ブラケット記法（[]）を利用してプロパティ名を動的に設定 --
【index.js】
const keyName = "name";
const keyAge = "age";
const person = {
[keyName]: "Takahiro Karasawa",
[keyAge]: 47
};

console.log(person);
// 出力: { name: "Takahiro Karasawa", age: 47 }

-- メリット --

1. コードの柔軟性と再利用性が向上
   → API レスポンスやユーザー入力など、動的に変化するデータに対して柔軟に対応できる

-- 利用シーン --

1. API レスポンスのデータマッピング
   → 外部サービスやバックエンドからのレスポンスで、プロパティ名が動的に決定される場合に利用できる

2. ユーザー入力に基づくオブジェクト生成
   → ユーザーが入力した値や選択肢をキーとして利用し、動的にオブジェクトを作成する場合

- 変数名とプロパティ名が一致する場合に利用できる省略記法について、具体的なコード例を交えて説明してください。

JavaScript（ES6 以降）では、オブジェクトを作成する際にプロパティ名と同じ名前の変数が存在する場合、省略記法（プロパティ短縮記法）を利用できる。これにより、コードが簡潔になり、可読性が向上した。

-- 省略記法 --
【index.js】
let name = 'Maki';
let age = 24;
let person = {name, age};
console.log(person);

【出力結果】
{ name: 'Maki', age: 24 }

-- 通常の記述 --
【index.js】
const name = 'Maki
';
const age = 24;

const person = {
name: name,
age: age
};
console.log(person);

【出力結果】
{ name: 'Maki', age: 24 }

---

## 課題 2

- オブジェクトのプロパティにアクセスする際、ドット記法とブラケット記法を使った場合の具体的なコード例を示し、それぞれの使い所や注意点を説明してください。

-- ドット記法 --

使う場面：
プロパティ名が英数字やアンダースコアのみで構成される有効な識別子の場合に使用する

注意点：
プロパティ名にスペースやハイフン、数字で始まる場合、または予約語の場合には使用できない。その際はブラケット記法を使う必要がある

【index.js】
const person = {
name: "aka",
age: 0
};

console.log(person.name);
console.log(person.age);

【出力結果】
aka
0

-- ブラケット記法 --

使う場面：
プロパティ名にハイフンやスペースなど、ドット記法では扱えない文字が含まれている場合。
また、動的にプロパティ名を指定する場合（変数を利用する場合）に適している。

注意点：
ブラケット内に指定する文字列は正確にプロパティ名と一致する必要がある。
また、コードがやや冗長になりやすい点も考慮する必要がある。

【index.js】
const person = {
"first-name": "aka",
age: 0
};

console.log(person["first-name"]);
console.log(person["age"]);

【出力結果】
aka
0

- Optional chaining 演算子 (?。)を利用した安全なプロパティアクセス方法について、実例を交えながらその動作やメリットを解説してください。

Optional chaining 演算子（?.）は、オブジェクトのプロパティやメソッドにアクセスする際に、その参照が null や undefined であった場合にエラーを発生させずに安全にアクセスできる機能のこと

-- 通常の記述 --

user オブジェクトに account プロパティが存在しないため、user.account.balance へアクセスしようとするとエラーが発生する

【index.js】
const user = {
profile: {
name: "wawawa"
}
};

console.log(user.profile.name);
console.log(user.account.balance);

【出力結果】
wawawa
TypeError: Cannot read properties of undefined

-- Optional chaining を利用した安全なアクセス --

user?.account の部分で account が存在しないため undefined が返され、続く .balance へのアクセスも安全にスキップされる

【index.js】
const user = {
profile: {
name: "wawawa"
}
};

console.log(user?.profile?.name);
console.log(user?.account?.balance);

【出力結果】
wawawa
undefined

- オブジェクトの分割代入（Destructuring Assignment）の基本的な使い方と、ネストされたオブジェクトから必要な値を取り出す方法について、具体的なコード例を示して説明してください。

オブジェクトの分割代入は、JavaScript（ES6 以降）で導入された便利な機能で、オブジェクトから必要なプロパティを簡単に取り出し、個別の変数に代入する方法

-- オブジェクトの分割代入基本構文 --

【index.js】
const person = {
name: "Maki",
age: 24,
city: "Yokohama",
};
const { name, age } = person;
console.log(name);
console.log(age);

【出力結果】
Maki
24

-- ネストされたオブジェクトからの値の取り出し方法 --

【index.js】
const data = {
nested: {
value: 777
}
};

// ネストされたオブジェクトから value を直接取り出す
const { nested: { value } } = data;

console.log(value);

【出力結果】
777

ソースコード解説

-- オブジェクトの定義 --
・「data」という名前のオブジェクトを定義している
・このオブジェクトは nested というプロパティを持っており、その値はさらにオブジェクト { value: 777 } になっている

→ 「data」オブジェクトの中に「nested」オブジェクトがあり、その中に「value」というプロパティが定義されている

-- 分割代入（Destructuring Assignment） --
const { nested: { value } } = data;
この行では、オブジェクトの分割代入を利用して、「data」オブジェクトから直接「value」という変数を取り出している

・「data」の中にある「nested」プロパティにアクセスし、その中から「value」プロパティの値（777）を取り出して、同名の変数「value」に代入している
・この構文では、中間の「nested」オブジェクト自体は変数として作成されず、「value」のみが抽出される

-- 出力 --
console.log(value);
・console.log(value); で、取り出された「value」変数の値（777）がコンソールに出力される

ポイントまとめ
・オブジェクトの中にさらにオブジェクトがある場合、分割代入を使うことで、ネストされたプロパティに直接アクセスして値を取り出すことができる

・この方法を使うと、中間のオブジェクトを別途変数に格納する必要がなく、シンプルで読みやすいコードを書くことができる

---

## 課題 3

- const で定義されたオブジェクトが変更可能な理由を踏まえ、プロパティの追加方法を直接追加する方法と Computed Property Names を利用する方法の両面から、具体例を交えて説明してください.

const キーワードで定義されたオブジェクトは、変数自体を別のオブジェクトに再代入できないだけで、オブジェクトのプロパティの追加、更新、削除は可能

-- 直接プロパティを追加する方法 --
【index.js】
const obj = {};

// ドット記法を利用した追加
obj.name = "ぽよまる";

// ブラケット記法を利用した追加
obj["age"] = 24;

console.log(obj); // { name: 'ぽよまる', age: 24 }

-- Computed Property Names を利用する方法 --

Computed Property Names（計算されたプロパティ名）を使うと、プロパティ名を変数や式から動的に生成してオブジェクトにプロパティを追加することができる。
オブジェクトリテラル内でも使える。

【index.js】
let propertyName = "UserName";

const profile = {
age: 21,
[propertyName]: "kobushi",
};

console.log(profile.UserName);　//kobushi

- オブジェクトからプロパティを削除する際の delete 演算子の使い方、削除後の挙動および注意点について、具体例を交えて考察してください。

delete 演算子は、オブジェクトからプロパティを削除する際に使用する

【index.js】
let color = { a: "red🟥", b: "blue🟦", c: "yellow🟨" };
delete color.a; // color から a を削除
console.log(color);

【出力結果】
{ b: 'blue🟦', c: 'yellow🟨' }

-- 削除後の挙動 --
delete 演算子は、指定したオブジェクトのプロパティを削除し、削除に成功した場合は「true」を返す。
プロパティが存在しなかった場合も「true」を返す。

削除されたプロパティは「undefined」として扱われ、存在確認でも見つからなくなる。
ただし、配列の場合は要素の穴（hole）が残る。

-- 注意点 --
・グローバル変数（var 宣言）は削除できない
・厳格モードでは削除できない場合にエラーが発生する
・configurable: false なプロパティは削除できない

メモ：
configurable: false なプロパティとは、プロパティの configurable 属性が「false」に設定されたプロパティのこと。この属性が「false」だと、そのプロパティを削除したり再定義したりすることができなくなる。

- Object.freeze メソッドを利用してオブジェクトのプロパティの追加・変更・削除を防止する方法と、その使用上の注意点について、実際のコード例を用いて解説してください.

Object.freeze は、オブジェクトを「凍結」して、プロパティの追加、変更、削除を防ぐメソッド。
このメソッドは、オブジェクトの直接のプロパティにのみ適用され、ネストされているオブジェクトには影響しない。
深い階層まで凍結したい場合は、再帰的に Object.freeze を適用する必要がある。

【index.js】
const user = {
name: "DJ KOO",
age: 63,
};

Object.freeze(user);

// プロパティの変更は無視される（厳格モードではエラーになる）
user.age = 27;
console.log(user.age);

// プロパティの追加も無視される
user.email = "alice@example.com";
console.log(user.email);

// プロパティの削除も無視される
delete user.name;
console.log(user.name);

【出力結果】
63
undefined
DJ KOO

-- オブジェクトのプロパティの追加・変更・削除を防止する方法 --
上記のソースコードでは、user オブジェクトが凍結（freeze）されているため、後からプロパティを変更・追加・削除しても影響はないことがわかる

-- 使用上の注意点 --
・Object.freeze はオブジェクトの第一階層のみを凍結する
・凍結後に再凍結しても結果は変わらない
・厳格モードとの挙動の違い
厳格モード　 → 凍結されたオブジェクトのプロパティ変更、追加、削除を試みた場合にエラーが発生
非厳格モード　 → 操作が無視される

- in 演算子/Object.hasOwn/Object.prototype.hasOwnProperty を用いたプロパティの存在確認方法について、それぞれの特徴や使い分けを、具体例とともに説明してください.

-- in 演算子 --
特徴：
・オブジェクトの自分自身または 継承されたプロパティを判定できる
・undefined の値を持つプロパティも存在すると判定される

使う場面：
・オブジェクト自身 または プロトタイプチェーン上にプロパティが存在するかを確認する場合
・どこかに存在すればよい場合（プロトタイプ継承を含めた検索）

メモ：
プロトタイプチェーンとは、オブジェクトが他のオブジェクトを継承する仕組みのこと
オブジェクトはプロパティやメソッドを持っているが、自身に存在しないプロパティやメソッドを プロトタイプから探すことで、継承を実現する

【index.js】
const obj = { a: 1, b: undefined };
console.log('a' in obj); // true
console.log('b' in obj); // true
console.log('c' in obj); // false (存在しないプロパティ)

-- Object.hasOwn --
特徴：
・オブジェクト自身のプロパティのみ を判定する（継承プロパティは無視）
・Object.hasOwn(obj, prop) の形で使用する
・null や undefined に対しても安全に使える

使う場面：
・オブジェクト自身のプロパティのみ をチェックしたい場合
・Object.hasOwnProperty.call(obj, key) を書くより簡潔な方法を使いたい場合
・null や undefined に対して安全に使いたい場合

【index.js】
const obj = { a: 1, b: undefined };

console.log(Object.hasOwn(obj, "a")); // true
console.log(Object.hasOwn(obj, "b")); // true
console.log(Object.hasOwn(obj, "c")); // false (存在しないプロパティ)

-- Object.prototype.hasOwnProperty --
特徴：
・オブジェクト自身のプロパティのみを判定する（継承プロパティは無視）
・obj.hasOwnProperty(prop) の形で使用する
・Object.prototype を上書きされる可能性があるため、Object.hasOwnProperty.call(obj, key) の形で使うのが安全

使う場面：
・オブジェクト自身のプロパティのみをチェックしたい場合
・Object.hasOwn(obj, key) を使えない環境

【index.js】
const obj = { a: 1, b: undefined };

console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("b")); // true
console.log(obj.hasOwnProperty("c")); // false (存在しないプロパティ)

メモ：知識課題３の最後難しかった

---

## 課題 4

- Object.keys/Object.values/Object.entries を使用して、オブジェクトのキー/値/キーと値の組み合わせを取得する方法を、具体的なコード例を交えて説明してください。

【index.js】
const fruits = {
apple: 100, //apple がキー　 100 が value
orange: 200,
strawberry: 150,
};

console.log(Object.keys(fruits)); //キーのみ取得
console.log(Object.values(fruits));　//値のみ取得
console.log(Object.entries(fruits));　//キーと値を取得

【出力結果】
[ 'apple', 'orange', 'strawberry' ]
[ 100, 200, 150 ]
[ [ 'apple', 100 ], [ 'orange', 200 ], [ 'strawberry', 150 ] ]

- オブジェクトのプロパティ（キー）の反復処理に使用される for...in 文の基本構文について、具体例を用いて説明してください。

for...in 文とは、オブジェクトのプロパティ（キー）を反復処理するためのループ構文
メモ：変数「key」には「user」オブジェクトの各プロパティの名前（name、age、country）が順番に代入される（下記のソースコードを参照）

【index.js】
const user = {
name: "Maki",
age: 24,
country: "Japan",
};

for (let key in user) {
console.log(`${key}: ${user[key]}`); //テンプレートリテラル
}

【出力結果】
name: Maki
age: 24
country: Japan

- Object.assign を利用して複数のオブジェクトをマージしたり、オブジェクトを複製する方法について、具体的なコード例を交えて説明してください。

Object.assign は、複数のオブジェクトをひとつのターゲットオブジェクトにマージ（結合）するためや、オブジェクトの複製（コピー）を作成するために利用できるメソッド

-- オブジェクトの結合 --
【index.js】
const course = {
name: " Javascript",
};

const grade = {
score: 99,
};

const finalResult = Object.assign(course, grade);
console.log(finalResult);

【出力結果】
{ name: ' Javascript', score: 99 }

- スプレッド構文を利用して、オブジェクトのプロパティを展開・マージする例を具体的なコード例を交えて説明してください.

スプレッド構文は、オブジェクトの各プロパティを展開して、新しいオブジェクトを作成したり、複数のオブジェクトをマージしたりする

-- オブジェクトのプロパティを展開とマージ --

【index.js】
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 }; //展開

console.log(mergedObj);　//マージ

【出力結果】
{ a: 1, b: 2, c: 3, d: 4 }
