# 課題１

- グリッドレイアウトとは何かについて調査し、以下の点を含めて説明してください。

・グリッドコンテナー
・グリッドアイテム

グリッドレイアウトとは、ウェブページのデザインを 「縦（行）」と「横（列）」のマス目（グリッド）で整理する方法
このレイアウトを使うと、画面上の要素をきれいに並べたり、大きさを自由に変えたりできる

グリッドコンテナー：グリッドレイアウトの親要素で、行や列の設定を行う
グリッドアイテム：グリッド内に配置される子要素で、行や列の範囲や配置を指定できる

---

# 課題 2

- 以下のグリッドコンテナーのプロパティについて調査し、それぞれの役割を説明してください。

grid-template-columns
役割：カラム（列）の幅や数を定義する

【CSS】
.grid-container {
display: grid;
grid-template-columns: 100px 200px auto;
}
↑ １列目：100px、２列目：200px、３列目：残りのスペースを自動調整

grid-template-rows
役割：行（row）の高さを定義する

grid-template-areas
役割：エリア（名前付きの領域）を指定する

justify-content
役割：コンテナ内で、グリッドアイテム（列全体）の 水平方向 の配置方法を指定する

---

メモ：
start：左寄せ（デフォルト）
center：中央寄せ
end：右寄せ
space-between：アイテム間の間隔を均等に配置
space-around：アイテム間＋左右に均等な間隔
space-evenly：アイテム間＋左右を完全に均等

---

align-content
役割：グリッド全体（行の集合）を 垂直方向 にどのように配置するかを指定する
メモ：グリッドコンテナがグリッドの合計高さより大きい場合に影響する

place-content
役割：「align-content」（縦方向）と「justify-content」（横方向）を 同時に指定する
メモ：値の書き方「align-content」、「justify-content」の順

column-gap
役割：グリッドのカラム（列）の間隔 を指定する

row-gap
役割：グリッドの行の間隔 を指定する

gap
役割：「row-gap」（行の間隔）と「column-gap」（列の間隔）を同時に指定する
メモ：値の書き方「row-gap」、「column-gap」の順

---

# 課題 3

- 以下のグリッドアイテムのプロパティについて調査し、それぞれの役割を説明してください。

grid-column
役割：グリッドアイテムを どの列からどの列まで配置するかを一括で指定する

grid-column-end
役割：グリッドアイテムの 終了する列の位置を指定する

grid-column-start
役割：グリッドアイテムの 開始する列の位置を指定する

grid-row
役割：「grid-row-start」と「grid-row-end」を 一括で指定し、アイテムの縦方向の占有範囲を設定する
【CSS】
.item {
grid-row: 1 / 3; /_ １行目から ３行目の直前まで（=１行目と２行目を占有） _/
}

grid-row-end
役割：グリッドアイテムの終了する行の位置を指定する

grid-row-start
役割：グリッドアイテムの開始する行の位置を指定する

grid-area
役割：グリッドアイテムを特定のグリッド領域に配置する

---

メモ：
grid-area: row-start / column-start / row-end / column-end;
↓ この場合、グリッドアイテムは ２行目から ４行目、１列目から ３列目の範囲に配置される ↓

【CSS】
.item {
grid-area: 2 / 1 / 4 / 3;
}

---

justify-self
役割：グリッドアイテムの水平方向（横方向）の配置を指定する
メモ：grid や inline-flex のコンテナ内で使える

align-self
役割：グリッドアイテムの垂直方向（縦方向）の配置を指定する

place-self
役割：「align-self」（縦方向）と「justify-self」（横方向）をまとめて指定できる
メモ： １つの値しか指定しない場合、両方に同じ値が適用される
