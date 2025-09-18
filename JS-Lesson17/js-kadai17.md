# 課題 1

- 同期処理と非同期処理の概念を調査し、それぞれの違いを説明してください。

-- 同期処理 --
定義：
処理が上から順番に 1 つずつ実行され、前の処理が終わるまで次の処理に進まない方式

【index.js】
console.log("1");　// 1
console.log("2");　// 2
console.log("3");　// 3

-- 非同期処理 --
定義：
ある処理の完了を待たずに、次の処理を先に進めることができる方式

【index.js】
console.log("1");
setTimeout(() => {
console.log("2");
}, 1000);
console.log("3");

【出力結果】
１
３
２

- ブラウザで同期的な処理（同期的なブロック処理）を行うと、どのような問題が発生するか具体的にまとめてください。

1. UI のフリーズ（画面が固まる）
   → 重いループ処理（for 文など）を同期的に行うと、UI の更新（ボタンの反応、スクロールなど）が一切行われなくなる

2. 入力イベントの無視
   → 同期的な処理中は他のイベント（クリック、入力、キー操作など）を処理できない

メモ：
JavaScript はシングルスレッド
シングルスレッドとは？
「一度に 1 つのことしかできない」という実行方式のこと

メリット
・シンプルで分かりやすい
・同時に複数の処理が走らないので、バグが起こりにくい

---

# 課題 2

- Promise の基本的な仕組みを調査し、次の用語を用いて Promise の状態遷移を説明してください。

・pending/fulfilled/rejected

pending(待機)：非同期処理が終わっていない初期状態
fulfilled(成功)：非同期処理が正常に完了した状態
rejected(失敗)：非同期処理が失敗した状態

・Promise.resolve/Promise.reject

Promise.resolve：特定の値ですぐに Promise を fulfill(成功) したいとき
Promise.reject：発生したエラーですぐに Promise を reject(失敗) したいとき

- Promise.prototype.then および Promise.prototype.catch の役割と使い方を整理してください。

-- Promise.prototype.then --

役割：
・非同期処理が成功（resolve）したときに実行する処理を登録する
・then はチェーン可能で、順に非同期処理をつなげることができる

【index.js】
someAsyncFunction()
.then(result => {
console.log("成功:", result);
return nextStep(result);
})
.then(next => {
console.log("次の処理:", next);
});

-- Promise.prototype.catch --

役割：
・非同期処理が失敗（reject）したときに実行する処理を登録する
・チェーン内で発生したエラーをまとめてエラーハンドリングを行うために使う

【index.js】
someAsyncFunction()
.then(result => {
// 成功時の処理
return doSomething(result);
})
.catch(error => {
console.error("エラー発生:", error);
});

メモ：
エラーハンドリングとは？
プログラムを実行中にエラーが発生したときに処理を止めるのではなく
どうするかをあらかじめ決めておく仕組みや考え方

- Promise.prototype.catch を用いたエラーハンドリングの仕組みについてまとめ、例外（throw）と Promise を組み合わせる際の注意点を具体的に挙げてください。

-- Promise.prototype.catch のエラーハンドリングの仕組み --

・「.catch()」 は、Promise チェーン内で発生したエラーを補足するメソッド
・「.then()」の中で throw された例外や、Promise.reject() による拒否を処理できる

【index.js】
fetchData()
.then(result => {
// 成功時の処理
return process(result);
})
.catch(error => {
// エラー処理
console.error('エラーが発生しました:', error);
});

コード解説メモ
・catch() は、チェーンの中で発生したいずれかのエラーに反応する
・最初のエラー発生地点から、最も近い catch に流れる

-- 例外（throw）と Promise を組み合わせる際の注意点 --

1. Promise チェーン内で throw すると、それは Promise.reject(…) と同じ
   → throw は自動的に 拒否された Promise に変換され、catch に流れる

2. 非同期関数の中の throw は、try...catch で囲わないとエラーが受け取られないまま放置される場合がある
   → async 関数内で throw すると、Promise.reject と同じ

---

# 課題 3

- Promise チェーンの意味を説明し、どのように書くことで可読性や保守性が向上するか考察してください。

Promise チェーンとは、「.then() メソッド」を連続的に繋げて処理を順に記述する構文のこと
これにより、非同期の処理結果を順番に受け取りながら、次の処理へと繋げていくことができる
【可読性が低い例】
fetchUser().then(function(user) {
return getProfile(user.id);
}).then(function(profile) {
return showProfile(profile);
});

メモ：
・チェーンが長くなると、コードが読みにくくなる
・何をしている関数か明確でない
・無名関数（名前のない関数）をその場で書いているので、処理の意味をパッと見て理解しづらい

【可読性が高い例】
function handleUser(user) {
return getProfile(user.id);
}

function handleProfile(profile) {
return showProfile(profile);
}

fetchUser()
.then(handleUser)
.then(handleProfile)
.catch(console.error);

メモ：
・「.then()」に関数名だけ書いてあるので、処理の流れが明確
・関数名で処理の意図がわかる
・関数単位でテストができる

- Promise.all と Promise.race はそれぞれどのような場面で役立つのか、特徴や使い分けのポイントを説明してください。

-- Promise.all --
非同期処理を並列して実行するためのメソッド

特徴
・すべての Promise が成功（resolve）したときに、まとめて結果を配列で返す
・1 つでも失敗（reject）すると、全体が即座に失敗する

役立つ場面
・全ての結果が必要なとき
・全ての処理が終わってから次の処理に進みたいとき

-- Promise.race --
複数の Promise のうち「最初に結果が出たもの（成功でも失敗でも OK）」を返すメソッド

特徴
・一番早く resolve または reject された Promise の結果で、Promise.race 全体が決まる
・他の Promise はその後どうなっても関係ない

役立つ場面
・リソースの待機・競争をさせる
・ネットワークの応答待ちに時間制限をつける
・複数のバックアップ API・サーバーの中で、一番早い応答を使いたいとき

---

# 課題 4

- Async Function と await 式のそれぞれの概念を調査し、基本的な使い方を整理してください。

-- Async Function --
非同期処理を扱うための関数 を定義する方法。関数が常に Promise を返す という特徴がある。
以下の「index1.js」と「index2.js」は同じ処理をしている

【index1.js】
async function example() {
return "Hello";
}

【index2.js】
function example() {
return Promise.resolve("Hello");
}
-- await 式 --
Promise の結果を待機する構文。Promise が成功（または失敗）されるまで、次の行に進まずに待機する

【基本構文】
const result = await someAsyncFunction();

特徴
・await は async 関数の中でしか使えない
・await に渡された値が Promise の場合：成功するまで待機し、その結果を返す。
・Promise でない場合：そのまま即座に値を返す

- 従来の Promise を使った方法と比べ、Async Function と await 式を用いることで、コードの可読性やエラーハンドリングがどのように向上するのか考察してください。

-- Promise と Async Function/await 式を比較 --

promise チェーン
可読性：ネストが深くなりがち
エラーハンドリング：「.catch()」の位置が重要
保守性：コードが煩雑になることがある
デバック：スコープやネストで混乱しやすい

Async Function/await 式
可読性：シンプルで直感的
エラーハンドリング：「try...catch」で明確に書ける
保守性：読みやすく、変更も簡単
デバック：ステップ実行しやすい

メモ：
ステップ実行とは？
Chrome DevTools などの開発者ツールで「ステップ実行（step over）」を使うと、プログラムの処理を一行ずつ実行しながら、変数の中身や処理の流れを確認できる
