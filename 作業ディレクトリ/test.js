// Set の作成
const AnimalMeats = new Set();

// add(): 要素を追加（重複は追加されない）
AnimalMeats.add("鶏もも肉");
AnimalMeats.add("鶏胸肉");
AnimalMeats.add("豚肉");
AnimalMeats.add("鶏もも肉"); // これは無視される（重複）

console.log(AnimalMeats); // Set(3) { '鶏もも肉', '鶏胸肉', '豚肉' }

// has(): 値の存在を確認
console.log(AnimalMeats.has("豚肉")); // true
console.log(AnimalMeats.has("馬肉")); // false

// delete(): 特定の要素を削除
AnimalMeats.delete("鶏胸肉");
console.log(AnimalMeats); // Set(2) { '鶏もも肉', '豚肉' }

// clear(): 全要素を削除
AnimalMeats.clear();
console.log(AnimalMeats); // Set(0) {}
