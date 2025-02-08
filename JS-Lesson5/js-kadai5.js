//　実践課題１

//　1.以下のコードを使用して、変数を宣言し、初期化してください。
const a = 10;
const b = 3;
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");

//　2.次の演算結果をconsole.logを使って表示してください。

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");

//　文字列結合演算子（+）を使用して、任意のメッセージを表示してください。
console.log("Seiha President" + " " + "thank you always!");
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
//　実践課題２

//　1.以下のコードを実行し、結果を確認してください。
/*
①と③で表示される値が異なる理由を説明してください。
解答：
①後置インクリメントは、値を返した後で増やすため、最初は「５」で出力されるが、次の行で「１」増えて「６」になる
③前置インクリメントは、値を増やしてから返すため、「5 + 1」でどちらも「６」で出力される
 */

let x = 5;
console.log(x++); // ① 後置インクリメント
console.log(x); // ②

let y = 5;
console.log(++y); // ③ 前置インクリメント
console.log(y); // ④

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
//　実践課題３

// 次のコードを実行し、それぞれの結果を確認してください。
/*
num1とnum2に格納される値がどのようなものか、またその理由を説明してください。
num1 解答："10"（文字列）だが、+ を付けることで Number("10") と同じ扱いになるため、「数値10」が格納される
num2 解答："100" は 100 に変換され、その後 - が付くため、数値-100が格納される
*/

let str1 = "10";
let num1 = +str1; // 単項加算演算子
console.log(num1, typeof num1); // 10 "number"

let str2 = "100";
let num2 = -str2; // 単項減算演算子
console.log(num2, typeof num2); // -100 "number"
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
