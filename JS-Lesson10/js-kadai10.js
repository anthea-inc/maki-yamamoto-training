// 社員データ
const employees = [
  {
    id: 1,
    name: "田中太郎",
    age: 30,
    department: "営業",
    projects: ["プロジェクトA", "プロジェクトB"],
  },
  {
    id: 2,
    name: "佐藤花子",
    age: 25,
    department: "企画",
    projects: ["プロジェクトC"],
  },
  { id: 3, name: "鈴木一郎", age: 28, department: "開発", projects: [] },
];

// 追加する社員の指定

// push により追加する社員
const pushEmployee = {
  id: 4,
  name: "高橋次郎",
  age: 32,
  department: "開発",
  projects: ["プロジェクトD"],
};

// unshift により追加する社員
const unshiftEmployee = {
  id: 5,
  name: "山本花子",
  age: 27,
  department: "企画",
  projects: ["プロジェクトE"],
};

// newEmployees 配列に含める社員（結合用）
const newEmployees = [
  {
    id: 6,
    name: "小林健",
    age: 29,
    department: "営業",
    projects: ["プロジェクトF"],
  },
];

//実践課題１
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【1-1】");
console.log(employees[0]);

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【1-2】");
console.log("");
console.log("-- lengthプロパティを利用する方法 --");
const lastEmployee = employees[employees.length - 1];
console.log(lastEmployee);
console.log("");

console.log("-- Array.prototype.atメソッドを利用する方法 --");
const lastEmployee2 = employees.at(-1);
console.log(lastEmployee2);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【1-3】");
console.log("-- 存在しないインデックスにアクセス --");
console.log(employees[10]);

//実践課題２
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【2-1】");
const employees3 = [1, "田中太郎", 30, "営業", ["プロジェクトA", "プロジェクトB"]];
const [id, name, age, department, projects] = employees3;

console.log(id);
console.log(name);
console.log(age);
console.log(department);
console.log(projects);

//実践課題３
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【3-1】");
console.log(Array.isArray(employees));
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【3-2】");
employees.forEach((employee) => console.log(`${employee.name}：${Array.isArray(employee.projects)}`));

/*　
-- 不正解の例 --
なんでこれじゃあダメなの？
console.log(Array.isArray(employees.projects));

-- ChatGPTに聞いた --
このコードは不正解となる理由は、employees は複数の社員情報を含む配列であり、直接 projects プロパティを持っているわけではないからです。

	•	employees.projects は存在しない
employees は社員オブジェクトのリストであり、projects プロパティは各社員オブジェクトの中にあります。
そのため、配列全体である employees に対して直接 projects を参照しようとすると、未定義のプロパティにアクセスすることになり、意図した結果は得られません。

	•	正しい方法は各社員オブジェクトをループ処理すること
各社員オブジェクトの中にある projects プロパティを確認するためには、配列内の各オブジェクトに対してループ処理を行い
その中で Array.isArray() を用いてチェックする必要があります。

*/

//実践課題４
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【4-1】");

const index = employees.findIndex((employee) => employee.id === 2);
console.log(index);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【4-2】");
const index2 = employees.find((employee) => employee.name === "鈴木一郎");
console.log(index2);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【4-3】");
const slicedArray = employees.slice(0, 2);
console.log(slicedArray);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【4-4】");
const index3 = employees.some((employee) => employee.department === "営業");
console.log(index3);

//実践課題５
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【5-1】");
employees.push(pushEmployee);
console.log(employees);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【5-2】");
deleteemployees = employees.pop(pushEmployee);
console.log(employees);
console.log("");

console.log("【削除した社員情報】");
console.log(deleteemployees);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【5-3】");
const createemployees = employees.unshift(unshiftEmployee);
console.log(employees);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【5-4】");
const delete2employees = employees.shift();
console.log(employees);
employees;
console.log("");

console.log("【削除した社員情報】");
console.log(delete2employees);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【5-5】");
console.log("-- concatメソッドを使用する方法 --");
const employeesmerge = employees.concat(newEmployees);
console.log(employeesmerge);
console.log("");

console.log("-- スプレッド構文（...）を使用する方法 --");
const employeesmerge2 = [...employees, ...newEmployees];
console.log(employeesmerge2);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【5-6】");
console.log("これから削除されるidが３の社員のインデックス");
// `findIndex` を使って `id === 3` の社員のインデックスを取得
const index01 = employees.findIndex((emp) => emp.id === 3);
console.log(index01);

// `index !== -1` の場合のみ削除処理を行う
const removedEmployee = employees.splice(index01, 1)[0];

console.log("idが３の社員情報を消したあとの配列");
console.log(employees);

console.log("削除したidが３の社員情報");
console.log(removedEmployee);

console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【5-7】");
console.log("-- lengthプロパティに0を代入して配列をクリアする方法 --");
const copyemployees = [...employees];
console.log(copyemployees);
copyemployees.length = 0;
console.log(copyemployees);
console.log("");

console.log("-- 変数に空の配列 ([])を再代入して配列をクリアする方法 --");
let copyemployees2 = [...employees];
console.log(copyemployees2);
copyemployees2 = [];
console.log(copyemployees2);
console.log("");

//実践課題6
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【6-1】");
const createmap = employees.map((employee) => employee.projects).flat();
console.log(createmap);
console.log("");

//実践課題7
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【7-1】");
employees.forEach((employee) => {
  console.log(employee.name);
});
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【7-2】");
const employeesname = employees.map((employee) => employee.name);
console.log(employeesname);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【7-3】");
const a = employees.filter((employee) => employee.department === "企画");
console.log(a);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【7-4】");
const totalAge = employees.reduce((sum, employee) => sum + employee.age, 0);
const averageAge = totalAge / employees.length;

console.log("合計年齢:", totalAge);
console.log("平均年齢:", averageAge);
console.log("");
/*
sumは累積変数
第二引数の 0 は初期値で、最初の sum の値として使用される
*/

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【7-5】");
let copyemployees3 = [...employees];
copyemployees3.sort((a, b) => b.age - a.age);
console.log(copyemployees3);
console.log("");

//　実践課題8
//　難しかった
console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【8-1】");
const groupedItems = employees.reduce((accumulator, currentItem) => {
  const key = currentItem.department;
  // グループがまだ存在しない場合、空配列をセット
  if (!accumulator[key]) {
    accumulator[key] = [];
  }
  // グループにアイテムを追加
  accumulator[key].push(currentItem);
  return accumulator;
}, {});

console.log(groupedItems);
console.log("");

console.log("＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝");
console.log("【8-2】");
const result = employees
  .filter((employees) => employees.department === "営業")
  .sort((a, b) => a.age - b.age)
  .map((employees) => employees.name);

console.log(result);
