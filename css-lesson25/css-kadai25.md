## 課題１

- box-sizing プロパティの 2 つの値（content-box、border-box）について、以下の点を説明してください。

- それぞれの値における要素の実際の表示サイズの計算方法
- 値の違いによって生じる実際の表示への影響
- それぞれの特徴と適切な使用場面

【要素の実際の表示サイズの計算方法】
「content-box（デフォルトの値）」

【CSS】
.box {
width: 200px;
height: 100px;
padding: 10px;
border: 5px solid black;
box-sizing: content-box; /_ デフォルト _/
}

幅（＋）
200px (content)
10px (left padding)
10px (right padding)
5px (left border)
5px (right border) = 230px

高さ（＋）
100px (content)
10px (top padding)
10px (bottom padding)
5px (top border)
5px (bottom border) = 130px

---

「border-box」

幅：
content = width - (padding × 2) - (border × 2)

高さ：
content = height - (padding × 2) - (border × 2)

【CSS】
.box {
width: 200px;
height: 100px;
padding: 10px;
border: 5px solid black;
box-sizing: border-box;
}

この場合、実際の表示サイズは width: 200px / height: 100px のまま変わらないが、コンテンツ部分のサイズは次のように縮小される

実際のコンテンツの幅：
200px - （10px ＊ 2 (padding)） - （5px ＊ 2 (border)） = 170px

実際のコンテンツの高さ：
100px - （10px ＊ 2 (padding)） - （5px ＊ 2 (border)） = 70px

---

【値の違いによって生じる実際の表示への影響】

【CSS】
.box {
width: 200px;
padding: 20px;
border: 10px solid black;
box-sizing: content-box;
}

「content-box（デフォルトの値）」
実際の表示サイズ
width = 200px

padding 20px × 2
border 10px × 2
合計 → 260px

結果：想定より大きくなる（外側のサイズが増える）

【CSS】
.box {
width: 200px;
padding: 20px;
border: 10px solid black;
box-sizing: border-box;
}

「border-box」
実際の表示サイズ
width = 200px のまま変わらない
padding や border の分、コンテンツ領域が狭くなる

結果：想定通りのサイズに収まる（外側のサイズが増えない）

---

【それぞれの特徴と適切な使用場面】
「content-box（デフォルトの値）」
特徴：width や height は コンテンツのサイズ を指し、padding や border は含まれない
使用場面：画像やテキストなど、コンテンツサイズを正確に指定したいとき

注意点：
padding や border を追加すると、要素の合計サイズが変わるため、レイアウトが崩れることがある

「border-box」
特徴：width や height は コンテンツ + padding + border を含めたサイズ になる
使用場面：ボタンやカードレイアウト など、パディングやボーダーが影響を与えにくいデザインを作るとき

注意点：
content-box から変更すると、要素の見た目のサイズが変わる可能性がある

---

## 課題 2

- box-sizing: border-box が一般的に推奨される理由を考察してください。

・レイアウトの計算が簡単になる
　 → width や height に padding と border が含まれる ため、要素の実際のサイズを計算しやすくなる

・要素の崩れを防ぐ
　 → 要素が指定サイズ内に収まりやすくなり、一貫性のあるデザインを維持しやすくなる
