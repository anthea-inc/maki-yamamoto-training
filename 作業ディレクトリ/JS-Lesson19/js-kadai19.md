## 課題 1

- JSON の定義および基本的な特徴について説明してください。

JSON（JavaScript Object Notation） は、データを人間にも読みやすく、機械にも解析しやすい形式で表現するための軽量なデータ記述フォーマット
JavaScript の構文に基づいているが、多くのプログラミング言語で利用することができる

特徴
・テキストベースで軽量
・キーと値のペアによる構造（オブジェクト）
・値の配列を扱える（リスト構造）
・入れ子構造（ネスト）をサポート
・データ交換フォーマットとして広く利用されている

【JSON 形式　例】
{
"name": "Tanaka",
"age": 27,
"isStudent": false,
"skills": ["JavaScript", "Python", "HTML"]
}

メモ：
JSON の「JS」って JavaScript のことだったのか！！！！！！！！！！！

- JSON が実際のシステムでどのように利用されているか、具体例を交えて解説してください。

1. Web API でのデータ通信
   → Web アプリケーションとサーバー間でデータを送受信する際、JSON が一般的に使われる

2. モバイルアプリとサーバーの通信
   → iOS や Android アプリも、バックエンドとのデータのやり取りに JSON を利用することが多い

3. 設定ファイルとしての利用
   → 多くのアプリケーションやライブラリが、設定情報を config.json のようなファイルに保存している

4. データの永続化や転送
   → 一時的なデータ保存や他システムへの転送のために、データベースやファイルに JSON 形式で出力することもある

---

## 課題 2

- 以下のメソッドの役割について説明してください。

-- JSON.parse --

役割：JSON 形式の文字列を、JavaScript のオブジェクトや配列に変換する

【index.js】
const jsonStr = '{"name":"Makimaki","age":24}';
const obj = JSON.parse(jsonStr);
console.log(obj.name); //Makimaki

メモ：
サーバーから受け取ったデータ（JSON 文字列）を JavaScript で扱えるようにする

-- JSON.stringify --

役割：JavaScript のオブジェクトや配列を、JSON 形式の文字列に変換する

【index.js】
const obj = { name: "Makimaki", age: 24 };
const jsonStr = JSON.stringify(obj);
console.log(jsonStr); // {"name":"Makimaki","age":24}

メモ：
データをサーバーに送るときや、ローカルストレージに保存するときに使う
