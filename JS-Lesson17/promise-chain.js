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

console.log("Promiseチェーンを開始します...");

step1()
  .then((data1) => {
    return step2(data1);
  })
  .then((data2) => {
    return step3(data2);
  })
  .then((final) => {
    console.log("全てのステップが完了しました:", final);
  })
  .catch((err) => {
    console.error("エラー発生:", err);
  });
