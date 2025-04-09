## 課題 1

- HTML の onclick 属性と React の onClick プロパティについて、それぞれの記述方法および動作の違いを説明してください。

-- HTML の onclick 属性 --

動作の特徴
・直接 DOM にバインドされる
・イベントハンドラは 文字列として評価される（eval 的に処理される）
・HTML と JavaScript が分離されていないため、保守性や再利用性が低い
・グローバルスコープで実行されるため、セキュリティ的にリスクがある（特にインジェクション攻撃の可能性）

【index.html】
<button onclick="alert('Clicked!')">Click Me</button>

-- React の onClick プロパティ --

動作の特徴
・関数を直接渡す（関数参照として）ため、コードがより明確
・JSX は JavaScript にコンパイルされるので、イベントは 仮想 DOM を通じて管理される
・複数のイベントリスナーの管理やライフサイクルとの連携がしやすい
・セキュアかつ保守性が高い（HTML とロジックが分離されている or 再利用性が高い）

【index.jsx】
function MyButton() {
const handleClick = () => {
alert('Clicked!');
};

return <button onClick={handleClick}>Click Me</button>;
}

-- それぞれの違いのまとめ --

記述方法
HTML onclick：HTML の属性内に文字列で JavaScript を記述
React onClick：JSX 内で関数を渡す

イベントの処理
HTML onclick：文字列評価で実行される
React onClick：関数として直接渡される

スコープ
HTML onclick：グローバル
React onClick：コンポーネント内スコープ

セキュリティ
HTML onclick：脆弱になりがち
React onClick：より安全

保守性・再利用性
HTML onclick：低い
React onClick：高い

---

## 課題 2

- React において、イベントハンドラーをコンポーネントの props として渡す方法を説明してください。

【index1.jsx】
// 親コンポーネント（Parent）

function Parent() {
const handleClick = () => {
alert('Button was clicked!');
};

return <Child onClick={handleClick} />;
}

【index2.jsx】
// 子コンポーネント（Child）

function Child({ onClick }) {
return <button onClick={onClick}>Click Me</button>;
}

メモ：
handleClick
→ 親コンポーネントで定義されたイベントハンドラー

onClick prop
→ 親が子へ渡している関数。子がイベント発生時にこれを呼び出す

<button onClick={onClick}>
→ 子でイベントを受け取り、親の関数を呼び出す記述

---

## 課題 3

- イベントのバブリングとは何か説明してください。

バブリングとは？
ある要素で発生したイベントが、その親要素、さらにその親要素へ…と階層を上へ向かって伝播していく仕組みのこと

【index.html】

<div id="parent">
  <button id="child">Click me</button>
</div>

<script>
  document.getElementById('parent').addEventListener('click', () => {
    console.log('親がクリックされた');
  });

  document.getElementById('child').addEventListener('click', () => {
    console.log('子がクリックされた');
  });
</script>

【出力結果】（子ボタンをクリックしたとき）
子がクリックされた
親がクリックされた

メモ：
最初に 子要素（button） のイベントが発火
そのあと 親要素（div） にバブリングしてイベントが伝わり、処理が行われる

- event.preventDefault()メソッドの役割を説明し、具体的にどのような場面で使われるか例を挙げてください。

preventDefault()とは？
呼び出すとその既定の動作を無効化することができる

【index.html】
// リンクのクリックを無効化

<a href="https://example.com" onclick="event.preventDefault(); alert('リンク無効！')">
  移動しないリンク
</a>

メモ：
通常の動作
→ クリックすると https://example.com に移動する

preventDefault() の効果
→ 移動せず、alert だけが表示される

-- preventDefault() を使う場面まとめ --

<a>タグのクリック
→ ページ遷移を防ぐ

<form>の送信
→ リロードを防ぎ、JSで処理を制御

ドラッグ&ドロップ操作
→ 標準動作（ファイルを開く等）を無効に

マウス操作やキー入力の制御
→ 右クリック禁止、ショートカットの無効化など

- event.stopPropagation()メソッドの役割を説明してください。

event.stopPropagation()とは？

JavaScript のイベントは、基本的に「ある要素で発生すると、その親要素、さらにその親要素へ…と伝播（バブリング）していく」
stopPropagation() を使うことで、その伝播を途中で止めることができる

【index.html】
// イベントの流れのイメージ

<div id="grandparent">
  <div id="parent">
    <button id="child">Click</button>
  </div>
</div>

メモ：
クリックイベントを child に付けると以下のようにバブリングする

1. child
2. parent
3. grandparent

注意点
stopPropagation() は「今のイベントが上に伝わらなくなる」だけであり、デフォルト動作を止めるわけではない
→ デフォルト動作を止めたいなら preventDefault() を使う
