//　実践課題１

class User {
  static userCount = 0; // 静的フィールド（ユーザー数）

  constructor(name, age, password) {
    this.name = name; // 公開フィールド
    this.age = age; // 公開フィールド
    this._password = ""; // 非公開

    this.password = password; // setterを使う

    User.userCount++; // ユーザー数をカウント
  }
  //　パスワードのgetter
  get password() {
    return "*".repeat(this._password.length); // パスワードの長さに応じてマスク
  }

  // パスワードのsetter（6文字以上ならセット）
  set password(pw) {
    if (pw.length >= 6) {
      this._password = pw;
    } else {
      console.error("パスワードは6文字以上必要です。");
    }
  }

  // あいさつメソッド
  greet() {
    return `こんにちは、${this.name}さん（${this.age}歳）！`;
  }

  // 静的メソッド：現在のユーザー数
  static getUserCount() {
    return User.userCount;
  }
}

// テスト
console.log("＝＝＝＝＝＝＝実践課題１＝＝＝＝＝＝＝");
const u1 = new User("Maki", 24, "abcdef");
console.log(u1.greet());
console.log(u1.password);

const u2 = new User("hanako", 26, "123");
console.log(User.getUserCount());

//　実践課題２
console.log("＝＝＝＝＝＝＝実践課題２＝＝＝＝＝＝＝");
class AdminUser extends User {
  constructor(name, age, password, adminLevel) {
    //　基底クラスのプロパティはsuperキーワードを用いて初期化
    super(name, age, password);
    this.adminLevel = adminLevel;
  }
  //　管理者専用の操作を行うメソッド

  deleteUser(user) {
    console.log(`${user.name} を削除しました。`);
  }
}

// 管理者ユーザーを作成
const admin = new AdminUser("AdminTaro", 35, "securepass", 5);

// deleteUser メソッドの実行
admin.deleteUser(u1); // u1（"Maki"）を削除したことになる
console.log(u1); // 実際には削除していないことを確認する
