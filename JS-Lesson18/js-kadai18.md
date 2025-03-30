## 課題 1

- Map とは何か、その特徴と基本構文についてコード例を交えて説明してください。

Map はキーと値の組み合わせからなるコレクションのこと
オブジェクトにはいくつかの問題あったので、それを解消しようとして作られたのがこの Map である

特徴

1. 任意の型をキーにできる
   → オブジェクトや関数もキーとして使用可能

2. 順序が保証されている
   → 要素の挿入順を保持する

3. サイズが取得できる
   →.size プロパティで要素数がわかる

4. イテレーションに適している
   → for...of や forEach()で簡単に操作ができる

【基本構文】
const map = new Map();

// 値の追加
map.set("name", "Maki");
map.set(123, "Number key");
map.set({ id: 1 }, "Object key");

// 値の取得
console.log(map.get("name")); // Maki

// サイズ確認
console.log(map.size); // 3

- 通常のオブジェクトと比較して、Map がどのようなケースで有利になるのか、具体的な例を挙げて考察してください。

【index.js】
const user1 = { name: "Maki" };
const user2 = { name: "Poyomaru" };

const loginTimes = new Map();

loginTimes.set(user1, "10:00");
loginTimes.set(user2, "11:00");

console.log(loginTimes.get(user1)); // '10:00'
console.log(loginTimes.get(user2)); // '11:00'

メモ：
Map はオブジェクトを「そのままの形」でキーに使えるため、構造が複雑なキーを扱う場面に適している

- get/set/has/delete の各メソッドを使ったコード例を示してください。

【index.js】
const userMap = new Map();

// set: 値を追加
userMap.set("id", 101);
userMap.set("name", "Maki");

// get: 値を取得
console.log(userMap.get("name")); // Maki

// has: キーが存在するか確認
console.log(userMap.has("id")); // true
console.log(userMap.has("age")); // false

// delete: キーを削除
userMap.delete("id");
console.log(userMap.has("id")); // false

メモ：
get(key)
戻り値の型：そのキーの値
キーが存在しない時の値：undefined

has(key)
戻り値の型：true/false
キーが存在しない時の値：false

---

## 課題 2

- Map の要素を繰り返し処理するために、forEach/keys/values/entries を用いた具体的なコード例を示してください。

【index.js】
const map = new Map([
["apple", 100],
["banana", 80],
["orange", 120],
]);

// 1. forEach メソッドによる繰り返し
map.forEach((value, key) => {
console.log(`forEach: ${key}の値段は${value}円です。`);
});

// 2. keys()：キーのみ出力
for (const key of map.keys()) {
console.log(`keys(): ${key}`);
}

// 3. values()：値のみ出力
for (const value of map.values()) {
console.log(`values(): ${value}`);
}

// 4. entries()：キーと値のペアを取り出す
for (const [key, value] of map.entries()) {
console.log(`entries(): ${key} => ${value}`);
}

【出力結果】
forEach: apple の値段は 100 円です。
forEach: banana の値段は 80 円です。
forEach: orange の値段は 120 円です。
keys(): apple
keys(): banana
keys(): orange
values(): 100
values(): 80
values(): 120
entries(): apple => 100
entries(): banana => 80
entries(): orange => 120

おまけ
for...of map だけでも entries() と同じ結果が得られる
なぜ？
for...of map が map.entries() と同じように動く理由は、Map のデフォルトのイテレーターが entries() だから

【index.js】
for (const [key, value] of map) {
console.log(`${key} => ${value}`);
}

メモ：
イテレーターとは？
「1 つずつ順番に取り出せる仕組み」のこと
.next() を呼ぶたびに「次の値」が取り出せる
done: true になったら終了（もう取り出す要素がない）

JavaScript では、配列や Map、Set など「繰り返し処理ができるデータ構造」は、「イテレーター（iterator）」というルールを持っている

- groupBy 関数を使った Map のグループ化処理のコード例を示してください。

【index.js】
// データの配列
const items = [
{ name: "りんご", category: "果物" },
{ name: "にんじん", category: "野菜" },
{ name: "バナナ", category: "果物" },
{ name: "ほうれん草", category: "野菜" },
];

// groupBy 関数
function groupBy(array, key) {
return array.reduce((map, item) => {
const groupKey = item[key];
if (!map.has(groupKey)) {
map.set(groupKey, []);
}
map.get(groupKey).push(item);
return map;
}, new Map());
}

// グループ化して結果を見る
const grouped = groupBy(items, "category");
console.log(grouped);

/_
引数 array：items 配列が格納されている
引数 key："category"（グループ化の基準となるキー）
_/

【出力結果】
Map(2) {
'果物' => [ { name: 'りんご', category: '果物' }, { name: 'バナナ', category: '果物' } ],
'野菜' => [
{ name: 'にんじん', category: '野菜' },
{ name: 'ほうれん草', category: '野菜' }
]
}

---

## 課題 3

- Set とは何か、その特徴を基本構文とコード例を用いて説明してください。

Set とは、「重複しない値だけを集めておけるコレクション（集合）」のこと
JavaScript の組み込みオブジェクトの一つである

特徴
・同じ値を追加しようとしても無視される
・値を追加した順番でループされる
・キー・値のペアではなく、値だけを管理する

【index.js】
// Set の作成
const mySet = new Set();

// 値の追加
mySet.add(1);
mySet.add(2);
mySet.add(2); // 重複するため追加されない

console.log(mySet); // Set(2) { 1, 2 }

// 値の存在確認
console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false

// 値の削除
mySet.delete(1);
console.log(mySet); // Set(1) { 2 }

// サイズの取得
console.log(mySet.size); // 1

// Set のループ処理
for (const value of mySet) {
console.log(value); // 2
}

- 一般的な配列と比較した際に、Set がどのような利点を持っているかを整理し、具体例を交えて考察してください。

Array
値の重複：許容される
要素の存在確認：includes()(O(n))
重複排除：filter や indexof が必要
パフォーマンス：大量なデータでは遅くなりやすい

Set
値の重複：一意（重複を自動的に排除）
要素の存在確認：has()(高速：平均 O（1）)
重複排除：自動で排除されるため、何もしなくて OK
パフォーマンス：簡単に検索・削除処理が可能

メモ：
O(1)：オーダー・ワン（一定時間）
O(n)：オーダー・エヌ（要素数に比例）
O(n²)：オーダー・エヌじじょう（二乗）

【index.js1】配列の場合（削除のために filter() や splice() を使う必要がある）
const arr = [1, 2, 3];
const filtered = arr.filter(x => x !== 2);　// 要素が 2 でない場合は残す条件
console.log(filtered); // [1, 3]

【index.js2】Set の場合
const set = new Set([1, 2, 3]);
set.delete(2);
console.log([...set]); // [1, 3]

- add/has/delete/clear の各メソッドを使ったコード例を示してください。

【index.js】
// Set の作成
const AnimalMeats = new Set();

// add(): 要素を追加（重複は追加されない）
AnimalMeats.add("鶏もも肉");
AnimalMeats.add("鶏胸肉");
AnimalMeats.add("豚肉");
AnimalMeats.add("鶏もも肉"); // これは無視される（重複）

console.log(AnimalMeats); // Set(3) { '鶏もも肉', '鶏胸肉', '豚肉' }

// has(): 値の存在を確認
console.log(AnimalMeats.has("豚肉")); // true
console.log(AnimalMeats.has("馬肉")); // false

// delete(): 特定の要素を削除
AnimalMeats.delete("鶏胸肉");
console.log(AnimalMeats); // Set(2) { '鶏もも肉', '豚肉' }

// clear(): 全要素を削除
AnimalMeats.clear();
console.log(AnimalMeats); // Set(0) {}
