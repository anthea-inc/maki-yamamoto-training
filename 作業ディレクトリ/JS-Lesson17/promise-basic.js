// (1) ランダムに成功 or 失敗する関数
function fetchData() {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.5; // 50%の確率で成功する想定

    setTimeout(() => {
      if (shouldResolve) {
        resolve("データの取得に成功しました！");
      } else {
        reject(new Error("データの取得に失敗しました..."));
      }
    }, 1000); // 1秒後に完了すると仮定
  });
}

// (2) Promiseの実行例
console.log("データの取得を開始します...");
fetchData()
  .then((result) => {
    console.log("成功:", result);
  })
  .catch((error) => {
    console.error("失敗:", error.message);
  });

/*
  function fetchDataWithStatus() {
  const status = { state: "pending" };

  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.5;

    setTimeout(() => {
      if (shouldResolve) {
        status.state = "fulfilled";
        resolve("データの取得に成功しました！");
      } else {
        status.state = "rejected";
        reject(new Error("データの取得に失敗しました..."));
      }
    }, 1000);
  });

  // Promise と status を一緒に返す
  return { promise, status };
}

console.log("データの取得を開始します...");
const { promise, status } = fetchDataWithStatus();

promise
  .then((result) => {
    console.log("成功:", result);
  })
  .catch((error) => {
    console.error("失敗:", error.message);
  })
  .finally(() => {
    console.log("Promiseの状態:", status.state); // fulfilled または rejected
  });
*/
