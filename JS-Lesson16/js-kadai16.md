## 課題 1

- try/catch/finally および throw の各用語を用いて、例外処理の基本的な仕組みと流れを説明してください。

例外処理は、プログラムの実行中に発生するエラー（例外）を検出し、それに対処する仕組み
JavaScript では、try / catch / finally / throw を使って例外処理を行う

try：エラーが発生するかもしれないコードを囲む
→ 中でエラー（例外）が発生すると、直ちに catch ブロックに制御が移る

catch：エラーを受け取り、処理する
→ エラー内容は引数（例えば error）として受け取ることができ、ログを出す・ユーザーに通知するなどの処理を行う

finally：例外の有無に関わらず、最後に実行される処理
→ リソースの解放、後処理、ログ出力などに使用

throw：意図的にエラーを発生させる
→ 独自の条件でエラーを作って catch に流すことができる

【基本構文】
try {
// エラーが発生するかもしれない処理
} catch (error) {
// エラーが発生したときの処理
} finally {
// エラーの有無にかかわらず、最後に必ず実行される処理
}

- throw 文を使用して、独自のエラーを発生させる方法について、簡単なコード例を交えて説明してください。

【index.js】
/_
divide 関数
2 つの数値 a と b を受け取り、a ÷ b の結果を表示する関数
_/

function divide(a, b) {
try {
if (b === 0) {
throw new Error("0 で割ることはできません");
}
console.log(a / b);
} catch (error) {
console.error("エラーが発生しました:", error.message);
} finally {
console.log("処理を終了します");
}
}
console.log("=== 意図的にエラーを発生させる　成功例 ===");
divide(10, 0);
console.log("");

console.log("=== 意図的にエラーを発生させる　 NG 例 ===");
divide(10, 2);

【出力結果】
=== 意図的にエラーを発生させる　成功例 ===
エラーが発生しました: 0 で割ることはできません
処理を終了します

=== 意図的にエラーを発生させる　 NG 例 ===
5
処理を終了します

- どのようなケースで例外を投げ（throw）、どのようなケースでは if 文などの条件分岐のみでエラーをハンドリングできるのか、その考察とまとめを行ってください。

-- throw（例外）を使うべき --

プログラムの想定外の状態　 ◯
利用者の入力ミスなどの想定内の状態　 ×
処理の中断が必要な深刻なエラー　 ◯
通常の分岐の一部として扱える状態　 ×

【index.js】
function getUserName(user) {
if (!user) {
throw new Error("ユーザー情報がありません");
}
return user.name;
}

-- if 文などで処理すべき --

プログラムの想定外の状態　 ×
利用者の入力ミスなどの想定内の状態　 ◯
処理の中断が必要な深刻なエラー　 ×
通常の分岐の一部として扱える状態　 ◯

【index.js】
if (items.length === 0) {
console.log("商品がありません");
} else {
displayItems(items);
}

---

## 課題 2

- Error オブジェクトの役割、およびそのプロパティである name/message/cause について解説してください。

Error オブジェクトは、JavaScript でエラー処理を行う際に使われる組み込みオブジェクト
エラーが発生したときに、その情報（何が起きたか、なぜ起きたかなど）を表現・伝達するために使う
たとえば、throw 文でエラーを投げたり、try...catch 構文でエラーを捕捉する場面で活躍する

name
意味：エラーの種類（名前）を示す
デフォルト値： "Error"

【index.js】
const error = new Error("問題発生");
console.log(error.name); // "Error"

message
意味：エラー内容の説明文
開発者向けの情報として、何が原因でエラーになったのかを示す

【index.js】
const error = new Error("ユーザー ID が見つかりません");
console.log(error.message); // "ユーザー ID が見つかりません"

cause（ES2022 以降）
意味： エラーの「原因」となる別のエラーを渡せる
エラーチェーンの作成に使える。複雑なアプリで、エラーの発生源をたどるのに便利

【index.js】
const cause = new Error("DB 接続失敗");
const error = new Error("ユーザーデータの取得に失敗", { cause });
console.log(error.cause); // Error: DB 接続失敗

- ルトインエラーである ReferenceError/TypeError/SyntaxError が発生する状況を、具体例を挙げながら説明してください。

-- ReferenceError（参照エラー） --
発生する状況
・存在しない変数や関数などを参照しようとしたとき

【index.js】
console.log(userName); // ReferenceError: userName is not defined

コード解説：
userName という変数を宣言していないのに使おうとしている

-- TypeError（型エラー） --
発生する状況
・値の型に合わない操作をしようとしたとき
・null や undefined に対してプロパティやメソッドを使おうとしたとき

【index.js】
const count = 10;
count(); // TypeError: count is not a function

コード解説：
count は数値（number）で関数ではないのに () を使って呼び出そうとしている

-- SyntaxError（構文エラー） --
発生する状況
・JavaScript の文法ルールに違反しているコードがあるとき

【index.js】
if (true {
console.log("Hello");
}
// SyntaxError: Unexpected token '{'

コード解説：
if (true { ← 丸カッコの閉じ忘れが原因
