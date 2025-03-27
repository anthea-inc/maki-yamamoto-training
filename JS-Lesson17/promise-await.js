function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step1 完了");
      resolve("データ1");
    }, 1000);
  });
}

function step2(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step2 完了, 受け取ったデータ:", input);
      resolve("データ2");
    }, 1000);
  });
}

function step3(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step3 完了, 受け取ったデータ:", input);
      resolve("最終結果");
    }, 1000);
  });
}

// async function でPromiseを順番に処理
async function runSteps() {
  try {
    console.log("Async/Await での実行開始");

    const data1 = await step1();
    // step1がresolveされるまで待機
    const data2 = await step2(data1);
    const final = await step3(data2);

    console.log("全てのステップが完了しました:", final);
  } catch (error) {
    console.error("エラー発生:", error);
  }
}

runSteps();

/*
//　追加実験 await Promise.all([...])
// promise-all-test.js

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step1 完了");
      resolve("データ1");
    }, 1000);
  });
}

function step2(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step2 完了, 受け取ったデータ:", input);
      resolve("データ2");
    }, 1000);
  });
}

function step3(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step3 完了, 受け取ったデータ:", input);
      resolve("最終結果");
    }, 1000);
  });
}

// 必ず async 関数の中で await を使う
async function runAll() {
  try {
    const results = await Promise.all([step1(), step2("並列"), step3("並列")]);
    console.log("Promise.all の結果:", results);
  } catch (err) {
    console.error("エラー:", err);
  }
}

runAll();
*/

/*
//　追加実験　await Promise.race([...])
// 非同期関数の定義
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("step1 完了");
    }, 3000); // 3秒後に完了
  });
}

function step2(arg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`step2(${arg}) 完了`);
    }, 1000); // 1秒後に完了
  });
}

function step3(arg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`step3(${arg}) 完了`);
    }, 2000); // 2秒後に完了
  });
}

// 即時実行関数で await を使用
(async () => {
  const fastest = await Promise.race([step1(), step2("並列"), step3("並列")]);
  console.log("Promise.race の最速結果:", fastest);
})();
*/
