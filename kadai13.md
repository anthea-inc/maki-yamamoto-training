表示の可視性と理解

## 課題１

- 以下の CSS プロパティについて調査し、それぞれの役割を説明してください。

- display
  役割：要素のレイアウトや表示方法を指定する
  主要な値：
  block：要素を ブロックレベル要素 として表示
  inline：要素を インライン要素 として表示
  flex：要素を フレックスボックスのコンテナ として表示
  grid：要素を グリッドコンテナ として表示
  メモ：グリッドコンテナとは、display: grid; を適用した要素のことをを指す。
  グリッドレイアウト を構築するための親要素で、内部の子要素（グリッドアイテム）を行と列の 2 次元空間で配置する機能を持つ

block
役割：要素を ブロックレベル要素 として表示

inline
役割：要素が 行内要素 (inline element) として扱われることを指定
メモ：高さや幅を設定できないため、「width」 や「height」は無視される

inline-block
役割：要素が 行内ブロック要素 (inline-block element) として扱われることを指定

none
役割：非表示にする

---

メモ：
display: none;
要素を完全に非表示にする

list-style-type: none;
リストアイテムのマーカー（箇条書きの点や番号）を非表示にする

---

contents
役割：要素自体を視覚的なボックスとして扱わず、中身（子要素）のみを表示する

initial
役割：特定のプロパティを初期状態にリセットする
メモ：この場合の初期値とは、ブラウザがプロパティごとにデフォルトで設定している値を指す

inherit
役割：プロパティの値を親要素から継承させる

- visibility
  役割：要素の表示・非表示を制御する
  メモ：要素のレイアウト（配置）には影響を与えず、要素の見た目だけに影響する

visible
役割：要素を表示状態にする
メモ：デフォルト値であるため、通常は明示的に指定する必要はない

hidden
役割：要素を非表示にする
メモ：要素は非表示になるが、ページのレイアウト上はスペースが確保されたまま

---

## 課題 2

- display: inline-block の特徴を以下の観点から説明してください。

【display: inline-block と display: block の違い】
幅全体を占有するか
display: block：する
display: inline-block：しない（隣接要素と並べられる）

幅・高さの指定
display: block：できる
display: inline-block：できる

行内配置
display: block：できない
display: inline-block：できる

主な用途
display: block：セクション全体のレイアウト設定
display: inline-block：小さなボックスやボタンの配置

【display: inline-block と display: inline の違い】

サイズ
display: inline：幅・高さを直接指定できない
display: inline-block：幅・高さを直接指定できる

占有領域
display: inline：テキストと同じライン上に配置される
display: inline-block：テキストと同じライン上に配置されるが、ブロック的な性質を持つ

改行
display: inline：要素が続けて配置される
display: inline-block：要素が続けて配置される

---

## 課題 3

- display: none と visibility: hidden の違いを説明してください。

【display: none と visibility: hidden の違い】

- display: none
  動作: 要素を完全に非表示にし、レイアウト上からも削除する
  特徴:
  要素が存在しないかのように扱われ、他の要素がその位置を埋める
  要素の高さや幅、他のスタイルもすべて無視される
  DOM 上には存在するが、画面にはまったく表示されない

- visibility: hidden
  動作: 要素を非表示にするが、レイアウトには影響を与えない
  特徴:
  要素のスペースやサイズは保持される
  ただし、要素の内容は表示されず、透明な状態になる

メモ：
DOM (Document Object Model) とは、HTML や XML ドキュメントをプログラムから操作可能なオブジェクトとして表現するための仕様や仕組みのことを指す。
DOM を使うことで、JavaScript などのプログラミング言語を通じてウェブページの構造や内容、スタイルを動的に操作できる。

100 秒で理解する DOM
https://www.youtube.com/watch?v=17AXWYPTBYc
