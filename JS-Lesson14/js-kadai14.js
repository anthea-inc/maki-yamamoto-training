//　問題集に挑戦しよう

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題１");
const fruit = { name: "apple" };
const color = { hue: "red" };

const Merge = { fruit: fruit.name, color: color.hue };

console.log(Merge);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題２");
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const NewArray = daysOfWeek.slice(3, 6);
console.log(NewArray);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題３");
const pets = ["dog", "cat"];
pets.forEach((element) => console.log(element));
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題４");
function addIndexToString(arr) {
  return arr.map((str, index) => str + index);
}

const vehicles = ["car", "bike"];
const result = addIndexToString(vehicles);
console.log(result);
console.log("");

/*
・index は map によって渡される各要素のインデックス番号
・mapメソッドは、配列の各要素を変換し、新しい配列を作成する
 */

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題５");
const myHobbies = ["reading", "swimming"];
console.log(Array.isArray(myHobbies));
console.log("");

/*
間違えてこうやって書いてた
console.log(myHobbies.isArray);
結果：undefined
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題６");
const person = {
  name: "Taro",
  age: 25,
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
console.log("");

/*
・name（キー）：'Taro'（値）
・age（キー）：25（値）
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題７");
const words = ["I", " ", "love", " ", "JavaScript"];
const result2 = words.join("");
console.log(result2);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題８");
const students = [
  { name: "Taro", score: 80 },
  { name: "Hanako", score: 95 },
  { name: "Jiro", score: 70 },
  { name: "Yoshiko", score: 85 },
];

function sortByScoreDescending(arr) {
  return [...arr].sort((a, b) => b.score - a.score);
}

const SortResult = sortByScoreDescending(students);
console.log(SortResult);
console.log("");
/*
・元の配列を変更しないように [...arr] でスプレッド演算子を使いコピーを作成
・b.score - a.score を指定することで、score の値が大きい順に並び替える

・sortByScoreDescending は、配列をscoreプロパティの値が高い順（降順）にソートするための関数
・返り値が 正の場合: b が a より前に（降順）
・返り値が 負の場合: a が b より前に（昇順）
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題９");
// クロージャーを使用
function createCounter() {
  let count = 0;
  return function countUp() {
    count++;
    return count;
  };
}

const countUp = createCounter();

console.log(countUp());
console.log(countUp());
console.log(countUp());
console.log("");

/*
・createCounter：カウンターを作成する関数
・countUp：カウンターを増やす関数 
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題１０");
const months = ["jan", "feb", "mar", "apr", "may"];
const Newmonths = [...months];
Newmonths.splice(0, 3, "spring", "summer", "autumn");

console.log(Newmonths);
console.log("");

/*
・splice(開始位置, 削除する要素の数, 追加する要素...) を使って、指定範囲の要素を置き換える

・const Newmonths = [...months];
・元の配列を破壊しないためにスプレッド構文を使ってコピー
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題１１");
const array = ["apple", "banana", "cherry", "date", "elderberry"];
const NewArray2 = array.slice(2, 5);

console.log("新しい配列:", NewArray2);
console.log("元の配列:", array);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題１２");
function getRandomElement(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("配列が空か無効です。");
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const greetings = ["おはよう", "こんにちは", "こんばんは"];
console.log(getRandomElement(greetings));
console.log("");

/*
こう書くのもアリ
const greetings = ['おはよう', 'こんにちは', 'こんばんは'];
console.log(Math.floor(Math.random() * 3));
*/

/*
・Array.isArray(array) // → Array.isArray(greetings) と同じ
・getRandomElement関数：与えられた配列からランダムに要素を選ぶ。配列の要素が増えても対応できる
・throwを使うことで 異常な場合に処理を停止させる
・array.length === 0: 配列が空でないかを確認

・Math.random() は 0以上1未満 のランダムな小数を生成する
・Math.random() * array.length で 0以上 array.length 未満 のランダムな小数になる
・Math.floor() で小数を切り捨てて、0 以上 (array.length - 1) 以下 の整数を取得する
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題１３");
const letters = ["B", "a", "c", "e", "k"];
letters.sort((a, b) => a.localeCompare(b));

console.log(letters);
console.log("");

/*
・String.prototype.localeCompare()：文字列を言語ごとに適切な順序で比較するためのメソッド
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題１４");
const str2 = "10";
let num = Number(str2);

console.log(typeof num === "number");
console.log(typeof num);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題１５");
let numbers = ["2", "23", "0", "16"]; //　文字列
numbers.sort((a, b) => a - b); //　数値比較
Object.freeze(numbers);

console.log(numbers);
console.log(typeof numbers);
console.log("");
// typeof numbers の結果は “object”（配列もオブジェクトの一種だから）

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題１６");
function checkArray(scores) {
  const all10 = scores.every((x) => x >= 10); // すべての要素が10以上か
  const any10 = scores.some((x) => x >= 10); // 1つでも10以上の要素があるか
  return { all10, any10 };
}

let scores = [12, 5, 8, 130, 44];
const result3 = checkArray(scores);
console.log(`全て10以上か: ${result3.all10}`);
console.log(`1つでも10以上があるか: ${result3.any10}`);
console.log("");

/*
こっちでもよかったかな？
let scores = [12, 5, 8, 130, 44];
console.log(scores.some((s) => s >= 10));

こっちでもよかったかな？２
console.log(`全て10以上か: ${checkArray(scores).all10}`);
console.log(`1つでも10以上があるか: ${checkArray(scores).any10}`);
*/

/*
・some() メソッド：配列の要素を 1つずつチェック し、条件を満たす要素が1つでもあれば true を返す
・条件を満たす要素を見つけた時点で、それ以上の要素をチェックせずに処理を終了する

・every()メソッド：配列のすべての要素が条件を満たすかを判定する
・すべての要素が条件を満たす場合のみ true を返し、1つでもfalseになるとfalse を返す
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題１７");
const data = [
  ["one", "info@example.com"],
  ["two", "hello@example.com"],
  ["three", "support@example.com"],
];

data.forEach((item) => console.log(item));
console.log("");
/*
・forEach()メソッド
・data の各要素（item）を取り出し、そのまま console.log(item) で出力する
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題１８");
console.log(undefined == null);
console.log("");

/*
「true」
undefined == null
→ 型変換が行われ、等しいとみなされる

「false」
undefined === null
→ 型が異なるため、厳密比較では等しくならない

== は型変換を含むため、バグを防ぐためにも === を使うのが推奨されることが多い
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題１９");
function getValues() {
  return {
    name: "John",
    age: 30,
    city: "New York",
  };
}

const { name, age, city } = getValues(); //分割代入
console.log(name, age, city);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題２０");
const text = "Hello, world! Hello, JavaScript!";
const containsHello = text.includes("Hello");
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題２１");
console.log("Hello".repeat(3));
console.log("");

/*
・repeat()メソッド：文字列を指定した回数だけ繰り返して結合した新しい文字列を返す

・連続してつなげたい場合 → .repeat(3)
・1行ずつ表示したい場合 → forループ
・配列を活用したい場合 → Array.join()
*/

/*
間違えた！PythonとJavaScriptやないかい！
for i in range(3);
  console.log(i);
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題２２");
const jsstr = "JavaScript";
const Newjsstr = jsstr.split("");

console.log(Newjsstr);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題２３");
const Quiz23Str = "Anthropic";
const [char1, char2, ...rest] = Quiz23Str; //分割代入

console.log(char1);
console.log(char2);
console.log(rest);
console.log("");

/*
・rest：「残りの部分」 を格納するための変数で、スプレッド構文 (...) を使うことで
それ以降の要素を配列として取得できる
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題２４");
function greet(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest);
}

greet("Hello", "world", "!", "How", "are", "you", "?");
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題２５");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const MergeAraay = [...arr1, ...arr2]; //スプレッド構文

console.log(MergeAraay);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題２６");
function getMessage() {
  return "Hello, JavaScript!";
}

console.log(`The message is: ${getMessage()}`);
console.log("");

/*
テンプレートリテラルは基本構文みないとわからない状態で今まで使ってたけど
そろそろ覚えたみたいで、今回は秒で解けてうれしい！
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題２７");
function addNumbers({ a, b }) {
  return a + b;
}

console.log(addNumbers({ a: 1, b: 2 })); // addNumbers 関数が { a: 1, b: 2 } というオブジェクトを引数として受け取る
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題２８");
const names = [
  ["Alice", "Bob", "Charlie"],
  ["David", "Eve", "Frank"],
];

const updatedNames = names.map((subArray) => subArray.map((name) => name + "さん"));

console.log(updatedNames);
console.log("");

/*
最初の map() の処理
names は二次元配列（配列の中に配列がある）なので、map() のコールバック関数の引数としてサブ配列が渡される
・1回目の実行時: subArray = ["Alice", "Bob", "Charlie"]
・2回目の実行時: subArray = ["David", "Eve", "Frank"]

内側の map() の処理
subArray 内の各要素（名前）に "さん" を追加する。
・1回目の subArray.map() の処理結果: ["Aliceさん", "Bobさん", "Charlieさん"]
・2回目の subArray.map() の処理結果: ["Davidさん", "Eveさん", "Frankさん"]
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題２９");
const people = [{ name: "Alice" }, { name: "Bob" }];

const NewArray29 = people.map((obj) => obj.name + "さん");

console.log(NewArray29);
console.log("");

/*
・このソースコードにおいてのobj は map() メソッドのコールバック関数の引数であり
people の各要素（オブジェクト）を表している
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題３０");
const data30 = [
  ["apple", "banana"],
  ["carrot", "durian"],
];

const result30 = data30.map((subArray) => subArray[0]);

console.log(result30.join("\n"));
console.log("");

/*
これもアリ
console.log(data[0][0]);
console.log(data[1][0]);
*/

/*
・subArray[0] は各サブ配列の最初の要素を取得する操作
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題３１");
const fruits = ["apple", "banana"];
const copy = [...fruits]; // 配列をスプレッド構文でコピー（新しい配列）

fruits.length = 0; // 配列を空にする（参照を変えないため）
fruits.push("kiwi", "orange");

console.log("copy:", copy);
console.log("fruits:", fruits);
console.log("");

/*
・エラー：const ['kiwi', 'orange'] = fruits;で分割代入しようとしてしまった
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題３２");
const array32 = ["A", "B", "C", "D", "E"];

const order = { A: 0, C: 3, D: 4, B: 2, E: 1 }; // 新しい順序を指定
array32.sort((a, b) => order[a] - order[b]);

console.log(array32);
console.log("");

/*
・問題文は移動させるように指示していたので、削除する方法ではなくsort()メソッドで並び替えてみた
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題３３");
const arr = [10, 20];

console.log(arr.hasOwnProperty(2));
console.log(arr[2] === undefined);
console.log(arr[2]);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題３４");
const str = "-9";
let num34 = Number("-9");

console.log(`\n型:${typeof num34}\n値:${num34}`);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題３５");
const greeting = "こんにちは";
const name35 = "田中さん";
const Merge35 = `${greeting}${name35}いい天気ですね`;

console.log(Merge35);
console.log("");

/*
こっちもアリ！どっち使えばいいんだろー
const Merge35 = greeting + name + 'いい天気ですね';
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題３６");
const target = undefined;

console.log(target === null || target === undefined);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題３７");
let array37 = [];

console.log(array37.length > 0);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題３８");
const value = 0;
const target38 = value ?? 10;
console.log(target38);
console.log("");

/*
・??（Nullish coalescing operator）は、左側の値が null または undefined のときにのみ右側の値を適用する演算子

-- const value = 0; --
・0 は falsy（偽相当値）だが、null でも undefined でもない
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題３９");
let obj = {};

console.log(Object.keys(obj).length === 0 ? false : true);
console.log("");

/*
・objは空のオブジェクトなので、プロパティは存在せず、空の配列 [] が返る
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題４０");
const fruits40 = ["apple", "banana", "orange"];

console.log(fruits40.indexOf("orange"));
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題４１");
const letters41 = ["a", "b", "c"];
letters[1] = "javascript";

console.log(letters41);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題４２");
const numbers42 = [1, -2, 3, -4, 5];
const hunokazu42 = numbers42.filter((num) => num < 0);

console.log(hunokazu42);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題４３");
const data43 = null;

console.log(data43 === null);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題４４");
const zeros = [0, 0, 0];
zeros.fill(7, 1); // インデックス1から最後まで 7 に変更する

console.log(zeros);
console.log("");

/*
・fill(value, start, end)
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題４５");
const num45 = 3.14159;

console.log(Math.round(num45));
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題４６");
const obj46 = {
  name: "Taro",
  age: 25,
};

const { name46, age46 } = obj46; // 分割代入

console.log(name46);
console.log(age46);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題４７");
const str47 = "JavaScript";

const firstChar = str47[0];
const fifthChar = str47[4];

console.log(firstChar);
console.log(fifthChar);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題４８");
const nested = [1, [2, 3, 4], 5, [6, 7]];
const flat48 = nested.flat(1);

console.log(flat48);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題４９");
const sentence = "The quick brown fox";

const words49 = sentence.split(" "); // 文字列を単語に分割
const result49 = Object.fromEntries(words49.map((word, index) => [index, word]));

console.log(result49);
console.log("");

// { 0: "The", 1: "quick", 2: "brown", 3: "fox" }
/*
・Object.fromEntries() を使って配列をオブジェクトに変換
・map() を使って [index, word] の配列を作成
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題５０");
function add(...args) {
  if (args.length === 0) return 3; // 引数がない場合は3を返す
  if (args.length === 1) return args[0] + 2; // 引数が1つなら +2
  return args.reduce((sum, num) => sum + num, 0); // すべての引数を合計
}

console.log(add());
console.log(add(2));
console.log(add(2, 3));

console.log("");

/*
・...args を使うと、渡された すべての引数を1つの配列にまとめて取得できる

array.reduce((累積値, 現在の値) => { 処理 }, 初期値);
return args.reduce((sum, num) => sum + num, 0);

•	累積値 (sum)：これまでの計算結果を保持する変数。
•	現在の値 (num)：配列の各要素が順番に num に入る
•	初期値 (0)：累積値の初期状態（sum の最初の値）
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題５１");
let condition = true;
function doSomething() {
  console.log("こんにちは");
}

condition && doSomething();
console.log("");

/*
(condition)
条件を記述する部分。trueのときのみブロック内が実行される

doSomething();
実行したい処理（関数の呼び出しや変数の変更など）
注：これは組み込み関数ではない

&&（論理AND）演算子
左側の condition が true の場合のみ、右側の doSomething(); を実行する
condition が false の場合は、doSomething(); は実行されない
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題５２");
const original = { name: "Taro", age: 25 };
const copied = { ...original };
original.age = 30;

console.log(original);
console.log(copied);
console.log("");

/*
値渡し
説明：変数の値そのものをコピー
影響：コピー先の変更は元の変数に影響なし

参照渡し
説明：変数のメモリの参照をコピー
影響：コピー先の変更が元の変数にも影響する
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題５３");
const name53 = "Taro Yamada";
const address53 = "Tokyo";

const obj53 = {
  name53,
  age: 30,
  city: "Osaka",
  address53,
};
console.log("");

/*
プロパティ名と変数名が同じ場合のショートハンドを使って書き換えてください
オブジェクトのプロパティを定義するときに オブジェクトリテラルの省略記法（オブジェクトの短縮プロパティ名）
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題５４");
const nestedArray = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const NewnestedArray = nestedArray.flat(1);

console.log(NewnestedArray);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題５５");
const a = "Hello";
const b = "World";
const c = "！";

const foo = a || b;
const bar = !!c;
const baz = !c;

console.log(foo);
console.log(bar);
console.log(baz);
console.log("");

/*
三項演算子
条件式 ? 条件が真のときの値 : 条件が偽のときの値;

!!（二重否定）
値を Boolean型に変換する
Boolean()と同じ動きをする

【使用例】
Boolean(value)
!!value 
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題５６");
const duplicatedArray = [1, 1, "a", "a", "b", "c", "c"];
const uniqueArray = [...new Set(duplicatedArray)];

console.log(uniqueArray);
console.log("");

/*
new Set(array)
重複した値を自動的に削除するデータ構造

変換前：[1, 2, 2, 3, 4, 4, 5];
変換後： {1, 2, 3, 4, 5}

補足：スプレッド構文でSet内の要素を展開し、新しい配列として格納している
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題５７");
const array57 = ["apple", "banana", "cherry"];
array57.unshift("orange");

console.log(array57);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題５８");
const numbers58 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result58 = numbers58.filter((num) => num % 2 !== 0 && num % 3 !== 0);

console.log(result58);
console.log("");

/*
-- num % 2 !== 0 --
「num % 2」num を 2 で割った余りを求める
「num % 2 !== 0」2で割り切れない（偶数ではなく奇数）という条件

-- num % 3 !== 0 --
「num % 3」num を 3 で割った余りを求める
「num % 3 !== 0」3で割り切れないという条件

-- &&（論理AND） --
2でも3でも割り切れない数を絞り込む（このソースコードは）
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題５９");
const myObject = {
  1: ["apple", "banana", "cherry"],
  2: ["dog", "cat", "bird"],
};

const merged59 = [myObject[1], myObject[2]];
// const merged59 = Object.values(myObject);も可（全ての配列を取得できる）

console.log(merged59);
console.log("");

/*
間違えた回答
const merged59 = [myObject[0], myObject[1]];
console.log(merged59);
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("問題６０");
const fruits60 = ["apple", "banana", "cherry"];
const fruitObject = Object.fromEntries(fruits60.map((fruit, index) => [index, fruit]));

console.log(fruitObject);
console.log("");
