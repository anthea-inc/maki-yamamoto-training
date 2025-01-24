## 課題１

- 擬似クラスとは何かについて調査し、以下の点を含めて説明してください。

- 擬似クラスの基本的な概念
- 使用する際の構文

擬似クラスとは、要素の状態を指定することができるセレクターのことをいう
コロン（:）を用いて記述され、複数の擬似クラスを組み合わせることも可能

使用例　解説：
ユーザーが div 要素の上にカーソルを置いた際に発生する動的な状態を選択

使用例：
div:hover {
/_ スタイルの定義 _/
}

---

## 課題 2

- 以下の擬似クラスについて調査し、それぞれの役割と使用例を説明してください。

- :link
  役割：訪問していないリンク（<a>要素）に適用されるスタイルを指定する

  使用例　解説：
  訪問していないリンクのテキストカラーを青にし、下線を非表示にする

  使用例：
  a:link {
  color: blue;
  text-decoration: none;
  }

- :visited
  役割：訪問したリンク（<a>要素）に適用されるスタイルを指定する

  使用例　解説：
  訪問済みのリンクは紫色になり、下線が表示される

  使用例：
  a:visited {
  color: purple;
  text-decoration: underline;
  }

- :hover
  役割：要素にカーソルが重なったときのスタイルを指定する

  使用例　解説：
  カーソルがリンクに重なると、リンクのテキストカラーが赤に変わり、下線が表示される

  使用例：
  a:hover {
  color: red;
  text-decoration: underline;
  }

- :active
  役割：ユーザーが要素をアクティブにしている状態を示す（リンクやボタンをクリックしている間など）

  使用例　解説：
  ボタンを押している間、背景色が変更される

  使用例：
  button:active {
  background-color: #005f5f;
  }

- :focus
  役割：要素がフォーカスを受けている状態を示す（タブキーで移動したり、クリックしてアクティブにしたときなど）

  使用例　解説：
  フォーカスを受けた入力フィールドのボーダー色が変更される

  使用例：
  input:focus {
  border-color: #007bff;
  }

- :disabled
  役割：無効化されている状態の要素を示す（ユーザーが操作できないフォーム要素など）

  使用例　解説：
  無効なボタンは背景色が灰色になり、カーソルが「禁止マーク」に変わる

  使用例：
  button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  }

- :enabled
  役割：有効な状態の要素を示す（ユーザーが操作できる要素に適用）

  使用例　解説：
  有効な入力フィールドのボーダーが緑色になる

  使用例：
  input:enabled {
  border: 2px solid #28a745;
  }

- :checked
  役割：チェックされている状態の要素を示す

  使用例　解説：
  チェックボックスが選択されると、関連するラベルに打ち消し線が追加される

  使用例：
  input[type="checkbox"]:checked + label {
  text-decoration: line-through;
  }

- :first-child
  役割：親要素の最初の子要素にスタイルを適用する

  使用例　解説：
  「Item 1」の文字色が赤くなる

  使用例：
  【HTML】
   <ul>
    <li>Item 1</li>　← 適用箇所
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

【CSS】
li:first-child {
color: red;
}

- :last-child
  役割：親要素の最後の子要素にスタイルを適用する

  使用例　解説：
  「Item 3」の文字色が赤くなる

  使用例：
  【HTML】
   <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>　← 適用箇所
  </ul>

【CSS】
li:last-child {
color: red;
}

- :nth-child(n)
  役割：親要素の n 番目の子要素にスタイルを適用する

  使用例　解説：
  「Item 3」に背景色「lightgray」が適用される

  使用例：
  【HTML】
   <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>　← 適用箇所
  </ul>

【CSS】
li:nth-child(3) {
background-color: lightgray;
}

---

メモ：
固定値: :nth-child(2) → 2 番目の子要素に適用
奇数: :nth-child(odd) → 奇数番目の子要素に適用
偶数: :nth-child(even) → 偶数番目の子要素に適用
式: :nth-child(3n+1) → 3 の倍数 + 1 の要素に適用 (1, 4, 7, ...)

---

- :only-child
  役割：親要素の唯一の子要素にスタイルを適用する

  使用例　解説：
  「Item 1」だけが太字になる

  使用例：
  【HTML】
    <div>
      <p>Item 1</p>　← 適用箇所
    </div>

    <div>
      <p>Item 2</p>
      <p>Item 3</p>
    </div>
    
  【CSS】
    p:only-child {
    font-weight: bold;
  }

- :not(selector)
  役割：指定されたセレクタに一致しない要素にスタイルを適用する

  使用例　解説：
  class="highlight" が指定されていない「Item 1」と「Item 3」に下線が引かれる

  使用例：
  【HTML】
    <ul>
    <li>Item 1</li>
    <li class="highlight">Item 2</li>
    <li>Item 3</li>
  </ul>

  【CSS】
  li:not(.highlight) {
  text-decoration: underline;
  }

## 課題 3

- 上記で挙げられていない擬似クラスを 3 つ調査し、以下の項目を含めて説明してください。

- 擬似クラスの名前と基本的な機能
- どのような場面で活用できるか

- :root
  基本機能：
  文書のルート要素（通常は <html>）を対象にスタイルを適用する

  使用場面：
  すべてのページに適用されるテーマカラーやフォントの設定

- :empty
  基本機能：
  子要素やテキストコンテンツを持たない要素に適用する

  使用場面：
  空の要素に特別なスタイルを適用して、視覚的に目立たせたり、非表示にしたりする場合

- :read-only
  基本機能：
  ユーザーが編集できない（読み取り専用）要素に適用する
  使用場面：
  フォームの読み取り専用フィールドに異なるスタイルを適用させて視覚的にわかりやすくする場合
