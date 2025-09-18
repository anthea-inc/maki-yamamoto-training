//　実践課題３

console.log("Alice" ?? "ゲスト");
console.log("" ?? "ゲスト");
console.log(null ?? "ゲスト");
console.log(undefined ?? "ゲスト");

/*
-- 実践課題３　解答 --
Null 合体演算子（??）

左側の値が null または undefined の場合に、右側の値を返す演算子
それ以外の値（false、0、"" など）はそのまま返す


-- Null 合体演算子（??）とOR演算子 (||)の出力結果の違い --

【Null 合体演算子（??）】
console.log('Alice' ?? 'ゲスト');  // → 'Alice'
console.log('' ?? 'ゲスト');       // → ''
console.log(null ?? 'ゲスト');     // → 'ゲスト'
console.log(undefined ?? 'ゲスト'); // → 'ゲスト'

【OR演算子 (||)】
console.log('Alice' || 'ゲスト');  // → 'Alice'
console.log('' || 'ゲスト');       // → 'ゲスト'
console.log(null || 'ゲスト');     // → 'ゲスト'
console.log(undefined || 'ゲスト'); // → 'ゲスト'
*/
