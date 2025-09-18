# 課題 1

- 以下の比較演算子について調査し、それぞれの役割を説明してください。

-- 厳密等価演算子（===） --
役割：左右の値が「型も値も」同じである場合に true を返す
→ 型が異なる場合は、自動的な型変換を行わずに false を返す

【index.js】
console.log(5 === 5); // true（型も値も同じ）
console.log(5 === "5"); // false（型が異なる）
console.log(null === undefined); // false（型が異なる）

-- 厳密不等価演算子（!==） --
役割：左右の値が「型または値のいずれか」が異なる場合に true を返す
→ 型も値も同じ場合は false を返す

【index.js】
console.log(5 !== 5); // false（型も値も同じ）
console.log(5 !== "5"); // true（型が異なる）
console.log(null !== undefined); // true（型が異なる）

-- 等価演算子（==） --
役割：左右の値が「値が等しい」場合に true を返す
→ 型が異なる場合でも型変換を行い、一致すれば true を返す

【index.js】
console.log(5 == "5"); // true（型変換が行われ、値が同じと判断）
console.log(null == undefined); // true（どちらも「値なし」とみなされる）
console.log(0 == false); // true（`false`は`0`に変換される）

-- 不等価演算子（!=） --
役割：左右の値が「値が等しくない」場合に true を返す
→ 型が異なる場合でも型変換を行い、一致すれば false を返す

【index.js】
console.log(5 != "5"); // false（型変換され、値が等しいと判断）
console.log(null != undefined); // false（どちらも「値なし」とみなされる）
console.log(0 != false); // false（`false`が`0`に変換される）
console.log(5 != 10); // true（値が異なる）

-- 大なり (>) --
役割：左側の値が右側の値より「大きい」場合に true を返す

【index.js】
console.log(10 > 5); // true（10 は 5 より大きい）
console.log(5 > 10); // false（5 は 10 より小さい）
console.log("b" > "a"); // true（文字列は Unicode の辞書順で比較）
console.log(5 > "2"); // true（"2"は数値の 2 に変換される）

-- 大なりイコール (>=) --
役割：左側の値が右側の値より「大きい、または等しい」場合に true を返す

【index.js】
console.log(10 >= 10); // true（等しい）
console.log(10 >= 5); // true（大きい）
console.log(5 >= 10); // false（小さい）
console.log("b" >= "a"); // true（Unicode 順で「b」は「a」より後）
console.log(5 >= "5"); // true（"5"は数値の 5 に変換される）

-- 小なり（<） --
役割：左側の値が右側の値より「小さい」場合に true を返す

【index.js】
console.log(5 < 10); // true（5 は 10 より小さい）
console.log(10 < 5); // false（10 は 5 より大きい）
console.log("a" < "b"); // true（Unicode 順で「a」は「b」より前）
console.log(5 < "10"); // true（"10"は数値の 10 に変換される）

-- 小なりイコール（<=） --
役割：左側の値が右側の値より「小さい、または等しい」場合に true を返す

【index.js】
console.log(5 <= 10); // true（5 は 10 より小さい）
console.log(10 <= 10); // true（等しい）
console.log(10 <= 5); // false（10 は 5 より大きい）
console.log("a" <= "b"); // true（Unicode 順で「a」は「b」より前）
console.log(5 <= "5"); // true（"5"は数値の 5 に変換される）

- なぜ、等価演算子（==）ではなく、厳密等価演算子（===）を使うべきなのかを説明してください。

==（等価演算子）は、比較する値の型が異なる場合に型変換（暗黙的な型変換）を行ったうえで比較する
===（厳密等価演算子）は型変換を行わずに、型と値の両方が一致しているかどうかを判定する
この違いにより、「==」を使うと意図しない型変換が発生し、バグの原因になりやすいため、「===」の使用が推奨されている

---

# 課題 2

- 以下の論理演算子について調査し、それぞれの役割を説明してください。

-- AND 演算子（&&） --
役割：論理積（AND）を表す。両方の条件が真（true）の場合のみ true を返します。それ以外は false になる

【index.js】
let a = true;
let b = false;

console.log(a && b); // false
console.log(a && true); // true
console.log(b && false); // false

-- OR 演算子（||） --
役割：論理和（OR） を表す。少なくとも 1 つの条件が真（true）であれば true を返す
→ 両方 false の場合のみ false になる

【index.js】
let a = true;
let b = false;

console.log(a || b); // true
console.log(b || false); // false
console.log(a || true); // true

-- NOT 演算子（!） --
役割：否定（NOT） を表す。「true → false」 「false → true」 に反転させる

【index.js】
let a = true;
let b = false;

console.log(!a); // false
console.log(!b); // true
console.log(!(a && b)); // true (a && b は false なので、NOT によって true になる)

- OR (||) の短絡評価について具体的なコード例を使って説明してください。
  短絡評価（ショートサーキット評価）とは、論理演算子（&& や ||）を使う際に、左側の式の結果だけで全体の評価が決まる場合、右側の式を評価せずに処理を終える仕組みのこと
  OR (||)の短絡評価は、左側が 「true」 なら左側の値を返し、「false」なら右側の値を返す

【index.js】
console.log(true || "右側は実行されない"); // true
console.log(false || "右側が実行される"); // "右側が実行される"

---

# 課題 3

- Null 合体演算子（??）の役割と使い方を説明してください。

左側の値が null または undefined の場合に、右側の値を返す演算子
それ以外の値（false、0、"" など）はそのまま返す

【index.js】
let result = a ?? b;

・a が null または undefined の場合 → b を返す
・a が それ以外の値（0, “”, false など） の場合 → a を返す
