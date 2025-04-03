const taro1 = '{ "name": "Taro", "age": 25, "email": "taro@example.com" }';

const user = JSON.parse(taro1); // taro1 を JSON.parse したい
//でもここ、JavaScriptの“オブジェクト”をJSON.parseしてるから怒られちゃう

console.log(user);

user.age += 5; // 年齢足す
user.address = "Tokyo";

const jsonStr = JSON.stringify(user);
console.log(jsonStr);
