//　実践課題１

const id = 1111;
const name = "Maki Yamamoto";

const person = {
  id,
  name,
  "job-title": "Software Engineer",
  "birth date": "2000-04-23",
  address: {
    city: "Yokohama",
    country: "Japan",
  },
};

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("-- Step1 オブジェクトの作成 --");
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");

console.log(person);

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("-- Step2 プロパティへのアクセスと追加 --");
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");

// ドット記法
console.log("↓2-1:ドット記法↓");

console.log(person.name);
console.log(person.address.city);
console.log("");

// テンプレートリテラル
console.log("↓テンプレートリテラルを活用してみた↓");

console.log(`${person.name}\n${person.address.city}`);
console.log("");

// ブラケット記法
console.log("↓2-2:ブラケット記法↓");

console.log(person["birth date"]);
console.log(person["job-title"]);
console.log("");

// Optional chaining 演算子 (?.)
console.log("↓2-3:Optional chaining 演算子 (?.)↓");

console.log(person?.favorite);
console.log("");

// ブラケット記法でプロパティを追加
console.log("↓2-4:ブラケット記法でプロパティを追加↓");

const newPropKey = "Step2-4 hobby";
person[newPropKey] = 5;
console.log(person);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("-- Step３ プロパティの変更・削除とオブジェクトの凍結 --");
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");

// 「name」プロパティの値を変更
console.log("↓3-1:「name」プロパティの値を変更↓");

console.log("変更前:", person);
person.name = "poyomaru";
console.log("変更後:", person);
console.log("");

// 「birth date」プロパティを削除
console.log("↓3-2:「birth date」プロパティを削除↓");

delete person["birth date"];
console.log(person["birth date"]); //　プロパティ名にスペースが含まれていてドット記法を使用できないため、ブラケット記法を使用
console.log("");

// Object.freeze
console.log("↓3-3:Object.freezeのテスト↓");

const frozenPerson = {}; // frozenPersonオブジェクトを作成
Object.freeze(frozenPerson); // オブジェクトを凍結
frozenPerson.fruits = 3; // fruitsプロパティを追加しようとする
console.log(frozenPerson); // 結果をコンソールに表示（凍結前と同じ空のオブジェクトが表示される）
console.log("");

// プロパティの存在確認
console.log("↓3-4:プロパティの存在確認↓");

console.log("【in 演算子】");
console.log("id:", "id" in person);
console.log("nonExistingProp:", "nonExistingProp" in person);
console.log("");

console.log("【Object.hasOwn】");
console.log("id:", Object.hasOwn(person, "id")); // true
console.log("nonExistingProp:", Object.hasOwn(person, "nonExistingProp"));
console.log("");

console.log("【Object.prototype.hasOwnProperty】");
console.log("id:", person.hasOwnProperty("id"));
console.log("nonExistingProp:", person.hasOwnProperty("nonExistingProp"));
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("-- Step４ オブジェクトの情報取得とマージ --");
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("");

// オブジェクトキー
console.log("↓4-1:オブジェクトキー↓");

console.log("Keys:", Object.keys(person)); // キーの一覧を出力
console.log("Values:", Object.values(person)); // 値の一覧を出力
console.log("Entries:", Object.entries(person)); // キーと値の組み合わせを出力
console.log("");

// for…in文
console.log("↓4-2:for…in文↓");

for (let key in person) {
  console.log(key, person[key]);
}
console.log("");

// 「additionalInfo」オブジェクトを作成
console.log("↓4-3:「additionalInfo」オブジェクトを作成↓");
console.log("");

const additionalInfo = {
  nationality: "Japanese",
  age: 35,
};
console.log("");

// Object.assign
console.log("↓4-4:Object.assign↓");

const merged = Object.assign(person, additionalInfo);
console.log(merged);
console.log("");

// スプレッド構文
console.log("↓4-5:スプレッド構文↓");

console.log("スプレッド構文を使用したマージ");
const merged2 = { ...person, ...additionalInfo };
console.log(merged2);

console.log("スプレッド構文を使用したオブジェクトの複製");
const copy = { ...person };
console.log(copy);
