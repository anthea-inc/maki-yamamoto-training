## 課題 1

- React Hook の基本概念と、それが導入された背景について説明してください。

React Hook とは？
関数コンポーネント内で状態管理や副作用処理などの React の機能を使えるようにする仕組みのこと
従来、状態（state）やライフサイクルメソッド（componentDidMount、componentDidUpdate など）
を使いたい場合はクラスコンポーネントを使用する必要があったが、Hook により関数コンポーネントだけで同じことができるようになった

-- 主な組み込み Hook --

useState
状態を定義して管理する

useEffect
副作用（データ取得、購読、DOM 操作など）を処理する

useContext
コンテキストの値を取得する

useRef
DOM 要素や任意の値を保持するための参照を取得する

useMemo
計算コストの高い処理の結果をメモ化する

useCallback
関数をメモ化して再生成を防ぐ

useReducer
複雑な状態遷移を reducer パターンで管理する（Redux ライクな制御）

- React において Hook がなぜ重要なのか、その役割と意義について解説してください。

React Hook の主な役割：
関数コンポーネントに状態管理や副作用処理などの React の機能を追加する

-- React Hook の意義 --

・クラスを書かなくても React の機能を使用できる
・従来よりも簡潔で読みやすいコードが書ける
・既存のコードを書き換えることなく、一部のコンポーネントで利用できる
・JavaScript ライブラリの Redux（リダックス）と併用しやすい
・ステートフルロジックと副作用を関数コンポーネントから切り離すことができる
・値を管理したり、DOM 要素にアクセスしたりできる

---

## 課題 2

- useState フックの役割と基本的な使い方（状態の宣言、更新方法）を説明してください。

useState フックとは？
状態（State）を管理するための最も基本的なフック

【index.jsx】
import { useState } from 'react';

function Counter() {
// 状態の宣言：count という変数と、それを更新する setCount 関数を用意
const [count, setCount] = useState(0); // 初期値は 0

return (

<div>
<p>現在のカウント: {count}</p>
<button onClick={() => setCount(count + 1)}>+1</button>
</div>
);
}

-- コード解説 --

・useState(初期値)
→ 状態の初期値を渡す（例：0、''、false、[]、{} など任意の型）

・[状態変数, 更新関数] の形式で返される
→ count：現在の状態（この例ではカウント数）
→ setCount：その状態を更新する関数

・setCount(newValue) を呼ぶと、状態が更新され、コンポーネントが再レンダリングされる
-- 更新時のポイント --

setCount(prev => prev + 1);
このように記述することで、最新の状態を確実に取得しながら更新できる
複数の更新が非同期的に行われる場合にも安全

- useEffect フックの役割と、副作用（例: データ取得、購読、タイマー設定、DOM 操作など）を扱う方法について説明してください。

useEffect フックとは？
コンポーネントの副作用（表示以外の処理）を扱うためのフック
コンポーネントの描画後に特定の処理を実行したいときに使用する
React コンポーネントは基本的に純粋関数（= 副作用がない関数）であることが理想だが、
現実のアプリでは以下のような処理が必要になる

• データの取得（API 呼び出し）
• イベントリスナーや購読の設定
• タイマーの設定・クリア
• DOM への直接アクセスや操作

これらが「副作用」にあたる

【index.jsx】
// タイマー設定

useEffect(() => {
const timer = setInterval(() => {
console.log('tick');
}, 1000);

return () => clearInterval(timer); // タイマーを解除
}, []);

注意点：
・副作用は同期的にではなく非同期に実行される（レンダリング後に走る）
・クリーンアップ関数が必要なケースでは必ず return する
・複数の useEffect を使っても OK（処理を分けて整理できる）

メモ：
クリーンアップ関数とは？
useEffect における クリーンアップ関数は、
副作用によって設定された処理を解除・後始末するための関数

副作用の中には、「一度設定したら、あとで解除しないとメモリリークやバグになる」ようなものがある
これらを使った後は、コンポーネントがアンマウントされたときや依存値が変化したときに解除（＝クリーンアップ）する必要がある

たとえば？
・イベントリスナー
・タイマー（setInterval や setTimeout）
・サブスクリプション（WebSocket や外部ライブラリなど）

--

## 課題 3

- useContext フックの役割と、コンテキスト（Context API）を利用してコンポーネントツリー間でデータを受け渡す方法を説明してください。

useContext フックとは？
React の Context API と組み合わせて使うことで、コンポーネントツリーの深い階層にあるコンポーネントに対して、
プロップスのバケツリレーをせずにデータを渡すための仕組み

メモ：深い階層にも直接アクセスできるってことか〜！コードが短くなってよき！

役割：
・React.createContext() で作成された コンテキストオブジェクトを引数にとり、現在のコンテキスト値を取得する
・値の変更を購読し、プロバイダーの値が変更されると、自動的に再レンダーされる
・コンポーネント内で簡単にグローバルな状態やテーマなどの共有情報にアクセス可能にする

-- Context API を利用したデータの受け渡し手順 --

①createContext()を使って Context オブジェクトを生成する
②Provider コンポーネントをコンポーネントツリー上に設置する
③ 子孫コンポーネントで Context オブジェクトを使う

- createContext と Provider との連携についても触れてください。

createContext() と Provider の関係とは？
createContext() は「共有するデータの入れ物（コンテキストオブジェクト）」を作る関数
Provider はその「入れ物に実際の値を詰めて、下位コンポーネントに届ける役割」

メモ：
わかりやすいイメージ
コンテキスト（箱）
プロバイダー（宅配便）

- パフォーマンス最適化のためのフックについて説明してください。

-- パフォーマンス最適化のための主要なフック一覧 --

useMemo
→ 計算結果のメモ化（再計算を避ける）

useCallback
→ 関数のメモ化（関数の再生成を避ける）

React.memo（HOC）
→ コンポーネントのメモ化（props が同じなら再レンダリングをスキップ）

useTransition
→ 優先度の低い更新を遅延させる

useDeferredValue
→ 遅延値を使って描画の優先度を調整

- useMemo の役割と、値のメモ化における具体的な使用例を解説してください。

useMemo の役割とは？
計算済みの値を「メモ化（キャッシュ）」することで、不要な再計算を防ぎ、パフォーマンスを最適化する

【基本構文】
const memoizedValue = useMemo(() => {
return computeExpensiveValue(input);
}, [input]);

第 1 引数：計算関数（実行結果をキャッシュしたい処理）
第 2 引数：依存配列（これが変わったときのみ再実行）

【index.jsx】
// Hello というコンポーネントをメモ化

const Hello = React.memo(props => {
return <h1>Hello {props.name}</h1>;
});

メモ：
レンダリングコストが高いコンポーネントをメモ化しよう！

-- useMemo の注意点 --

毎回使う必要はない
→ 計算が重い場合や依存が変わらない場合だけで十分

過剰使用は逆効果
→ メモリ使用量が増えたり、可読性が下がったりする可能性あり

依存配列を正しく設定すること
→ 不完全だとキャッシュが効かずにバグの原因になる

- useCallback の役割と、関数のメモ化が特に有効なケースについて説明してください。

useCallback 　フックとは？
関数のメモ化（メモリにキャッシュして再利用する）に使用される
これにより、不要な再生成や再レンダリングを避け、パフォーマンスを最適化できる

【基本構文】
const memoizedCallback = useCallback(() => {
// 処理内容
}, [依存配列]);

-- 関数のメモ化が有効なケース --

1. React.memo でメモ化された子コンポーネントに 関数を props として渡すとき
2. 依存関係に関数が必要な useEffect など
3. 重い処理を伴う関数

- これらの最適化フックを使用する際の注意点（乱用を避けるべき理由など）について考察してください。

1. メモ化にもコストがある
   → React は useCallback や useMemo を使うと、内部的に依存配列を比較し、メモリにキャッシュを保持する
   キャッシュの保持自体がコストになるため、効果がない or 微小な最適化では逆効果になることがある

2. コードが複雑になる
   → 過剰な useCallback / useMemo の使用すると
   ・関数や値の定義があちこちに分かれて読みづらくなる
   ・依存配列に気を使うあまり、バグの温床になる（間違った依存関係で古い値を参照したり）

3. 最適化の意味がないケース
   ・関数が一度しか使われない（例：ボタンクリックにだけ使うハンドラー）
   ・再レンダリング回数が少ない
   ・子コンポーネントが React.memo されていない（useCallback の意味がなくなる）

まとめ
最適化は 「目的」ではなく「手段」
React が遅いと感じたとき、または明らかに再レンダリングが問題になっているときに、
実測（DevTools の Profiler など）に基づいて使うのが最も効果的

---

## 課題 4

- useReducer フックの役割と、useState と比較した場合の利点について説明してください。

useReducer フックとは？
状態の更新を「アクション」と「状態変化のロジック（reducer）」に分離して管理する

-- useReducer と useState を比較 --

複数の状態の組み合わせ
useState：読みにくくなる
useReducer：一元化できて明確

状態更新ロジックの分離
useState：難しい
useReducer：reducer 関数で分離できる

アクションベースの更新
useState：対応しにくい
useReducer：dispatch により可能

テストのしやすさ
useState：状態が複雑だと大変
useReducer：reducer のテストが容易

- reducer 関数と dispatch 関数の基本的な使い方を解説してください。

reducer 関数とは？
状態（state）をどう更新するかを定義する関数
関数型プログラミングの概念をベースにしており、副作用がなく、同じ入力には必ず同じ出力を返すことが特徴

【index1.jsx】
const reducer = (state, action) => {
switch (action.type) {
case 'INCREMENT':
return { count: state.count + 1 };
default:
return state;
}
};

dispatch 関数とは？
reducer に action を送って状態を更新させる関数
React の useReducer フックなどと一緒に使われる

【index2.jsx】
const [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: 'INCREMENT' });

- useRef フックの主な役割を 2 つ説明してください。

1. DOM 要素への参照（直接アクセス）
   → 直接 HTML 要素へアクセスして操作（例：フォーカス、スクロールなど）

2. 値の保持（再レンダリングを引き起こさない状態の保持）
   → 　更新しても UI を再描画させたくない値を保持（例：カウンター、タイマー ID）

- DOM 要素への参照を取得する方法と、レンダリング間で永続的な値を保持する方法（ただし、その変更が再レンダリングを引き起こさない点）について解説してください。

-- DOM 要素への参照を取得する方法 --

【index.jsx】

import React, { useRef, useEffect } from 'react';

const InputFocus = () => {
const inputRef = useRef(null); // ① 初期値は null

useEffect(() => {
// ② DOM がマウントされた後にアクセス
inputRef.current.focus();
}, []);

return <input ref={inputRef} />;
};

-- コード解説 --
・useRef(null) は { current: null } というオブジェクトを返す
・ref={inputRef} とすることで、DOM ノードが inputRef.current に代入される
・useEffect でマウント後に .current を安全に使える

-- レンダリング間で永続的な値を保持する方法（再レンダリングしない） --

【index.jsx】
import React, { useRef, useEffect } from 'react';

const RenderCounter = () => {
const renderCount = useRef(0); // ① 初回のみ作られる
renderCount.current += 1; // ② 再レンダリングのたびにカウントを加算

return <p>このコンポーネントは {renderCount.current} 回レンダリングされました</p>;
};

-- コード解説 --
・useRef で作ったオブジェクトは、コンポーネントが再描画されても同じ参照のまま保持される
・.current を更新しても React は再レンダリングを起こさない
・「値は更新できるけど、UI には反映されない」という性質を持つ

- カスタムフックとは何か、その目的と利点について説明してください。

カスタムフックとは？
React のフック（例：useState, useEffect）を使って自分で作る再利用可能な関数のこと
関数名は use から始める必要があり、他のフックと同じように使えるのが特徴

-- カスタムフックの利点 --

1. ロジックの再利用性
   → カスタムフックを使うことで、コンポーネント間でロジックを再利用することができる
   例えば、API からデータを取得するロジックやフォームのバリデーションなどを一つの
   カスタムフックにまとめて定義することができる

2. コンポーネントの簡素化
   → カスタムフックを使用することで、コンポーネント自体のコードがシンプルになり、関心の分離が促進される
   これにより、コンポーネントはビューの描画に集中でき、ロジックは別途管理することができる

3. テスト容易性
   → カスタムフックは単体でテストしやすい構造にできる
   これにより、フックの動作が期待通りであることを確認しやすくなる

- カスタムフックの命名規則と作成方法の基本を、簡単な具体例を用いて解説してください。

-- カスタムフックの命名規則 --

1. 必ず use で始める
   → React がその関数を「フック」として扱うためのルール

2. 命名には処理内容を端的に表すようにする

例：
処理内容：認証状態を扱う
カスタムフック名：useAuth

処理内容：ウィンドウ幅を取得
カスタムフック名：useWindowWidth

処理内容：データを取得
カスタムフック名：useFetch

処理内容：フォーム入力を制御
カスタムフック名：useFormInput

-- 作成方法の基本ステップ --

1. use から始める関数名で定義する
2. 状態や関数などを返す（return）

【index.jsx】
// useCounter（カウントするだけの簡単なフック）

import { useState } from 'react';

function useCounter() {
const [count, setCount] = useState(0); // 状態を定義

const increment = () => setCount(count + 1); // 状態を変更する関数

return { count, increment }; // 必要なものを返す
}

export default useCounter;

取り組んだ時間：16h
