//　実践課題１
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【1-1】");
console.log("Hello\nWorld");
console.log("");

console.log("Hello\tWorld");
console.log("");

console.log(`"Hello" "World"`);
console.log("");

//　実践課題２
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【2-1】");
const str = "JavaScript";

console.log("インデックスアクセスを使って取得");
const firstChar1 = str[0];
console.log(firstChar1);
console.log("");

console.log(" String.prototype.at() を使って取得");
const firstChar2 = str.at(0);
console.log(firstChar2);
console.log("");

//　実践課題３
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【3-1】");
const csv = "apple,banana,cherry";

// カンマで分割し、配列に変換
const fruitsArray = csv.split(",");

// 各要素の前後に "fruit:" を付け加え
const modifiedArray = fruitsArray.map((fruit) => `fruit:${fruit}`);

// 再びカンマ区切りの文字列に戻す
const modifiedCsv = modifiedArray.join(",");

console.log(modifiedCsv);
console.log("");

//　実践課題４
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【4-1】");
const text = "Java Script";

console.log("-- Java Scriptの文字数をカウント --");
console.log(text.length);
console.log("");

console.log("【4-2】");
console.log("-- 空文字列の場合 --");
console.log("".length);
console.log("");

console.log("-- スペース込みの文字列の場合 --");
console.log(" ".length);
console.log("");

//　実践課題５
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【5-1】");
const str2 = "JavaScript is fun!";

console.log("-- sliceを使って最初の10文字を取得 --");
const first10 = str2.slice(0, 10);
console.log(first10);

console.log("-- substringを使って11文字目以降を取得 --");
const rest = str2.substring(10);
console.log(rest);

//　実践課題６
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【6-1】");
const str3 = "I love JavaScript and JavaScript loves me.";

console.log("-- indexOfを使って最初に「JavaScript」が出現する位置を取得 --");
const firstIndex = str3.indexOf("JavaScript");
console.log(firstIndex);
console.log("");

console.log("-- lastIndexOfを使って最後に「JavaScript」が出現する位置を取得 --");
const lastIndex = str3.lastIndexOf("JavaScript");
console.log(lastIndex);
console.log("");

console.log("-- startsWithを使って文字列が「I love」で始まるか確認 --");
const startsWithILove = str3.startsWith("I love");
console.log(startsWithILove);
console.log("");

console.log("-- endsWithを使って文字列が「me.」で終わるか確認 --");
const endsWithMe = str3.endsWith("me.");
console.log(endsWithMe);
console.log("");

console.log("-- includesを使って文字列に「and」が含まれているか確認 --");
const includesAnd = str3.includes("and");
console.log(includesAnd);
console.log("");

//　実践課題７
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【7-1】");
const str4 = "I like cats. Cats are very cute. I have a cat.";

console.log("-- 最初に出現する 「cat」 を 「dog」 に置換 --");
const replacedStr = str4.replace("cat", "dog");
console.log(replacedStr);
console.log("");

console.log("-- 全ての「cat」 を 「dog」 に置換 --");
const replacedAllStr = str4.replaceAll("cat", "dog");
console.log(replacedAllStr);
console.log("");
