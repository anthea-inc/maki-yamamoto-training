//　実践課題２

const andExample = 10 > 5 && 5 > 2;
console.log(andExample);

const orExample = 10 < 5 || 5 > 2;
console.log(orExample);

const notExample = !(10 > 5);
console.log(notExample);

console.log("Hello" || "デフォルト値");
console.log("" || "デフォルト値");
console.log(0 || "デフォルト値");
console.log(null || "デフォルト値");

/*
-- 実践課題２　解答 --
論理 OR (||) の評価ルール
	1.	左側の値が truthy（真とみなされる値）なら、その値をそのまま返す。
	2.	左側の値が falsy（偽とみなされる値）なら、右側の値を返す。

console.log('Hello' || 'デフォルト値'); // 'Hello'（truthy → そのまま返す）
console.log('' || 'デフォルト値');      // 'デフォルト値'（falsy → 右側を返す）
console.log(0 || 'デフォルト値');      // 'デフォルト値'（falsy → 右側を返す）
console.log(null || 'デフォルト値');   // 'デフォルト値'（falsy → 右側を返す）

短絡評価：結果が決まった時点で評価を打ち切ること。
*/
