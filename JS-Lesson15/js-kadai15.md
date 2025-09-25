## 課題 1

- クラスとは何か、その定義方法について調査し、JavaScript のサンプルコードを用いて説明してください。

クラスとは、データと処理をまとめたもので設計図のようなもの
クラスの中で作ったものは、インスタンス化しないと使えない

データ：プロパティ
処理：メソッド

【index.js】
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

introduce() {
console.log(`こんにちは、私は ${this.name} です。${this.age} 歳です。`);
}
}

// インスタンスを作成
const user1 = new Person("Maki", 24);
user1.introduce();

【出力結果】
こんにちは、私は Maki です。24 歳です。

-- コード解説 --
・class Person で Person クラスを定義
・constructor はインスタンス生成時に呼ばれ、name と age をセットする。
・introduce() メソッドで自己紹介を出力する

- インスタンスの概念および、クラスからのインスタンス生成手順を、具体的なコード例とあわせて解説してください。

インスタンス とは、クラスをもとに作成された具体的なオブジェクトのこと
クラスは「設計図」、インスタンスは「その設計図から作られた実体」と考えると分かりやすい

【例】
「車」というクラス（設計図）を定義すると、それをもとに「トヨタのカローラ」や「ホンダのフィット」といった具体的なインスタンス（実体）を作成できる

【index.js】
// クラスの定義
class Car {
constructor(brand, model) {
this.brand = brand; // メーカー名
this.model = model; // 車種名
}

displayInfo() {
console.log(`この車は ${this.brand} の ${this.model} です。`);
}
}

// インスタンスの作成
const car1 = new Car("トヨタ", "カローラ");
const car2 = new Car("ホンダ", "フィット");

// メソッドの実行
car1.displayInfo();
car2.displayInfo();

【出力結果】
この車は トヨタ の カローラ です。
この車は ホンダ の フィット です。

-- コード解説 --
・class Car を定義
・constructor(brand, model) で、インスタンス作成時にメーカー名と車種名をセット
・new Car("トヨタ", "カローラ") で car1 インスタンスを作成
・displayInfo() メソッドを使い、インスタンスの情報を表示

- クラスのプロトタイプメソッドとアクセッサプロパティの役割や利用例を、実際のコードを示しながら説明してください。

-- プロトタイプメソッド --

・クラスで定義したメソッドは、インスタンスのプロトタイプオブジェクトに登録される
・インスタンスごとにメソッドがコピーされるのではなく、共通のメソッドを共有する ことでメモリを節約できる

【index.js】
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

// プロトタイプメソッド
introduce() {
console.log(`こんにちは、私は ${this.name} です。${this.age} 歳です。`);
}
}

// インスタンス生成
const user1 = new Person("太郎", 15);
const user2 = new Person("花子", 14);

// メソッドの呼び出し
user1.introduce();
user2.introduce();

// プロトタイプオブジェクトを確認
console.log(Person.prototype); // { introduce: [Function (anonymous)] }

【出力結果】
こんにちは、私は 太郎 です。15 歳です。
こんにちは、私は 花子 です。14 歳です。
{}

-- アクセッサプロパティ --
・getter：プロパティを取得する際に自動的に呼び出される関数
・setter：プロパティに値を設定する際に自動的に呼び出される関数
・直接プロパティへアクセスさせずに、取得・設定のタイミングで処理を挟むことができる
・カプセル化（内部データの保護）に役立つ

【index.js】
class User {
#name; // private フィールド

constructor(name) {
this.#name = name;
}

// getter
get name() {
return this.#name;
}

// setter
set name(newName) {
if (newName.length >= 2) {
this.#name = newName;
} else {
console.log("名前は 2 文字以上で入力してください");
}
}
}

const user = new User("太郎");

// getter による取得
console.log(user.name); // 太郎

// setter による変更
user.name = "花子";
console.log(user.name); // 花子

user.name = "A"; // 名前が短すぎる → エラーメッセージ

【出力結果】

---

## 課題 2

- public クラスフィールドと private クラスフィールドの違いについて、具体例を用いて詳細に説明してください。

-- public クラスフィールド --
・どこからでもアクセスできる フィールド（プロパティ）
・インスタンスからも、クラスの外部からも自由に変更・取得できる

【index.js】
class Person {
// public フィールド（外部からアクセス可能）
name;
age;

constructor(name, age) {
this.name = name;
this.age = age;
}

greet() {
console.log(`こんにちは、私は ${this.name} です。${this.age} 歳です。`);
}
}

const user = new Person("太郎", 30);

// public フィールドなので自由にアクセスできる
console.log(user.name); // 太郎
console.log(user.age); // 30

// public フィールドなので自由に変更できる
user.name = "花子";
console.log(user.name); // 花子

-- private クラスフィールド --
・クラスの内部でのみアクセス可能 なフィールド
・インスタンスや外部から 直接アクセスできない（エラーが出る）
・# をフィールド名の前に付けることで定義する

【index.js】
class Person {
// private フィールド（#をつける）
#name;
#age;

constructor(name, age) {
this.#name = name;
this.#age = age;
}

greet() {
console.log(`こんにちは、私は ${this.#name} です。${this.#age} 歳です。`);
}
}

const user = new Person("太郎", 30);

//　 private フィールドは外部から直接アクセスできない
console.log(user.#name); // ❌ エラー: Private field '#name' must be declared in an enclosing class
console.log(user.#age); // ❌ エラー: Private field '#age' must be declared in an enclosing class

// メソッドを通じて private フィールドを取得
user.greet(); // ✅ こんにちは、私は 太郎 です。30 歳です。

- クラスフィールド内での this が、どのようにインスタンス自身を指すのかを示すコード例を作成し、解説してください。

this は、その インスタンス自身 を参照する

【index.js】
class Person {
name = "Alice"; // クラスフィールド（インスタンスのプロパティ）

// クラスフィールド内でのアロー関数
greet = () => {
console.log(`Hello, my name is ${this.name}`);
};
}

const person = new Person();　 ← 　 this は「person」を指している
person.greet(); // "Hello, my name is Alice"

---

## 課題 3

- 静的メソッドと静的クラスフィールドの定義方法について、JavaScript のサンプルコードを作成しながら、それぞれの特徴を整理してください。

-- 静的メソッド --

特徴
・static キーワードを付けて定義することで クラス自身に紐づくメソッド になる
・インスタンス（new Example() で作成）からは呼び出せない
・クラス名を使って Example.staticMethod() のように呼び出す

【index.js】
class Example {
static staticMethod() {
return "This is a static method!";
}
}

console.log(Example.staticMethod()); // "This is a static method!"

const instance = new Example();
// instance.staticMethod(); // エラー: static メソッドはインスタンスから呼び出せない

-- 静的クラスフィールド --

特徴
・static を付けることで クラス自身に紐づくプロパティ になる
・インスタンス（new Example()）からはアクセスできない
・this を使ってクラス内で参照可能（this はクラス自身を指す）

【index.js】
class Example {
static staticField = "I am a static field";

static getStaticField() {
return this.staticField; // this はクラス自身（Example）を指す
}
}

console.log(Example.staticField); // "I am a static field"
console.log(Example.getStaticField()); // "I am a static field"

const instance = new Example();
// console.log(instance.staticField); // エラー: static フィールドはインスタンスからアクセス不可

---

## 課題 4

- クラスの継承の概念および、継承したクラスを定義する方法を、コード例を用いて説明してください。

クラスの継承とは、既存のクラス（親クラスまたはスーパークラス）のプロパティやメソッドを引き継いで、新しいクラス（子クラスまたはサブクラス）を定義する仕組み
extends キーワードを使用してクラスを継承する

【index.js】
// 親クラス（スーパークラス）
class Animal {
constructor(name) {
this.name = name;
}

    speak() {
        console.log(`${this.name} makes a sound.`);
    }

}

// 子クラス（サブクラス）
class Dog extends Animal {
constructor(name, breed) {
super(name); // 親クラスのコンストラクタを呼び出し
this.breed = breed;
}

    speak() {
        console.log(`${this.name} (a ${this.breed}) barks.`);
    }

}

// クラスのインスタンス生成
const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // Buddy (a Golden Retriever) barks.

-- コード解説 --
・Animal クラスを定義し、speak() メソッドを持たせる
・Dog クラスは Animal を継承し、super(name) で親クラスのコンストラクタを呼び出している
・speak() メソッドをオーバーライドして、独自の振る舞いを定義する

- super キーワードが親クラスのプロパティやメソッドをどのように利用するか、具体的なコード例を添えて解説してください。

super キーワードは、親クラスのコンストラクタやメソッドを呼び出すために使用される
super() をコンストラクタ内で呼び出すことで、親クラスのプロパティを継承できる
また、super.methodName() を使えば、親クラスのメソッドを子クラス内で呼び出すこともできる

【index.js】
class Animal {
constructor(name, age) {
this.name = name;
this.age = age;
}

    info() {
        console.log(`${this.name} is ${this.age} years old.`);
    }

}

// 子クラス
class Dog extends Animal {
constructor(name, age, breed) {
super(name, age); // 親クラスのコンストラクタを呼び出し
this.breed = breed;
}

    info() {
        console.log(`${this.name} is a ${this.breed} and is ${this.age} years old.`);
    }

}

const dog = new Dog("Buddy", 3, "Golden Retriever");
dog.info(); // Buddy is a Golden Retriever and is 3 years old.

-- コード解説 --
・Animal クラスのコンストラクタは name と age をプロパティとして持つ
・Dog クラスのコンストラクタでは super(name, age); を呼び出し
　親クラスのコンストラクタを実行
・その結果、Dog のインスタンスは name と age を親クラスから受け継ぐ

メモ：
プライベートフィールド使い分け
基本的にはシャープ（#）を使う
アンダーバー（\_）は慣習的な書き方で、アクセス制限があるわけではない
