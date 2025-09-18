# 課題 1

- if 文、else if 文、else 文それぞれの基本構文と役割について説明してください。

役割：「if 文」「else if 文」「else 文」は条件分岐を行う

-- if 文 --
指定した条件が true（真） のときに、特定の処理を実行する

【index.js】
let score = 80;
if (score >= 70) {
console.log("合格です！");
}
// score が 70 以上なら "合格です！" を出力

-- else if 文 --
最初の if 条件が false だった場合に、新たな条件を設定して処理を分岐できる

【index.js】
let score = 65;
if (score >= 80) {
console.log("とても良い");
} else if (score >= 60) {
console.log("普通");
}
// score が 80 以上なら「とても良い」、
// 60 以上なら「普通」と出力

-- else 文 --
if および else if で設定した すべての条件が false だった場合に実行される処理を指定する

【index.js】
let score = 50;
if (score >= 80) {
console.log("とても良い");
} else if (score >= 60) {
console.log("普通");
} else {
console.log("改善が必要です");
}
// score が 80 以上なら「とても良い」
// 60 以上なら「普通」
// それ以外なら「改善が必要です」と出力

---

# 課題 2

- 三項演算子の基本構文と、if/else 文との違いについて説明してください。

-- 三項演算子の基本構文 --
条件 ? 真のときの処理 : 偽のときの処理;

【index.js】
let score = 80;
let result = score >= 70 ? "合格" : "不合格";
console.log(result); // "合格"

-- 三項演算子と if/else 文との違い --
記述量
三項演算子：短く書ける
if/else 文：冗長になりがち

可読性
三項演算子：簡単な条件なら読みやすい
if/else 文：複雑な条件でも明確

使う場面
三項演算子：シンプルな条件分岐に向いている
if/else 文：複雑なロジックや複数の条件分岐に向いている

---

おまけメモ

-- 三項演算子と if/else 文で記述量の違いを比較 --

三項演算子
【index.js】
let score = 80;
let result = score >= 70 ? "合格" : "不合格";
console.log(result); // "合格"

if/else 文
【index.js】
let score = 80;
let result;
if (score >= 70) {
result = "合格";
} else {
result = "不合格";
}
console.log(result); // "合格"

---

# 課題 3

- switch/case 文の基本構文、各 case の役割、そして break 文がない場合の動作について説明してください。

switch/case 文は、複数の条件を比較 する場合に if/else if の代わりに使える条件分岐の方法
特定の 変数の値 に基づいて、それぞれ異なる処理を実行できる

・switch (式): 条件となる 式（変数など） を指定
・case 値:: 式 の値と case の値が 一致 した場合に、次の処理を実行
・break;: 処理を終了し、switch 文の外へ抜ける
・ default:: すべての case に一致しない場合 の処理（省略可能）

【index.js】
switch (式) {
case 値 1:
// 値 1 に一致した場合の処理
break;
case 値 2:
// 値 2 に一致した場合の処理
break;
default:
// どの case にも一致しなかった場合の処理
}

-- case の役割 --

【index.js】
let day = 3;

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
default:
console.log("不明な曜日");
}

【出力結果】
水曜日

メモ：変数「day」の中身は「３」のため、case 3: の処理が実行され、「水曜日」が出力される

-- break 文がない場合の動作 --
break を省略すると、次の case の処理も続けて実行される（フォールスルーという動作）

【index.js】
let fruit = "apple";

switch (fruit) {
case "apple":
console.log("これはリンゴです");
case "banana":
console.log("これはバナナです");
default:
console.log("これは未知の果物です");
}

【出力結果】
これはリンゴです
これはバナナです
これは未知の果物です

メモ：
フォールスルーを意図的に利用して、複数のケースをまとめて処理することもできる
default は、どの case にも一致しなかった場合の処理を指定する

- 複数の条件分岐が必要な場合に switch/case 文を使うメリットと、if/else 文との使い分けについて考察してください。

【switch/case を使うメリット】
・switch/case は、特定の値ごとに分岐する場合に if/else よりも見やすく書ける
・if/else だと else if が増えて読みにくくなることがある

【switch/case と if/else で比較】
-- switch/case --
【index.js】
switch (fruit) {
case "apple":
console.log("これはリンゴです");
break;
case "banana":
console.log("これはバナナです");
break;
case "grape":
console.log("これはブドウです");
break;
default:
console.log("これは未知の果物です");
}

-- if/else --
【index.js】
let fruit = "apple";

if (fruit === "apple") {
console.log("これはリンゴです");
} else if (fruit === "banana") {
console.log("これはバナナです");
} else if (fruit === "grape") {
console.log("これはブドウです");
} else {
console.log("これは未知の果物です");
}

【switch/case と if/else の使い分け】

-- switch/case を使うべきケース --

1. 1 つの変数に対する複数の値の比較
   → 変数 value が 1, 2, 3, 4 のいずれかで異なる処理をする場合に適している
2. 分岐が多い（3 つ以上）
   → if/else だとネストが深くなり、可読性が悪くなるケース
3. 明示的に値を確認できる
   → 数値や文字列を比較する場合は switch のほうがシンプルで直感的

-- if/else を使うべきケース --

1. 条件が範囲や論理式を含む
   → switch/case は単純な値の比較しかできないが、if は範囲（>=、<=）や論理式（&&、||）を扱える
2. 複雑な条件分岐
   → 組み合わせた条件 (x > 10 && y < 20 など)
