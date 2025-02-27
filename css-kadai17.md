## 課題１

- 以下の結合子について、それぞれの役割を説明してください。

子孫結合子 (descendant combinator)(space)
役割：ある要素の中に含まれるすべての子孫要素にスタイルを適用する

【CSS】
section div p {
font-weight: bold;
color: green;
}

【HTML】

<section>
	<p>テキスト1</p>
	<div>
		<p>テキスト2</p>　← スタイルが適用される
	</div>
	<p>テキスト3</p>
</section>

---

子結合子 (child combinator)(>)
役割：指定された要素の直下の子要素だけに適用する

【CSS】
section > p {
font-weight: bold;
color: blue;
}

【HTML】

<section>
	<p>テキスト1</p>　← スタイルが適用される
	<div>
		<p>テキスト2</p> ← 直接の親要素がdiv要素になるためスタイルが適用されない
	</div>
	<p>テキスト3</p>　← スタイルが適用される
</section>

---

次兄弟結合子 (next-sibling combinator)(+)
役割：ある要素の次に連続して存在する兄弟要素にスタイルを適用する
（「h1 + p」左の要素に隣接する要素（p）にのみスタイルを適用する）
メモ：隣接兄弟結合子ともいう

【CSS】
h1 + p {
font-weight: bold;
color: blue;
}

【HTML】

<h1>見出し</h1>
	<p>テキスト1</p>　← スタイルが適用される
	<p>テキスト2</p>
	<p>テキスト3</p>

---

後続兄弟結合子 (subsequent-sibling combinator)(~)
役割：特定の要素に続く兄弟要素を選択する
（「h1 ~ p」左側にある要素より後にあり、かつ同じ階層（同じ親要素を持つ）の要素にスタイルを適用する）
メモ：一般兄弟結合子ともいう

【CSS】
h1 ~ p {
font-weight: bold;
color: #c00;
}

【HTML】

<p>テキスト1</p>　← h1要素より前にあるため、スタイルは適用されない
	<h1>見出し</h1>
	<p>テキスト2</p>　← スタイルが適用される
	<div>
		<p>テキスト3</p>　← 同じ階層ではないため、スタイルは適用されない
	</div>
	<p>テキスト4</p>　← スタイルが適用される
  
---

セレクターリスト (selector list)(,)
役割：複数のセレクターを同時に指定し、それぞれにスタイルを適用する

【CSS】
h1, h2 {
font-weight: 20px;
color: lime;
}

【HTML】

<h1>テキスト1</h1>　← スタイルが適用される
<h2>テキスト2</h2>　← スタイルが適用される
<h3>テキスト3</h3>　← スタイルが適用されない

---

おまけメモ
【複数の結合子を組み合わせて階層指定を絞り込む】

【CSS】
section h1 ~ div > p {
color: #00f;
}

【HTML】

<section>
	<p>テキスト1</p>
	<h1>見出し</h1>
	<p>テキスト2</p>
	<div>
		<p>テキスト3</p>　← スタイルが適用される
	</div>
	<p>テキスト4</p>
</section>
